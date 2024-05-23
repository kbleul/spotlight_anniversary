import { useEffect, useState } from "react";
import bulggif from "./assets/bulb.gif"
import Happy from "./Happy";
import LastMinuteCounter from "./LastMinuteCounter";
import TimerDisplay from "./TimerDisplay";

const getFormatedTime = (timeInMillisecond) => {
    let time_seconds = parseInt(Math.floor(timeInMillisecond / 1000))
    let time_minutes = parseInt(Math.floor(time_seconds / 60))
    let time_hours = parseInt(Math.floor(time_minutes / 60))

    let days = parseInt(Math.floor(time_hours / 24))
    let hours = parseInt(time_hours % 24)
    let minutes = parseInt(time_minutes % 60)
    let seconds = parseInt(time_seconds % 60)

    return {
        days: days.toString(),
        hours: hours.toString(),
        minutes: minutes.toString(),
        seconds: seconds.toString()
    }

}


const Timer = () => {
    const [timerInMillisecond, setTimerInMillisecond] = useState(0)

    useEffect(() => {

        if (timerInMillisecond > 0) {
            setTimeout(() => setTimerInMillisecond(timerInMillisecond - 1000), 1000)

        }

    }, [timerInMillisecond])

    useEffect(() => {
        // Get the current date and time
        const currentTime = new Date().getTime();

        // Set the event time to 4 days from now
        const eventTime = new Date(Date.UTC(2024, 4, 31, 16, 42, 0)).getTime();

        // Calculate the difference between the current time and the event time
        const timeDifference = eventTime - currentTime;

        // Set the initial value of timerInMillisecond
        setTimerInMillisecond(timeDifference);


    }, []);

    if (timerInMillisecond <= 0) {
        return (<Happy />)
    }

    if (timerInMillisecond <= 10000) {
        return (<LastMinuteCounter formattedTime={getFormatedTime(timerInMillisecond).seconds} />)
    }

    return (
        <article
            className="w-full h-screen relative flex justify-center items-center">

            <div className="absolute rotate-180 "
                style={{
                    top: -30
                }}>
                <img src={bulggif} alt="bulb" className="max-w-[130px] md:max-w-[200px]" />
            </div>

            <section
                className="overflow-hidden rounded-3xl border border-[#626262] bg-[#444444] px-3 md:px-10 pt-8 md:pt-20 pb-4 md:pb-10 max-w-[1200px] flex justify-center items-center relative mx-4 md:mx-0">
                <TimerDisplay formattedTime={getFormatedTime(timerInMillisecond)} />
            </section>

        </article>
    )
}





export default Timer
