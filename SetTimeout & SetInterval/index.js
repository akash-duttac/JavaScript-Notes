logkaro = ()=>{
    console.log("I am your log");
}
//setTimeout(logkaro, 3000); //3000ms = 3sec
let clrid = setInterval(logkaro,2000);

//use clearInterval / clearTimeout to cancel setInterval / setTimeout
