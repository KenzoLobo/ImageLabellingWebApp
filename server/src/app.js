const express = require('express');
const cors = require('cors');
const admin = require('firebase-admin');

const app = express();
const PORT = process.env.PORT || 5000;

// Initialize Firebase Admin (you'll need to add your service account key)
const serviceAccount = require('./serviceAccountKey.json'); // Download from Firebase Console
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    storageBucket: 'your-project-id.appspot.com'
});

const bucket = admin.storage().bucket();

app.use(cors());
app.use(express.json());

// API endpoint to get image URL
app.get('/api/image', async (req, res) => {
    try {
        const fileName = 'your-image.jpg'; // Replace with your image filename
        const file = bucket.file(fileName);

        // Get signed URL that expires in 1 hour
        const [url] = await file.getSignedUrl({
            action: 'read',
            expires: Date.now() + 3600000, // 1 hour
        });

        res.json({ imageUrl: url });
    } catch (error) {
        console.error('Error getting image:', error);
        res.status(500).json({ error: 'Failed to get image' });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});