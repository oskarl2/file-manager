import {cd, ls, up, cat, add, rn, cp , mv, rm, os, hash, zip} from '../modules/index.js';

export const operationsExecutor = async (data) => {
  const [action, args1, args2] = data;

  switch (action) {
    case 'up':
      await up();
      break;
    case 'cd':
      await cd(args1);
      break;
    case 'ls':
      await ls();
      break;
    case 'cat':
      await cat(args1);
      break;
    case 'add':
      await add(args1);
      break;
    case 'rn':
      await rn(args1, args2);
      break;
    case 'cp':
      await cp(args1, args2);
      break;
    case 'mv':
      await mv(args1, args2);
      break;
    case 'rm':
      await rm(args1);
      break;
    case 'os':
      await os(args1);
      break;
    case 'hash':
      await hash(args1);
      break;
    case 'compress':
      await zip(args1, 'compress');
      break;
    case 'decompress':
      await zip(args1, 'decompress');
      break;
    default:
      console.log('Invalid input');
  }
};
