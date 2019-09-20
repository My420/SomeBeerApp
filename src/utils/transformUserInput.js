const transformUserInput = value => {
  return value.trim().replace(/ +/g, '_');
};

export default transformUserInput;
