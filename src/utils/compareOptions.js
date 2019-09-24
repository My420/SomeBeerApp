const compareOptions = (opt1, opt2) => {
  let isEqual = true;
  Object.keys(opt1).forEach(value => {
    if (opt1[value] !== opt2[value]) {
      isEqual = false;
    }
  });
  return isEqual;
};

export default compareOptions;
