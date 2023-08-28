import {battleShip} from '../src/components/battleShip'

    test('test battleship creation', () =>{
        const oneShip = battleShip(3)
        console.log(oneShip.hitsRegistered)
        expect(oneShip.isSunk).toBe(false)
    })