const endDate = "Jan 1, 2024 00:00:00";
document.querySelector("#end-date").innerHTML = endDate;
const inputs = document.querySelectorAll("input")

function clock(){
    const end = new Date(endDate);
    const now = new Date();
    // console.log(end,now);
    const diff = (end - now)/1000; // --> convert ms into s
    // console.log(diff);
    if(diff < 0){
        return;
    }

    // covert into days --> 1day = 24hr 1h = 60min 1min = 60sec
    inputs[0].value = Math.floor(diff/3600/24);
    inputs[1].value = Math.floor(diff/3600 % 24);
    inputs[2].value = Math.floor(diff/60 %60);
    inputs[3].value = Math.floor(diff%60);


}

clock();

setInterval(() => {
    clock();
}, 1000);
