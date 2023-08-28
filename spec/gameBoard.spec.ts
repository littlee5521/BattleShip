import {gameBoard} from '../src/components/gameBoard'
const player1gameBoard = gameBoard('me')

    test('checks tile creation', () =>{
        expect(player1gameBoard.tileContainer.length).toBe(50)
    })

    test('checks if occupy checker works', () =>{
        expect(player1gameBoard.checkIfOccupied(0)).toBe(false)
    })
    
    test('checks if occupied maker work', () =>{
            player1gameBoard.makeOccupied(0);
            expect(player1gameBoard.tileContainer[0].checkIsOccupied()).toBe(true)
    })













    