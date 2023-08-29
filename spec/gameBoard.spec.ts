import { gameBoard } from '../src/components/gameBoard';

test('checks tile creation', () => {
  const player1gameBoard = gameBoard('me');
  expect(player1gameBoard.tileContainer.length).toBe(100);
});

test('checks if occupy checker works', () => {
  const player1gameBoard = gameBoard('me');
  expect(player1gameBoard.checkIfOccupied(0)).toBe(false);
});

test('checks if occupied maker work', () => {
  const player1gameBoard = gameBoard('me');
  player1gameBoard.makeOccupied(0);
  expect(player1gameBoard.tileContainer[0].checkIsOccupied()).toBe(true);
});

test('check is hit', () => {
  const player1gameBoard = gameBoard('me');
  expect(player1gameBoard.checkIfHit(0)).toBe(false);
});

test('simulates a hit,', () => {
  const player1gameBoard = gameBoard('me');
  player1gameBoard.registerHit(0);
  expect(player1gameBoard.checkIfHit(0)).toBe(true);
});

test('checks if boat crator works', () => {
  const player1gameBoard = gameBoard('me');
  player1gameBoard.populateBoard(1, [0, 1]);
  expect(player1gameBoard.retrieveBoatContainer().length).toBe(1);
});
// these coords are pulled from a boat created in gameBoard
test('checks if boats register hits', () => {
  const player1gameBoard = gameBoard('me');
  player1gameBoard.populateBoard(2, [3, 4]);
  const boat = player1gameBoard.retrieveBoatContainer()[0];
  player1gameBoard.registerHit(3);
  player1gameBoard.registerHit(4);
  expect(boat.checkHitsRegistered()).toBe(2);
});

test('check to see if boat occupies space', () => {
  const player1gameBoard = gameBoard('me');
  player1gameBoard.populateBoard(2, [3, 4]);
  expect(player1gameBoard.checkIfOccupied(3)).toBe(true);
  expect(player1gameBoard.checkIfOccupied(4)).toBe(true);
});

test('check overlap system', () => {
  const player1gameBoard = gameBoard('me');
  player1gameBoard.populateBoard(2, [3, 4]);
  expect(player1gameBoard.populateBoard(1, [3, 13])).toBe('Ships can not overlap');
});
