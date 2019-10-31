import random from './random';

/* eslint no-param-reassign: ["error", { "props": false }] */

const ROW_AMOUNT = 2;
const CELLS_IN_ROW = 6;
const CELLS_IN_WINDOW = 4;
const FULL_CIRCLE_IN_SPIN = 2;
const SHIFT_VALUE = 10;

const calcStepAmountForFullCircle = cellWidth => {
  const stepAmount =
    (cellWidth * CELLS_IN_ROW * ROW_AMOUNT * FULL_CIRCLE_IN_SPIN) / SHIFT_VALUE;

  return stepAmount;
};

const calcStepAmountForWinnerCell = (cellWidth, winner) => {
  const pointerPosition = (cellWidth * CELLS_IN_WINDOW) / 2;
  const randomShift = random(10, cellWidth - 10);

  const stepAmount =
    (winner * cellWidth - pointerPosition - randomShift) / SHIFT_VALUE;

  return stepAmount;
};

const spin = (row1, row2) => {
  const winner = random(1, CELLS_IN_ROW * ROW_AMOUNT);
  console.log(winner);
  const computedStyle = window.getComputedStyle(row1);
  const cellWidth = +computedStyle.width.slice(0, -2) / CELLS_IN_ROW;
  const row1CircleX = -(cellWidth * CELLS_IN_ROW) - SHIFT_VALUE;
  const row2CircleX = -(cellWidth * CELLS_IN_ROW * 2) - SHIFT_VALUE;
  const row1ChangePos = cellWidth * CELLS_IN_ROW - SHIFT_VALUE;
  const row2ChangePos = -SHIFT_VALUE;

  const stepAmount =
    calcStepAmountForFullCircle(cellWidth) +
    calcStepAmountForWinnerCell(cellWidth, winner);

  let currentStep = 0;
  let currentRow1X = 0;
  let currentRow2X = 0;

  const step = () => {
    if (currentStep < stepAmount) {
      let row1NewX = currentRow1X - SHIFT_VALUE;
      let row2NewX = currentRow2X - SHIFT_VALUE;

      row1NewX = row1NewX === row1CircleX ? row1ChangePos : row1NewX;
      row2NewX = row2NewX === row2CircleX ? row2ChangePos : row2NewX;

      row1.style.transform = `translateX(${row1NewX}px)`;
      row2.style.transform = `translateX(${row2NewX}px)`;

      currentRow1X = row1NewX;
      currentRow2X = row2NewX;

      currentStep += 1;

      window.requestAnimationFrame(step);
    }
  };

  window.requestAnimationFrame(step);
};

export default spin;
