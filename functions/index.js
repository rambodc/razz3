const functions = require("firebase-functions");
const cors = require("cors")({origin: true});

exports.getExample = functions.https.onRequest((request, response) => {
    cors(request, response, () => {
        if (request.method === 'GET') {
            response.send('Hello, this is a GET request 2!');
        } else {
            response.status(405).send('Method Not Allowed');
        }
    });
});
