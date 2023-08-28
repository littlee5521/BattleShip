import { tile } from "../assets/tile";
//this was done to have a easy way to group all tiles of one player
export const gameBoard = (player:string) => {
    const tileContainer = [];
    for (let i = 0; i<50; i++) [
        tileContainer.push(tile(i))
    ]
    return {tileContainer}
}