const { parse: pathParse } = require('path');

class MailAttachment {
  constructor(options) {
    const parsedPath = pathParse(options.path);

    this.name = options.name || parsedPath.name;
    this.filename = options.filename || `${parsedPath.name}${parsedPath.ext}`;
    this.path = options.path;
  }

  toJSON() {
    return {
      filename: this.filename,
      path: this.path,
      cid: this.name,
    };
  }
}

exports.MailAttachment = MailAttachment;
