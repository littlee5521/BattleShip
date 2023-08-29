import { tile } from './tile';
import { Tile } from './tile';
import { battleShip } from './battleShip';
import { Ship } from './battleShip';
//this was done to have a easy way to group all tiles of one player
export const gameBoard = (player: string): GameBoard => {
  const tileContainer: Tile[] = [];
  const boatContainer: Ship[] = [];
  let remaningBoats = 5;

  for (let i = 0; i < 100; i++) [tileContainer.push(tile(i))];

  const removeBoat = () => {
    let playerIsDead = false;
    remaningBoats = remaningBoats - 1;
    if (remaningBoats == 0) {
      playerIsDead = true;
      return playerIsDead;
    } else {
      return playerIsDead;
    }
  };

  const populateBoard = (length: number, location: number[]) => {
    let isValid = true;
    location.forEach((cord) => {
      if (checkIfOccupied(cord)) {
        isValid = false;
      }
    });
    if (isValid == true) {
      boatContainer.push(battleShip(length, location));
      location.forEach((cord) => {
        makeOccupied(cord);
      });
    } else {
      return 'Ships can not overlap';
    }
  };

  const checkIfOccupied = (location: number) => {
    return tileContainer[location].checkIsOccupied();
  };

  const checkIfHit = (location: number) => {
    return tileContainer[location].checkIsHit();
  };

  const makeOccupied = (location: number) => {
    tileContainer[location].makeOccupied();
  };

  //this is a bit convulted. I think i can refactor it to not have to go through so many steps

  const registerHit = (location: number) => {
    if (checkIfHit(location) == false) {
      tileContainer[location].registerHit();
      boatContainer.forEach((boat) => {
        const locationArray: number[] = boat.retrieveLocation();
        locationArray.forEach((cord) => {
          if (cord == location) {
            boat.registerHit();
            if (boat.checkIsSunk() == true) {
              removeBoat();
            }
          }
        });
      });
    }
  };

  const retrieveBoatContainer = () => {
    return boatContainer;
  };

  return { tileContainer, makeOccupied, checkIfOccupied, checkIfHit, registerHit, retrieveBoatContainer, populateBoard };
};

export interface GameBoard {
  tileContainer: Tile[];
  makeOccupied(location: number): void;
  checkIfOccupied(location: number): boolean;
  checkIfHit(location: number): boolean;
  registerHit(location: number): void;
  retrieveBoatContainer(): Ship[];
  populateBoard(length: number, location: number[]): string | void;
}
