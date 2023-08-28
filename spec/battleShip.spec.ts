import {battleShip} from '../src/components/battleShip'
const oneShip = battleShip(3, [5])

    test('test battleship creation', () =>{
        expect(oneShip.checkIsSunk()).toBe(false)
    })

    test('checks ship length', () =>{
        expect(oneShip.length).toBe(3)
    })
    test('check hit function', () =>{
        oneShip.registerHit();
        expect(oneShip.checkHitsRegistered()).toBe(1)
    })
    test('checks sink functionality', () =>{
        oneShip.registerHit();
        oneShip.registerHit(); 
        expect(oneShip.checkIsSunk()).toBe(true)
    })