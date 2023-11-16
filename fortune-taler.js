// Fortune taler script that tells you how much money you will earn in the future.

const fortuneTalerObject = {
    fortune: Math.floor(Math.random() * 1000000),
    coinFace: ['head', 'tail'],
    time: ['one month', '1 year', '10 years']
}


const fortuneTaler = () => {
    console.log(`Hello my dear friend. Toss a coin. 
If the coin face is ${fortuneTalerObject.coinFace[Math.floor(Math.random() * 2)]}, 
then you will earn ${fortuneTalerObject.fortune} dollars within ${fortuneTalerObject.time[Math.floor(Math.random() * 3)]}.`);
}

fortuneTaler();