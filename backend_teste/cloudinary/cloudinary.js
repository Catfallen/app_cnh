const cloudinary = require('cloudinary').v2;

cloudinary.config({
  cloud_name: 'dkukx7za4',
  api_key: '887796349498128',
  api_secret: process.env.CLOUDINARY_API_SECRET
});

module.exports = cloudinary;
