import { GameBoard } from './gameBoard';

export const playerUtilities = (): PlayerUtilities => {
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

  const generateRandomLocation = () => {
    //100 used because of tiles
    return Math.floor(Math.random() * 100);
  };

  const generateRandomLocationUnocupied = (board: GameBoard) => {
    let isFinished = false;
    while (isFinished == false) {
      const location = generateRandomLocation();
      if (board.checkIfOccupied(location) == false) {
        isFinished = true;
        return location;
      }
    }
  };

  const boatLocationChooser = (board: GameBoard, operation: number, boatSize: number) => {
    let isFinished = false;
    while (isFinished == false) {
      let cordIsStillValid = true;
      const boatOrgin = generateRandomLocationUnocupied(board);
      const boatOrginArray = convertCoords(boatOrgin);
      const xCord = boatOrginArray[1];
      const greatestPossibileX = boatSize + xCord;
      const leastPossibileX = xCord - boatSize;
      if (greatestPossibileX > 9 && operation == 1) {
        cordIsStillValid = false;
      }
      if (leastPossibileX < 0 && operation == -1) {
        cordIsStillValid = false;
      }
      const boatLocation = [boatOrgin];
      let iteration = 1;
      while (cordIsStillValid == true) {
        const nextValue = boatOrgin + operation * iteration;
        if (nextValue >= 0 && nextValue <= 99 && board.checkIfOccupied(nextValue) == false) {
          boatLocation.push(nextValue);
          iteration++;
          if (boatLocation.length == boatSize) {
            board.populateBoard(boatSize, boatLocation);
            isFinished = true;
            cordIsStillValid = false;
          }
        } else {
          cordIsStillValid = false;
        }
      }
    }
  };
  return { generateRandomLocation, generateRandomLocationUnocupied, boatLocationChooser };
};

interface PlayerUtilities {
  generateRandomLocation(): number;
  generateRandomLocationUnocupied(board: GameBoard): number;
  boatLocationChooser(board: GameBoard, operation: number, boatSize: number): void;
}
