function convertMillisToMonths(millis) {
    var time = millis/1000; //seconds
    time = time/60; // minutes
    time = time/(60*24) //days
    time = Math.floor(time/30) // months
    return time;
}

function calcTime() {
    const currTime = new Date();
    const startTime = new Date("01 June 2021");
    document.getElementById('time').innerText = convertMillisToMonths(currTime-startTime);
    // console.log(convertMillisToMonths(currTime-startTime));
}