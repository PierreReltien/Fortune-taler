// Fortune taler script

const fortune = Math.floor(Math.random() * 1000000);
const coinFace = ['head', 'tail'];
const time = ['one month', '1 year', '10 years'];


console.log(`Hello my dear friend. Toss a coin. 
If the coin face is ${coinFace[Math.floor(Math.random() * 2)]}, 
then you will earn ${fortune} dollars within ${time[Math.floor(Math.random() * 3)]}.`);