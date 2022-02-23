var darkMode = false;

const colors = {
    baseBlue: "#134db6",
    baseOrange: '#fc7a6a',
    baseDark: "#181a1b",
    white: "#fff",
    black: "#000"
}

function convertMillisToMonths(millis) {
    darkMode = false;
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
}

function handleThemeChange() {
    if (darkMode === false) {
        document.getElementById('body').style.background = colors.baseDark;
        document.getElementById('body').style.color = colors.white;
        document.getElementById('label').style.color = colors.baseOrange;
        document.getElementById('button').style.background = colors.baseOrange;
        document.getElementById('button').style.color = colors.baseOrange;
        var aTags = document.getElementsByClassName('a-tag');
        var dateTags = document.getElementsByClassName('date');
        for(let i = 0; i < aTags.length; i++){
            aTags[i] ? aTags[i].style.color = colors.baseOrange : null;
            dateTags[i] ? dateTags[i].style.color = colors.white : null;
        }
        darkMode = true;
    } else {
        document.getElementById('body').style.background = colors.white;
        document.getElementById('body').style.color = colors.baseDark;
        document.getElementById('label').style.color = colors.baseBlue;
        document.getElementById('button').style.background = colors.baseBlue;
        var aTags = document.getElementsByClassName('a-tag');
        var dateTags = document.getElementsByClassName('date');
        for(let i = 0; i < aTags.length; i++){
            aTags[i] ? aTags[i].style.color = colors.baseBlue : null;
            dateTags[i]? dateTags[i].style.color = colors.baseDark : null;
        }
        darkMode = false;
    }
}