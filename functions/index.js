
const functions = require('firebase-functions');
const admin = require('firebase-admin');
const cors = require('cors')({origin: true});

admin.initializeApp();

exports.createUserProfile = functions.https.onRequest((req, res) => {
    cors(req, res, async () => {
        // 1. Ensure it's a POST request
        if (req.method !== 'POST') {
            return res.status(405).send({ error: 'Method Not Allowed' });
        }

        // 2. Verify Firebase Authentication
        const idToken = req.get('Authorization')?.split('Bearer ')[1];
        if (!idToken) {
            return res.status(403).send({ error: 'Unauthorized' });
        }

        try {
            const decodedToken = await admin.auth().verifyIdToken(idToken);
            const uid = decodedToken.uid;
            const { firstName, lastName, submittedUid } = req.body;

            // 3. Verify UID consistency and non-empty fields
            if (!firstName || !lastName || uid !== submittedUid) {
                return res.status(400).send({ error: 'Invalid request' });
            }

            // 4. Check for existing user document
            const userRef = admin.firestore().collection('users').doc(uid);
            const userPublicRef = admin.firestore().collection('userPublic').doc(uid);

            const [userDoc, userPublicDoc] = await Promise.all([userRef.get(), userPublicRef.get()]);
            if (userDoc.exists || userPublicDoc.exists) {
                return res.status(409).send({ error: 'User already exists' });
            }

            // 5. Prepare documents data
            const timestamp = admin.firestore.FieldValue.serverTimestamp();
            const userData = { firstName, lastName, uid, createdDate: timestamp, lastUpdated: timestamp };

            // 6. Batch write to ensure atomicity
            const batch = admin.firestore().batch();
            batch.set(userRef, userData);
            batch.set(userPublicRef, { firstName, lastName, uid });

            await batch.commit();

            return res.status(201).send({ message: 'User profile created successfully' });
        } catch (error) {
            console.error('Authentication or Firestore operation failed:', error);
            return res.status(500).send({ error: 'Internal server error' });
        }
    });
});
