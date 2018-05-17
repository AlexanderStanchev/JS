function solve(args) {

    let n = Number(args[0]);
    let sum= 0;

    let redBallsCount = 0;
    let orangeBallsCount = 0;
    let yellowBallsCount = 0;
    let whiteBallsCount = 0;
    let blackBallsCount = 0;
    let otherColorsCount =0;
    let totalPoints = 0;


    for (let i = 1; i <= n; i++) {
        let currentBall = args[i];
        if (currentBall === "red") {
            redBallsCount++;
            totalPoints += 5;
        } else if (currentBall === "orange") {
            orangeBallsCount++;
            totalPoints += 10;
        } else if (currentBall === "yellow") {
            yellowBallsCount++;
            totalPoints += 15;
        } else if (currentBall === "white") {
           whiteBallsCount++;
            totalPoints += 20;
        } else if (currentBall === "black") {
            blackBallsCount++;
            totalPoints /= 2;
        } else {
            otherColorsCount++;
        }
        
    }

    console.log(`Total points: ${totalPoints}
    Points from red balls: ${redBallsCount}
    Points from orange balls: ${orangeBallsCount}
    Points from yellow balls: ${yellowBallsCount}
    Points from white balls: ${whiteBallsCount}
    Other colors picked: ${otherColorsCount}
    Dividers from black balls: ${blackBallsCount}`);   
}
solve(["3", "white", "orange", "yellow"]);
