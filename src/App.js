import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import axios from "axios"
function App() {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);

  // Handle image selection
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  return (
    <div className="uploader-container">
    <h2>Image Uploader</h2>
    <form  className="uploader-form">
      <input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        className="file-input"
      />
      {preview && (
        <div className="image-preview">
          <img
            src={preview}
            alt="Preview"
            className="preview-image"
          />
        </div>
      )}
      <button type="submit" className="upload-button">
        Upload Image
      </button>
    </form>
  </div>
  );
}

export default App;
