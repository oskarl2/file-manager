import os from 'os';
import {initLineReader} from './lineReader.js';
import {COLORS} from '../utils/errors.js';

class FileManager {
  get getUserName() {
    return this.userName;
  }

  setUserName = () => {
    process.argv.slice(2).forEach(arg => {
      if (arg.startsWith('--username=')) {
        this.userName = arg.split('=')[1];
      }
    });

    if (!this.getUserName) {
      console.log(COLORS.red, 'Username not passed');
      process.exit();
    }
  }

  getCurrentWorkingDirectory = () => {
    console.log(`You are currently in ${process.cwd()}`);
  }

  init = () => {
    this.setUserName();
    process.chdir(os.homedir());

    console.log(`Welcome to the File Manager, ${this.getUserName}!`);

    this.getCurrentWorkingDirectory();
    initLineReader();
  }
}

export default new FileManager()
