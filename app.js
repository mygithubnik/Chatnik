const express = require('express');
const multer = require('multer');
const fs = require('fs');
const path = require('path');

const app = express();
const port = 3000;

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  }
});

const upload = multer({ storage: storage });

app.set('view engine', 'ejs');
app.use(express.static('public'));

const MAX_STORAGE = 400 * 1024 * 1024; // 400 MB in bytes

function getUsedStorage() {
  const uploadedFiles = fs.readdirSync(path.join(__dirname, 'public/uploads'));
  const usedStorage = uploadedFiles.reduce((total, file) => {
    const filePath = path.join(__dirname, 'public/uploads', file);
    const fileSize = fs.statSync(filePath).size;
    return total + fileSize;
  }, 0);
  return usedStorage;
}

app.get('/', (req, res) => {
  const uploadedFiles = fs.readdirSync(path.join(__dirname, 'public/uploads'));
  const usedStorage = getUsedStorage();
  const availableStorage = MAX_STORAGE - usedStorage;
  res.render('index', { uploadedFiles, usedStorage, availableStorage });
});

app.post('/upload', upload.array('files'), (req, res) => {
  res.status(200).send('Files uploaded successfully');
});

app.get('/download/:filename', (req, res) => {
  const file = path.join(__dirname, 'public/uploads', req.params.filename);
  res.download(file);
});

app.get('/delete/:filename', (req, res) => {
  const file = path.join(__dirname, 'public/uploads', req.params.filename);
  if (fs.existsSync(file)) {
    fs.unlinkSync(file);
  }
  res.redirect('/');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});