function time() {
    const resTime = 1763211600000
    let res = resTime - Date.now()
    const seconds = Math.floor(res / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);


    let secondsText = seconds % 60
    let minutesText = minutes % 60
    let hoursText = hours % 24
    let daysText = days/1



    let arr = [secondsText,minutesText,hoursText,daysText]
    arr.map(el => {
        switch (el) {
        case el = secondsText:
            let secRes = condition(secondsText,[`секунда`,`секунды`,`секунд`])
            document.querySelector('#secondText').innerText = `${secRes}`
            document.querySelector('#second').innerText= `${secondsText}`
            break;
        case el = minutesText:
            let minRes = condition(minutesText,[`минута`,`минуты`,`минут`])
            document.querySelector('#minuteText').innerText = `${minRes}`
            document.querySelector('#minute').innerText= `${minutesText}` 
            break;
        case el = hoursText:
            let hourRes = condition(hoursText,[`час`,`часа`,`часов`])
            document.querySelector('#hourText').innerText = `${hourRes}`
            document.querySelector('#hour').innerText= `${hoursText}`
            break;
        case el = daysText:
            let dayRes = condition(daysText,[`день`,`дня`,`дней`])
            document.querySelector('#dayText').innerText = `${dayRes}`
            document.querySelector('#day').innerText= `${daysText}`            
    
        default:
            break;
    }
    })
    

    function condition(times,word) {
        if (times % 10 === 1 && times !== 11) {
      return `${word[0]}`;
    } else if (times % 10 > 1 && times % 10 < 5) {
      if (times !== 12 && times !== 13 && times !== 14) {
        return `${word[1]}`;
      }
    } else {
      return `${word[2]}`;
    }
    }
    


}


setInterval(time,1000)

