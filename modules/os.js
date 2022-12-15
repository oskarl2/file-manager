import * as operationSystem from 'os';

const getCpusInfo = () => {
  const cpus = operationSystem.cpus();
  let systemCpusInfo = `Cpus count is ${cpus.length}\n`;

  cpus.forEach(cpu => {
    systemCpusInfo += `Model: ${cpu.model}; Clock rate: ${cpu.speed / 1000}Ghz\n`;
  });

  return systemCpusInfo;
};

const getUserName = () => {
  return operationSystem.userInfo().username;
};

const AVAILABLE_OS_ARGUMENTS = {
  '--EOL': operationSystem.EOL,
  '--cpus': getCpusInfo,
  '--homedir': operationSystem.homedir,
  '--username': getUserName,
  '--architecture': operationSystem.arch,
};

export const os = async (args) => {
  const osParams = AVAILABLE_OS_ARGUMENTS[args];

  if (typeof osParams === 'function') {
    console.log(osParams());
    return;
  }

  console.log(osParams);
};
