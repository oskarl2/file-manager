import {cp} from './cp.js';
import {rm} from './rm.js';

export const mv = async (pathFrom, pathTo) => {
  await cp(pathFrom, pathTo);
  await rm(pathFrom);
}
