class CountdownTimer {
    private targetDate: Date;

    constructor(tatgetDate: Date) {
        this.targetDate = new Date(tatgetDate);
    }

    // Method to calculate the remaining time
    private calculateTimeRemaining(): {days: number, hours: number, minutes: number, seconds: number} {
        const now = new Date().getTime();
        const distance = this.targetDate.getTime() - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 *24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        return {days, hours, minutes, seconds}
    }

    // Method to start the countdown
    start(): void {
        const intervalId = setInterval(() => {
            const {days, hours, minutes, seconds} = this.calculateTimeRemaining();

            console.log(`Time Remaining: ${days}d ${hours}h ${minutes}m ${seconds}s`);

            // If the countdown is over, stop the timer
            if (days <= 0 && hours <= 0 && minutes <= 0 && seconds <= 0) {
                clearInterval(intervalId);
                console.log("Countdown complete");
            }
        }, 1000); // Update every second
    }
}

const targetDate = new Date(2024, 7, 12, 9, 38, 0o0);
const countdownTimer = new CountdownTimer(targetDate);

countdownTimer.start();
