import './App.css';
import { useState } from 'react';
import { IoCloseCircleOutline } from 'react-icons/io5';

function App() {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [fileTypes, setFileTypes] = useState("image");

  // Handle image or video selection
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  // Toggle between image and video selection
  const toggleFileType = () => {
    setFileTypes(fileTypes === "image" ? "video" : "image");
    setImage(null);
    setPreview(null);
  };

  const imageMessageReply = (preview) => {
    return (
      <div className="reply_image_main_container">
        <IoCloseCircleOutline className="reply_image_close" />
        <div className="reply_image_container">
          <img src={preview} alt="reply" className="reply_image_content" />
        </div>
      </div>
    );
  };

  const videoMessage = (preview) => {
    return (
      <div className="reply_image_main_container">
        <IoCloseCircleOutline className="reply_image_close" />
        <div className="reply_image_container">
          <video controls className="reply_image_content">
            <source src={preview} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    );
  };

  return (
    <div className="uploader-container">
      <h2>Media Uploader</h2>
      
      {/* Toggle button to switch between Image and Video */}
      <button className="toggle-button" onClick={toggleFileType}>
        {fileTypes === "image" ? "Switch to Video" : "Switch to Image"}
      </button>

      {/* Form for file input */}
      <form className="uploader-form">
        <input
          type="file"
          accept={fileTypes === "image" ? "image/*" : "video/*"}
          onChange={handleFileChange}
          className="file-input"
        />

        {preview && fileTypes === "image" && (
          <div className="image-preview">
            <img src={preview} alt="Preview" className="preview-image" />
          </div>
        )}
        
        {preview && fileTypes === "video" && (
          <div className="video-preview">
            <video controls className="preview-video">
              <source src={preview} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        )}

        <button type="submit" className="upload-button">
          Upload {fileTypes === "image" ? "Image" : "Video"}
        </button>
      </form>

      {/* Display image or video based on file type */}
      {fileTypes === "image" && preview && imageMessageReply(preview)}
      {fileTypes === "video" && preview && videoMessage(preview)}
    </div>
  );
}

export default App;
