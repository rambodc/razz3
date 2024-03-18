
const functions = require('firebase-functions');
const admin = require('firebase-admin');
const cors = require('cors')({origin: true});

admin.initializeApp();

exports.getExample = functions.https.onRequest((request, response) => {
    cors(request, response, () => {
        if (request.method === 'GET') {
            response.send('Hello, this is a GET request!');
        } else {
            response.status(405).send('Method Not Allowed');
        }
    });
});



exports.simplePostAPI = functions.https.onRequest((req, res) => {
    cors(req, res, async () => {
        if (req.method !== 'POST') {
            return res.status(405).send({ error: 'Method Not Allowed' });
        }

        // Verify Firebase ID Token
        const idToken = req.get('Authorization')?.split('Bearer ')[1];
        if (!idToken) {
            return res.status(403).send({ error: 'Unauthorized' });
        }

        try {
            // Verify the token with Firebase Admin SDK
            const decodedToken = await admin.auth().verifyIdToken(idToken);
            if (!decodedToken) {
                return res.status(403).send({ error: 'Unauthorized' });
            }

            // Token is verified, proceed with the POST request
            res.status(200).send({ 
                message: "Received data successfully",
                receivedData: req.body
            });
        } catch (error) {
            console.error('Error verifying token:', error);
            res.status(403).send({ error: 'Unauthorized' });
        }
    });
});

