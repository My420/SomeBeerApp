/* eslint no-param-reassign: "error" */

const arrayToObj = arr => {
  return arr.reduce((prevValue, element) => {
    prevValue[element.id] = element;
    return prevValue;
  }, {});
};

export default arrayToObj;
