import { DEVICE_MIN_WIDTH, DEVICE_NUMBER } from './constants';

const calcDeviceNumber = width => {
  if (width > DEVICE_MIN_WIDTH.LPC) {
    return DEVICE_NUMBER.LPC;
  }
  if (width > DEVICE_MIN_WIDTH.MPC) {
    return DEVICE_NUMBER.MPC;
  }
  if (width > DEVICE_MIN_WIDTH.TABLET) {
    return DEVICE_NUMBER.TABLET;
  }
  return DEVICE_NUMBER.MOBILE;
};

export default calcDeviceNumber;
