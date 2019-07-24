const checkStatus = response => {
  const responseStatus = +response.status;
  if (responseStatus >= 200 && responseStatus < 300) {
    return Promise.resolve(response);
  }
  return Promise.reject(response);
};

export default checkStatus;
