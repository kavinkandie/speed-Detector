
function checkSpeed(speed) {
    const speedLimit = 70;
    if (speed <= speedLimit) {
       return console.log(`Ok`);
    }
    else {
        const points = Math.floor((speed - speedLimit) / 5);
        if (points >= 12)
           return console.log(`License suspended`)
        else{
            return console.log(points)
        }function checkSpeed(speed) {
            const speedLimit = 70;
            if (speed <= speedLimit) {
               return console.log(`Ok`);
            }
            else {
                const points = Math.floor((speed - speedLimit) / 5);
                if (points >= 12)
                   return console.log(`License suspended`)
                else{
                    return console.log(points)
                }

    }
}
checkSpeed(150)

