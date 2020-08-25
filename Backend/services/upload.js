require('dotenv').config();
const aws = require('aws-sdk');
const multerS3 = require('multer-s3');
const multer = require('multer');
const _ = require('lodash');

const s3 = new aws.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
});
const s3config = multerS3({
  s3,
  bucket: process.env.BUCKET_NAME,
  contentType: multerS3.AUTO_CONTENT_TYPE,
  acl: 'public-read',
  key: (req, file, cb) => cb(null, `${_.uniqueId() + file.originalname}`),
});

const upload = multer({ storage: s3config });

module.exports = upload;
