import PropTypes from 'prop-types';
import bgimg from "./assets/timer_bg.svg"

const TimerDisplay = ({ formattedTime }) => {

    return (<article className=" border-red-400 flex flex-col items-center justify-center">

        <section className="grid grid-cols-4 justify-evenly gap-x-2 md:gap-x-8">
            <div className="text-3xl md:text-7xl font-raj font-extrabold flex gap-2 md:gap-4">
                <p
                    className="w-16 text-center py-3  bg-[#242424] border-t-2 border-black rounded-md"
                    style={
                        {
                            backgroundImage: `url(${bgimg})`,
                            backgroundSize: "cover",
                            backgroundRepeat: "no-repeat",
                            backgroundPosition: "bottom",
                        }
                    }>{formattedTime.days.length > 1 ? formattedTime.days[0] : 0}</p>
                <p className="w-16 text-center py-3  bg-[#242424] border-t-2 border-black rounded-md"
                    style={
                        {
                            backgroundImage: `url(${bgimg})`,
                            backgroundSize: "cover",
                            backgroundRepeat: "no-repeat",
                            backgroundPosition: "bottom",
                        }
                    }>{formattedTime.days.length > 1 ? formattedTime.days[1] : formattedTime.days[0]}</p>

            </div>

            <div className="text-3xl md:text-7xl font-raj font-extrabold flex gap-2 md:gap-4">

                <p className="w-16 text-center py-3  bg-[#242424] border-t-2 border-black rounded-md"
                    style={
                        {
                            backgroundImage: `url(${bgimg})`,
                            backgroundSize: "cover",
                            backgroundRepeat: "no-repeat",
                            backgroundPosition: "bottom",
                        }
                    }>{formattedTime.hours.length > 1 ? formattedTime.hours[0] : 0}</p>
                <p className="w-16 text-center py-3   bg-[#242424] border-t-2 border-black rounded-md"
                    style={
                        {
                            backgroundImage: `url(${bgimg})`,
                            backgroundSize: "cover",
                            backgroundRepeat: "no-repeat",
                            backgroundPosition: "bottom",
                        }
                    }>{formattedTime.hours.length > 1 ? formattedTime.hours[1] : formattedTime.hours[0]}</p>
            </div>

            <div className="text-3xl md:text-7xl font-raj font-extrabold flex gap-2 md:gap-4">

                <p className="w-16 text-center py-3 bg-[#242424] border-t-2 border-black rounded-md"
                    style={
                        {
                            backgroundImage: `url(${bgimg})`,
                            backgroundSize: "cover",
                            backgroundRepeat: "no-repeat",
                            backgroundPosition: "bottom",
                        }
                    }>{formattedTime.minutes.length > 1 ? formattedTime.minutes[0] : 0}</p>
                <p className="w-16 text-center py-3 bg-[#242424] border-t-2 border-black rounded-md"
                    style={
                        {
                            backgroundImage: `url(${bgimg})`,
                            backgroundSize: "cover",
                            backgroundRepeat: "no-repeat",
                            backgroundPosition: "bottom",
                        }
                    }>{formattedTime.minutes.length > 1 ? formattedTime.minutes[1] : formattedTime.minutes[0]}</p>
            </div>

            <div className="text-3xl md:text-7xl font-raj font-extrabold flex gap-2 md:gap-4">

                <p className="w-16 text-center py-3 bg-[#242424] border-t-2 border-black rounded-md"
                    style={
                        {
                            backgroundImage: `url(${bgimg})`,
                            backgroundSize: "cover",
                            backgroundRepeat: "no-repeat",
                            backgroundPosition: "bottom",
                        }
                    }>{formattedTime.seconds.length > 1 ? formattedTime.seconds[0] : 0}</p>
                <p className="w-16 text-center py-3 bg-[#242424] border-t-2 border-black rounded-md"
                    style={
                        {
                            backgroundImage: `url(${bgimg})`,
                            backgroundSize: "cover",
                            backgroundRepeat: "no-repeat",
                            backgroundPosition: "bottom",
                        }
                    }>{formattedTime.seconds.length > 1 ? formattedTime.seconds[1] : formattedTime.seconds[0]}</p>

            </div>
        </section>



        <div className="mt-2 grid grid-cols-4 gap-x-8 uppercase justify-center w-full text-xs md:text-base text-center font-raj font-medium">
            <p className="py-2">Days {" "}</p>
            <p className=" py-2">HOURS</p>
            <p className="py-2 ">MINUTES</p>
            <p className="py-2 ">SECONDS</p>
        </div>

    </article>)
}


TimerDisplay.propTypes = {
    formattedTime: PropTypes.shape({
        days: PropTypes.string.isRequired,
        hours: PropTypes.string.isRequired,
        minutes: PropTypes.string.isRequired,
        seconds: PropTypes.string.isRequired,
    }).isRequired,
};

export default TimerDisplay
