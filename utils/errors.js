export const COLORS = {
  green: '\x1b[32m%s\x1b[0m',
  red: '\x1b[31m%s\x1b[0m'
};
export const UNKNOWN_COMMAND = 'unknown_command';
export const INVALID_INPUT = 'invalid_input';

export const errorHandler = ({error, value}) => {
  if (error === INVALID_INPUT) {
    console.log(COLORS.red, `Invalid input: arguments must be ${value}`);
  } else if (error === UNKNOWN_COMMAND) {
    console.log(COLORS.red, 'Invalid input');
  } else {
    console.log(COLORS.red, 'Operation failed');
  }
};
