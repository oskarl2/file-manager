import fs from 'fs/promises'

export const rn = async (oldPath, newPath) => {
  await fs.rename(oldPath, newPath);
};
