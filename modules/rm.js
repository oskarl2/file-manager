import fs from 'fs/promises'

export const rm = async (filePath) => {
  await fs.rm(filePath, {recursive: true}).catch(err => console.log(err));
};
