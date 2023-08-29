export const battleShip = (length: number, location: number[]): Ship => {
  let hitsRegistered = 0;
  let isSunk = false;

  const registerHit = () => {
    hitsRegistered = hitsRegistered + 1;
    if (hitsRegistered == length) {
      isSunk = true;
    }
  };

  const checkHitsRegistered = () => {
    return hitsRegistered;
  };

  const checkIsSunk = () => {
    return isSunk;
  };

  const retrieveLocation = () => {
    return location;
  };

  return { checkHitsRegistered, checkIsSunk, registerHit, length, retrieveLocation, location };
};

export interface Ship {
  length: number;
  location: number[];
  checkIsSunk: () => boolean;
  registerHit: () => void;
  checkHitsRegistered: () => number;
  retrieveLocation: () => number[];
}
