import {createReadStream} from 'fs';

export const cat = async (filePath) => {
  return new Promise((resolve, reject) => {
    createReadStream(filePath, 'utf8')
      .on('data', (content) => {
        console.log(content);
      })
      .on('error', (error) => reject(error))
      .on('end', () => resolve());
  });
};
