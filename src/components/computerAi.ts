import { gameBoard } from './gameBoard';
import { GameBoard } from './gameBoard';

export const computerAi = (enemyBoard: GameBoard) => {
  const compPlayBoard = gameBoard('comp');
  const knownLocation: number[] = [];
  let knownHits = 0;

  const randomShot = () => {
    let location = Math.floor(Math.random() * 100);
    while (enemyBoard.checkIfHit(location) == true) {
      location = Math.floor(Math.random() * 100);
    }
    enemyBoard.registerHit(location);
    if (enemyBoard.checkIfHit(location) == true && enemyBoard.checkIfOccupied(location) == true) {
      knownLocation.push(location);
      knownHits = knownHits++;
    }
  };

  //   const preciseShot = () => {
  //     if(knownHits==1){
  //         const cord = knownLocation[0]

  //     }
  //   };
  return { randomShot };
};
