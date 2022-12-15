import fs from 'fs/promises'

export const add = async (fileName) => {
  await fs.writeFile(fileName, '').catch(er => console.log(er));
};
