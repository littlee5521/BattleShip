import { gameBoard } from '../src/components/gameBoard';
import { computerAi } from '../src/components/computerAi';

test('three tiles in player board will be hit', () => {
  const playersGameBoard = gameBoard('me');
  const comp = computerAi(playersGameBoard);
  comp.randomShot();
  comp.randomShot();
  comp.randomShot();
  const playerTiles = playersGameBoard.tileContainer;
  let hitAmount = 0;

  playerTiles.forEach((tile) => {
    if (tile.checkIsHit()) {
      hitAmount++;
    }
  });

  expect(hitAmount).toBe(3);
});

test('there will be a boat on board', () => {
  const playersGameBoard = gameBoard('me');
  const comp = computerAi(playersGameBoard);

  comp.placeBoats();
  expect(comp.compPlayBoard.retrieveBoatContainer().length).toBeGreaterThanOrEqual(1);
});
