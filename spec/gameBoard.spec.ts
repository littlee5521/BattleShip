import {gameBoard} from '../src/components/gameBoard'
const player1gameBoard = gameBoard('me')

    test('checks tile creation', () =>{
        expect(player1gameBoard.tileContainer.length).toBe(50)
    })