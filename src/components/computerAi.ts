import { gameBoard } from './gameBoard';
import { GameBoard } from './gameBoard';
import { playerUtilities } from './playerUtilites';

export const computerAi = (enemyBoard: GameBoard) => {
  const compPlayBoard = gameBoard('comp');
  const knownLocation: number[] = [];
  //this array reprsents the ways a boat can be placed
  const locationManipulationArray = [1, -1, 10, -10];
  const playerUtils = playerUtilities();
  let knownHits = 0;
  //this is more of a utility function, put here for now for sake of speed
  const placeBoats = () => {
    const boatSizeArray = [5, 4, 3, 3, 2];
    for (let i = 0; i < 5; i++) {
      const currentBoatSize = boatSizeArray[i];
      const placementMethodSelector = Math.floor(Math.random() * 4) + 1;
      //will place down
      if (placementMethodSelector == 1) {
        playerUtils.boatLocationChooser(compPlayBoard, locationManipulationArray[3], currentBoatSize);
      }
      //will place up
      if (placementMethodSelector == 2) {
        playerUtils.boatLocationChooser(compPlayBoard, locationManipulationArray[2], currentBoatSize);
      }
      //will place forward
      if (placementMethodSelector == 3) {
        playerUtils.boatLocationChooser(compPlayBoard, locationManipulationArray[0], currentBoatSize);
      }
      //will place back
      if (placementMethodSelector == 4) {
        playerUtils.boatLocationChooser(compPlayBoard, locationManipulationArray[1], currentBoatSize);
      }
    }
  };

  const randomShot = () => {
    let location = Math.floor(Math.random() * 100);
    while (enemyBoard.checkIfHit(location) == true) {
      location = Math.floor(Math.random() * 100);
    }
    enemyBoard.registerHit(location);
    if (enemyBoard.checkIfHit(location) == true && enemyBoard.checkIfOccupied(location) == true) {
      knownLocation.push(location);
      knownHits++;
    }
  };
  //   const preciseShot = () => {
  //     if(knownHits==1){
  //         const cord = knownLocation[0]

  //     }
  //   };
  return { randomShot, compPlayBoard, placeBoats };
};
