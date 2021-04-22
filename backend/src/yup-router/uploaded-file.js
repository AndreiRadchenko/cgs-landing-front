const {
  parse: pathParse,
  relative: pathRelative,
} = require('path');

const {
  extension: mimeExtension,
} = require('mime-types');

const { config } = require('../config');

const kName = Symbol('name');
const kExtension = Symbol('extension');
const kSavedAs = Symbol('savedAs');
const kMimeType = Symbol('mimeType');
const kSize = Symbol('size');
const kHash = Symbol('hash');
const kPath = Symbol('path');

class UploadedFile {
  constructor(payload) {
    this.payload = payload;
  }

  get name() {
    if (this[kName] === undefined) {
      const { name } = pathParse(this.payload.name);

      this[kName] = name;
    }

    return this[kName];
  }

  get extension() {
    if (this[kExtension] === undefined) {
      const { ext } = pathParse(this.payload.path);

      let extension = ext.slice(1);

      if (extension.length === 0) {
        extension = mimeExtension(ext);
      }

      this[kExtension] = extension;
    }

    return this[kExtension];
  }

  get savedAs() {
    if (this[kSavedAs] === undefined) {
      this[kSavedAs] = pathRelative(config.files.storagePath, this.path);
    }

    return this[kSavedAs];
  }

  get mimeType() {
    if (this[kMimeType] === undefined) {
      this[kMimeType] = this.payload.type;
    }

    return this[kMimeType];
  }

  get size() {
    if (this[kSize] === undefined) {
      this[kSize] = this.payload.size;
    }

    return this[kSize];
  }

  get hash() {
    if (this[kHash] === undefined) {
      this[kHash] = this.payload.hash;
    }

    return this[kHash];
  }

  get path() {
    if (this[kPath] === undefined) {
      this[kPath] = this.payload.path;
    }

    return this[kPath];
  }
}

exports.UploadedFile = UploadedFile;
