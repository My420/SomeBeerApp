const ROW_AMOUNT = 2;
const CELLS_IN_ROW = 6;
const FULL_CIRCLE_IN_SPIN = 5;
const SHIFT_VALUE = 10;

const calcStepAmount = cellWidth => {
  const stepForFullCircle =
    (cellWidth * CELLS_IN_ROW * ROW_AMOUNT) / SHIFT_VALUE;

  return stepForFullCircle * FULL_CIRCLE_IN_SPIN;
};

/* eslint no-param-reassign: ["error", { "props": false }] */

const spin = (row1, row2) => {
  const computedStyle = window.getComputedStyle(row1);
  const cellWidth = +computedStyle.width.slice(0, -2) / CELLS_IN_ROW;
  const stepAmount = calcStepAmount(cellWidth);
  const row1ChangeX = -(cellWidth * CELLS_IN_ROW + SHIFT_VALUE);
  const row2ChangeX = -(cellWidth * CELLS_IN_ROW * 2) - SHIFT_VALUE;
  const row1ChangePos = cellWidth * CELLS_IN_ROW - SHIFT_VALUE;
  const row2ChangePos = -SHIFT_VALUE;
  let currentStep = 0;
  let currentRow1X = 0;
  let currentRow2X = 0;

  const step = () => {
    if (currentStep < stepAmount) {
      let row1NewX = currentRow1X - SHIFT_VALUE;
      let row2NewX = currentRow2X - SHIFT_VALUE;

      row1NewX = row1NewX === row1ChangeX ? row1ChangePos : row1NewX;
      row2NewX = row2NewX === row2ChangeX ? row2ChangePos : row2NewX;

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
