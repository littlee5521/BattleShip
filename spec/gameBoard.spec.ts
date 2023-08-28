import {gameBoard} from '../src/components/gameBoard'
const player1gameBoard = gameBoard('me')
player1gameBoard.populateBoard(3, [3,4])

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

    test('check is hit', () =>{
        expect(player1gameBoard.checkIfHit(0)).toBe(false)
    })
//this was causing a test to fail below because i forot i was shooting there
    test('simulates a hit,', () =>{
        player1gameBoard.registerHit(0)
        expect(player1gameBoard.checkIfHit(0)).toBe(true)
    } )

    test('checks if boat crator works', () =>{
        expect(player1gameBoard.retrieveBoatContainer().length).toBe(1)
    })
// these coords are pulled from a boat created in gameBoard
    test('checks if boats register hits', () =>{
        const boat = player1gameBoard.retrieveBoatContainer()[0]
        player1gameBoard.registerHit(3)
        player1gameBoard.registerHit(4)
        expect(boat.checkHitsRegistered()).toBe(2)
    })

    test('check to see if boat occupies space', () =>{
        expect(player1gameBoard.checkIfOccupied(3)).toBe(true)
        expect(player1gameBoard.checkIfOccupied(4)).toBe(true)
    })

    test('check overlap system', () =>{
        expect(player1gameBoard.populateBoard(1,[3])).toBe('This area is full')
    })