import {gameBoard} from '../src/components/gameBoard'
const player1gameBoard = gameBoard('me')

    test('checks tile creation', () =>{
        expect(player1gameBoard.tileContainer.length).toBe(50)
    })

    test('checks if occupied', () =>{
        player1gameBoard.makeOccupied(0);
        expect(player1gameBoard.tileContainer[0].checkIsOccupied()).toBe(true)
    })