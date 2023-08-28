export const battleShip = (length:number) =>{
  let hitsRegistered = 0
  let isSunk = false

  const registerHit = () =>{
    hitsRegistered = hitsRegistered+1 
    if(hitsRegistered==length) {
      isSunk=true
    }
  }

  const checkHitsRegistered = () =>{
    return hitsRegistered
  }

  const checkIsSunk = () =>{
    return isSunk
  }

  return {checkHitsRegistered, checkIsSunk, registerHit, length}

}