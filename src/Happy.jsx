
import confetti_gif from "./assets/confetti.gif"
import confetti_small_gif from "./assets/confetti_small.gif"
import logo from "./assets/logo_black.svg"


const Happy = () => {



    return (
        <article className="bg-white h-screen w-full flex flex-col justify-center items-center text-black"
        >

            <img src={confetti_small_gif} alt="confetti" className="absolute top-0   w-[600px]" />
            <img src={confetti_small_gif} alt="confetti" className="absolute top-0   w-[600px]" />
            <img src={confetti_small_gif} alt="confetti" className="absolute top-0   w-[600px]" />
            <img src={confetti_small_gif} alt="confetti" className="absolute top-0   w-[600px]" />

            <img src={confetti_small_gif} alt="confetti" className="absolute top-0   w-[600px]" />

            <section className="w-full mb-[10vh] h-[90vh] mt-[10vh] flex flex-col gap-4 justify-center items-center"
                style={{
                    backgroundImage: `url(${confetti_gif})`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "bottom",
                }} >
                <h2 className="w-full text-center text-7xl md:text-7xl lg:text-[8rem] font-scare font-medium">Happy 7th Anniversary</h2>
                <img src={logo} alt="logo" className="max-w-[250px] md:max-w-[400px]" />
            </section>



        </article>
    )
}

export default Happy
