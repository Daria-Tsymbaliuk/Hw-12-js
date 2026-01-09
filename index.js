class CountdownTimer {
    constructor({ selector, targetDate }) {
        this.timerRef = document.querySelector(selector);
        this.targetDate = targetDate;

        this.daysRef = this.timerRef.querySelector('[daфta-value="days"]');
        this.hoursRef = this.timerRef.querySelector('[data-value="hours"]');
        this.minsRef = this.timerRef.querySelector('[data-value="mins"]');
        this.secsRef = this.timerRef.querySelector('[data-value="secs"]');

        this.start();
    }

    start() {
        this.intervalId = setInterval(() => {
            this.updateTimer();
        }, 1000);
    }

    updateTimer() {
        const time = this.targetDate - Date.now();

        if (time <= 0) {
            clearInterval(this.intervalId);
            this.updateClock(0, 0, 0, 0);
            return;
        }

        const days = Math.floor(time / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
            (time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const mins = Math.floor(
            (time % (1000 * 60 * 60)) / (1000 * 60)
        );
        const secs = Math.floor(
            (time % (1000 * 60)) / 1000
        );

        this.updateClock(days, hours, mins, secs);
    }

    updateClock(days, hours, mins, secs) {
        this.daysRef.textContent = days;
        this.hoursRef.textContent = String(hours).padStart(2, '0');
        this.minsRef.textContent = String(mins).padStart(2, '0');
        this.secsRef.textContent = String(secs).padStart(2, '0');
    }
}

new CountdownTimer({
    selector: '#timer-1',
    targetDate: new Date('Dec 31, 2026'),
});
