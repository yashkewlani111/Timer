class Timer {
    constructor(durationInput, startbtn, stopbtn, callbacks) {
        this.durationInput = durationInput;
        this.startbtn = startbtn;
        this.stopbtn = stopbtn;

        if(callbacks) {
            this.onStart = callbacks.onStart;
            this.onComplete = callbacks.onComplete;
            this.onTick = callbacks.onTick;
        }

        this.startbtn.addEventListener('click', this.start);
        this.stopbtn.addEventListener('click',this.pause);
    }
    
    start = () => {
       if(this.onStart) {
           this.onStart(this.remainingTime);
       }
       this.tick();
       this.intervalId = setInterval(this.tick,20);
    }

    pause = () => {
        clearInterval(this.intervalId);
    }

    tick = () => {
        if(this.remainingTime <= 0) {
            this.pause();
            if(this.onComplete) {
                this.onComplete();
            }
        }
        else {
            this.remainingTime = this.remainingTime - 0.02;
            if(this.onTick) {
                this.onTick(this.remainingTime);
            }
        }
    }

    get remainingTime() {
        return parseFloat(this.durationInput.value);
    }

    set remainingTime(time) {
        this.durationInput.value = time.toFixed(2);
    } 
}