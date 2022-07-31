import { CellTypes } from '../entities';

const updateMineCount = (grid: CellTypes[][], x: number, y: number): CellTypes[][] => {
  const max = grid.length - 1;
  const queue = [
    [x - 1, y - 1],
    [x, y - 1],
    [x + 1, y - 1],
    [x - 1, y],
    [x + 1, y],
    [x - 1, y + 1],
    [x, y + 1],
    [x + 1, y + 1],
  ];

  while (queue.length > 0) {
    const cur = queue[0];

    if (cur[0] > max || cur[1] > max || cur[0] < 0 || cur[1] < 0) {
      queue.shift();
    } else {
      grid[cur[0]][cur[1]].mineCount = grid[cur[0]][cur[1]].mineCount + 1;
      queue.shift();
    }
  }
  return grid;
};

export { updateMineCount };