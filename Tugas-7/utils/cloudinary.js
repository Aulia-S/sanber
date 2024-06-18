const cloudinary = require('cloudinary')

// Cloudinary configuration
cloudinary.config({
  secure: true,
})

const uploadToCloudinary = (file) => {
  return new Promise((resolve) => {
    cloudinary.v2.uploader
      .upload_stream((error, uploadResult) => {
        return resolve(uploadResult)
      })
      .end(file)
  })
}

module.exports = uploadToCloudinary
