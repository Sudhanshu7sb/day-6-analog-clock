let currentDegree;
        let prev;
        const secondHand = document.querySelector('.second-hand');
        const minuteHand = document.querySelector('.minute-hand');
        const hourHand = document.querySelector('.hour-hand');
        function seconds(){
            const deg = 6;
            const now = new Date();
            let secs = now.getSeconds() * deg;
            let minutes = now.getMinutes() * deg ;
            let hours =  now.getHours() * 30 ;
            
            if(minutes % 12 === 0){
              currentDegree = hours + 6 * (now.getMinutes() / 12);
              prev = currentDegree;
            } else {
              currentDegree = prev || hours;
            }
                                   
            secondHand.style.transform = `rotate(${secs}deg)`;
            minuteHand.style.transform = `rotate(${minutes}deg)`;
            hourHand.style.transform = `rotate(${currentDegree }deg)`;
            console.log(secs,minutes,hours);

        }
        setInterval(seconds,1000);