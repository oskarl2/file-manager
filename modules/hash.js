import fs from 'fs/promises';
import crypto from 'crypto';

export const hash = async (path) => {
  const file = await fs.readFile(path);
  console.log(
    crypto
      .createHash('sha256')
      .update(file)
      .digest('hex')
  );
};
