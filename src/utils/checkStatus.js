const checkStatus = response => {
  const responseStatus = +response.status;
  if (responseStatus >= 200 && responseStatus < 300) {
    return response;
  }
  throw new Error(response.statusText);
};

export default checkStatus;
