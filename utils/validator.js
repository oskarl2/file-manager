import {INVALID_INPUT, UNKNOWN_COMMAND} from './errors.js';

const ARGUMENTS_BY_ACTION_MAP = {
  up: 0,
  cd: 1,
  ls: 0,
  cat: 1,
  add: 1,
  rn: 2,
  cp: 2,
  mv: 2,
  rm: 1,
  os: 1,
  hash: 1,
  compress: 1,
  decompress: 1
};

export const dataValidator = (data) => {
  const [action, ...args] = data;
  const argumentsCount = ARGUMENTS_BY_ACTION_MAP[action];

  return new Promise((resolve, reject) => {
    if (argumentsCount === undefined) {
      reject({error: UNKNOWN_COMMAND});
      return;
    }

    if (argumentsCount !== args.length) {
      reject({error: INVALID_INPUT, value: argumentsCount});
      return;
    }

    resolve();
  });
};
