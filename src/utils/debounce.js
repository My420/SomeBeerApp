const debounce = (f, ms) => {
  let isCooldown = false;

  return (...args) => {
    if (isCooldown) return;

    f.apply(this, args);

    isCooldown = true;

    setTimeout(() => {
      isCooldown = false;
    }, ms);
  };
};

export default debounce;
