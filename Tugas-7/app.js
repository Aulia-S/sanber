require('dotenv').config()
const express = require('express')
const upload = require('./middlewares/multer-config')
const uploadToCloudinary = require('./utils/cloudinary')
const app = express()

app.post('/upload/single', upload.single('file'), async (req, res) => {
  try {
    const result = await uploadToCloudinary(req.file.buffer)

    res.json({ imageUrl: result.secure_url })
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Error uploading image to Cloudinary' })
  }
})

app.post('/upload/multiple', upload.array('files', 10), async (req, res) => {
  try {
    let urls = []
    for (file in req.files) {
      console.log(req.files[file])
      const result = await uploadToCloudinary(req.files[file].buffer)
      urls.push(result.secure_url)
    }

    res.json({ imageUrls: urls })
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Error uploading images to Cloudinary' })
  }
})

// Start the server
const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
