import zlib from 'zlib'
import fs from 'fs';
import path from 'path';
import {open} from 'node:fs/promises';
import {pipeline} from 'node:stream';

export const zip = async (source, method) => {
  let newPath
  let zipHandler

  if (method === 'compress') {
    newPath = `${source}.br`
    zipHandler = zlib.createBrotliCompress()
  } else {
    newPath = path.join(process.cwd(), source).slice(0, -3)
    zipHandler = zlib.createBrotliDecompress()
  }

  const sourceFd = await open(source);
  const readableStream = sourceFd.createReadStream();
  const writableStream = fs.createWriteStream(newPath);

  return new Promise((resolve, reject) => {
    pipeline(readableStream, zipHandler, writableStream, (err) => {
      if (err) {
        reject();
      }

      resolve();
    });
  });
};


