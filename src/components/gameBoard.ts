import { tile } from "./tile";
import { Tile } from "./tile";
import { battleShip } from "./battleShip";
import { Ship } from "./battleShip";
//this was done to have a easy way to group all tiles of one player
export const gameBoard = (player:string) => {
    const tileContainer:Tile[] = [];

    const boatContainer:Ship[] = []

    for (let i = 0; i<50; i++) [
        tileContainer.push(tile(i))
    ]

    const populateBoard = (length:number, location:number[]) =>{
        boatContainer.push(battleShip(length,location))
        location.forEach((cord) =>{
            makeOccupied(cord)
        })
    }

    const checkIfOccupied = (location:number) =>{
        return  tileContainer[location].checkIsOccupied()
    }

    const checkIfHit = (location:number) =>{
        return tileContainer[location].checkIsHit()
    }

    const makeOccupied = (location:number) =>{
        tileContainer[location].makeOccupied();
    }

    //this is a bit convulted. I think i can refactor it to not have to go through so many steps

    const registerHit = (location:number) =>{
        if(checkIfHit(location)==false){
            
            tileContainer[location].registerHit()
            boatContainer.forEach((boat) =>{
                const locationArray:number[] = boat.retrieveLocation();
                locationArray.forEach((cord) =>{
                    if(cord==location) {
                        boat.registerHit();
                    }
                })
            })

        }
    }

    const retrieveBoatContainer = () =>{
        return boatContainer
    }

    return {tileContainer, makeOccupied, checkIfOccupied, checkIfHit, registerHit,retrieveBoatContainer, populateBoard}
}