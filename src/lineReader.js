import readline from 'readline';
import fileManager from './fileManager.js';
import {COLORS, errorHandler} from '../utils/errors.js';
import {dataValidator} from '../utils/validator.js';
import {operationsExecutor} from './operationsExecutor.js';

const promptCommand = (rl) => {
  rl.setPrompt(`${COLORS.green.replace('%s', process.cwd())} >> `);
  rl.prompt();
};

export const initLineReader = () => {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  promptCommand(rl)

  rl.on('line', async (input) => {
    const line = input.trim();
    const data = line.split(' ');

    if (line === '.exit') {
      rl.close();

      return;
    }

    await dataValidator(data)
      .then(async () => await operationsExecutor(data))
      .catch(errorHandler);

    fileManager.getCurrentWorkingDirectory();
    promptCommand(rl);
  })

  rl.on('SIGINT', () => {
    rl.close();
  });

  rl.on('close', () => {
    console.log(`Thank you for using File Manager, ${fileManager.getUserName}, goodbye!`);
    process.exit();
  });
};
