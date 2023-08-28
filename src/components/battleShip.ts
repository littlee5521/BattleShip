export const battleShip = (length:number) =>{
  let hitsRegistered = 1
  let isSunk = false
  const registerHit = () =>{
    hitsRegistered = hitsRegistered-1 
    if(hitsRegistered==length) {
      isSunk=true
    }
  }
  return {hitsRegistered, isSunk, registerHit}

}