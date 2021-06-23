const { S3 } = require('aws-sdk');

const { config } = require('../../config');

const { File } = require('../../database');

const {
  getFileName,
  getFileExtension,
} = require('./helpers');

class FileService {
  constructor() {
    this.s3 = new S3({
      accessKeyId: config.aws.s3.accessKeyId,
      secretAccessKey: config.aws.s3.secretAccessKey,
    });
  }

  async upload(options) {
    const file = new File({
      name: getFileName(options.filename),
      extension: getFileExtension(options.filename),
      mimeType: options.mimeType,
    });

    const params = {
      Bucket: config.aws.s3.bucketName,
      Key: `${file.id}.${file.extension}`,
      ACL: 'public-read',
      ContentType: options.mimeType,
      Body: options.body,
    };

    const request = this.s3.upload(params);

    let fileSize = 0;

    request.on('httpUploadProgress', (progress) => {
      fileSize = progress.total;
    });

    const response = await request.promise();

    file.size = fileSize;

    file.s3FileKey = response.Key;
    file.s3FileUrl = response.Location;

    return file.save();
  }

  async delete(options) {
    const params = {
      Bucket: config.aws.s3.bucketName,
      Key: options.id,
    };

    await this.s3.deleteObject(params).promise();

    await File.deleteOne({
      s3FileKey: options.id,
    });
  }
}

exports.FileService = FileService;

const fileService = new FileService();

exports.fileService = fileService;
