import fs from 'fs/promises';

export const ls = async () => {
  await fs.readdir(process.cwd()).then(async (files) => {
    const sortedFiles = files.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
    const typedFiles = await Promise.all(sortedFiles.map(async (file) => ({
      name: file,
      type: (await fs.stat(file)).isFile() ? 'file' : 'directory'
    })));

    console.table(typedFiles)
  });
};
