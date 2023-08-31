import { gameBoard } from './gameBoard';
import { GameBoard } from './gameBoard';

export const computerAi = (enemyBoard: GameBoard) => {
  const compPlayBoard = gameBoard('comp');
  const knownLocation: number[] = [];
  let knownHits = 0;
  //this is more of a utility function, put here for now for sake of speed
  const convertCoords = (location: number) => {
    if (location < 10) {
      const convertedCoord: number[] = [];
      convertedCoord.push(0);
      convertedCoord.push(location);
      return convertedCoord;
    } else {
      const temp = location.toString().split('');
      const convertedCoord = temp.map(Number);
      return convertedCoord;
    }
  };

  const placeBoats = () => {
    const boatSizeArray = [5, 4, 3, 3, 2];
    for (let i = 0; i < 5; i++) {
      let boatLocation = Math.floor(Math.random() * 100);
      while (compPlayBoard.checkIfOccupied(boatLocation)) {
        boatLocation = Math.floor(Math.random() * 100);
      }
      //for manipulating cords
      const cordArray = convertCoords(boatLocation);
      const yCord = cordArray[0] * 10;
      const xCord = cordArray[1];
      const upArray: number[] = [yCord + xCord];
      // tracks the state of what placements are valid
      let isUpValid = false;
      let isDownValid = false;
      let isLeftValid = false;
      let isRightValid = false;
      let isValid = 1;
      let distanceFromOrgin = 1;
      //will check for up
      for (let x = 1; x < boatSizeArray[i]; x++) {
        if (yCord + distanceFromOrgin * 10 <= 99 && compPlayBoard.checkIfOccupied(yCord + distanceFromOrgin * 10 + xCord) == false) {
          isValid++;
          upArray.push(yCord + distanceFromOrgin * 10 + xCord);
          distanceFromOrgin++;
          if (isValid == boatSizeArray[i]) {
            console.log(upArray);
            console.log('new boat');
            isValid = 1;
            distanceFromOrgin = 1;
            isUpValid = true;
          }
        }
      }
      // will check down
      // for(let x = 1; x<boatSizeArray[i]; x++){
      //   if(yCord - distanceFromOrgin * 10 )
      // }
      if (isUpValid == true) {
        compPlayBoard.populateBoard(boatSizeArray[i], upArray);
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
