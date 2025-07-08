import React, { useState, useEffect } from 'react';
import { storage } from './firebase';
import { ref, getDownloadURL } from 'firebase/storage';

function App() {
    const [imageUrl, setImageUrl] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const loadImage = async () => {
            try {
                // Replace 'your-image.jpg' with your actual image filename in Firebase Storage
                const imageRef = ref(storage, 'furniture1.jpg');
                const url = await getDownloadURL(imageRef);
                setImageUrl(url);
                setLoading(false);
            } catch (error) {
                console.error('Error loading image:', error);
                setError('Failed to load image: ' + error.message);
                setLoading(false);
            }
        };

        loadImage();
    }, []);

    return (
        <div style={{ padding: '20px', textAlign: 'center' }}>
            <h1>Image Labeling App</h1>

            {loading && <p>Loading image...</p>}

            {error && (
                <div style={{ color: 'red', padding: '10px' }}>
                    <p>{error}</p>
                </div>
            )}

            {imageUrl && (
                <div>
                    <p>Image loaded successfully!</p>
                    <img
                        src={imageUrl}
                        alt="Firebase Storage"
                        style={{
                            maxWidth: '100%',
                            height: 'auto',
                            border: '1px solid #ccc',
                            borderRadius: '8px'
                        }}
                    />
                </div>
            )}
        </div>
    );
}

export default App;