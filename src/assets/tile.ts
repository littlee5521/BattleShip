    export    const tile = (location:number) =>{
        let isHit = false
        let isOccupied = false

        const registerHit = () =>{
            isHit = true
        }

        const makeOccupied = () =>{
            isOccupied = true
        }

        const checkIsHit = () =>{
            return isHit
        }

        const checkIsOccupied = () =>{
            return isOccupied
        }
        return {registerHit, makeOccupied, checkIsHit, checkIsOccupied, location}
    }
    //each indivusally keeps track of its state