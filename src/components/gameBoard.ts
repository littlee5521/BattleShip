import { tile } from "./tile";
import { Tile } from "./tile";
//this was done to have a easy way to group all tiles of one player
export const gameBoard = (player:string) => {
    const tileContainer:Tile[] = [];
    for (let i = 0; i<50; i++) [
        tileContainer.push(tile(i))
    ]

    const checkIfOccupied = (location:number) =>{
        return  tileContainer[location].checkIsOccupied()
    }

    const checkIfHit = (location:number) =>{
        return tileContainer[location].checkIsHit()
    }

    const makeOccupied = (location:number) =>{
        tileContainer[location].makeOccupied();
    }

    const registerHit = (location:number) =>{
        tileContainer[location].registerHit()
    }

    return {tileContainer, makeOccupied, checkIfOccupied, checkIfHit, registerHit}
}