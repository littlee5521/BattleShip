import { tile } from "../assets/tile";
import { Tile } from "../assets/tile";
//this was done to have a easy way to group all tiles of one player
export const gameBoard = (player:string) => {
    const tileContainer:Tile[] = [];
    for (let i = 0; i<50; i++) [
        tileContainer.push(tile(i))
    ]

    const makeOccupied = (location:number) =>{
        tileContainer[location].makeOccupied();
    }

    return {tileContainer, makeOccupied}
}