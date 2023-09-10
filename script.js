const hr = document.getElementById('hours')
const min = document.getElementById('minutes')
const sec = document.getElementById('seconds')
const ampm = document.getElementById('am-pm')

function updateClock() {
    let h = new Date().getHours()
    let m = new Date().getMinutes()
    let s = new Date().getSeconds()
    let timeZone = ''
    if (h>12) {
        timeZone = 'PM'
        h = h-12
    }
    else{
        timeZone = 'AM'
    }

    hr.innerHTML = h
    min.innerHTML = m
    sec.innerHTML = s
    ampm.innerHTML = timeZone

    setTimeout(() => {
        updateClock()
    }, 1000);
}

updateClock()