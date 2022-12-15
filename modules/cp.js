import {createReadStream, createWriteStream} from 'fs'
import fs from 'fs/promises'

import path from 'path'

export const cp = async (pathFrom, pathTo) => {
  try {
    if ((await fs.stat(pathFrom)).isFile()) {
      const fileName = pathFrom.split(path.sep).pop();
      const readableStream = createReadStream(pathFrom);
      const writableStream = createWriteStream(path.join(pathTo, fileName));

      readableStream
        .pipe(writableStream);

      return;
    }

    await fs.cp(pathFrom, pathTo, {force: false, errorOnExist: true, recursive: true});
  } catch (err) {
    throw err;
  }
};
