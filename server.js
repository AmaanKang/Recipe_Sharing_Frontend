const express = require('express');
const multer = require('multer'); // Middleware for handling file uploads
const cors = require('cors');
const app = express();
const port = 4000;

app.use(cors());
// Create a storage engine for multer
const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    // Set the destination folder where uploaded files will be saved
    callback(null, 'src/Food_Images/');
  },
  filename: (req, file, callback) => {
    // Set the filename for the uploaded file
    callback(null, file.originalname);
  },
});

// Initialize multer with the storage engine
const upload = multer({ storage });

// Serve static files from the 'uploads' directory
app.use(express.static('src/Food_Images/'));

// Route to handle file uploads
app.post('/upload', upload.single('file'), (req, res) => {
  if (!req.file) {
    return res.status(400).send('No file uploaded.');
  }

  // You can perform additional actions with the uploaded file here
  // For example, you can save the file information to a database or process it further.

  res.send('File uploaded successfully.');
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
