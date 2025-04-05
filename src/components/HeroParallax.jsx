import FuzzyText from "./FuzzyText";
import { Header } from "./Header";
import { useGlobalContext } from "../GlobalContext";

export const HeroParallax = () => {

    const { time, mousePos } = useGlobalContext();

    return (
        <section className="min-h-screen relative overflow-hidden bg-black">

            <Header />

            <div className="absolute top-0 bottom-0 left-0 right-0 z-40">
                <div className="flex flex-col md:flex-row md:justify-between justify-center items-center h-full md:px-24">
                    <div className="flex flex-col gap-2 text-center md:text-left">
                        <div className="md:-translate-x-14">
                            <FuzzyText
                                baseIntensity={0.2}
                                hoverIntensity={0.3}
                                enableHover={true}
                                fontSize="clamp(30px, 4vw, 60px)"
                                fontFamily="Grotesque Display"
                            >
                                Diabolical
                            </FuzzyText>
                        </div>
                        <p className="text-white lato-light text-2xl md:max-w-[35vw] opacity-75">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                </div>
            </div>

            <div id="foglayer_01" className="fog">
                <div className="image01"></div>
                <div className="image02"></div>
            </div>
            {/* <div id="foglayer_02" className="fog">
                <div className="image01"></div>
                <div className="image02"></div>
            </div> */}
            <div id="foglayer_03" className="fog">
                <div className="image01"></div>
                <div className="image02"></div>
            </div>

            <img
                src="/assets/parallax_front.png"
                className="absolute z-30 transition-transform duration-100 ease-linear min-h-screen object-cover"
                style={{
                    // transform: `translate(${Math.sin(time) * 5}px, ${Math.cos(time) * 5}px)`,
                    transform: `translate(${mousePos.x * 20}px, ${mousePos.y * 10}px)`, scale: 1.1
                }}
                alt="Parallax Front"
            />

            <img
                src="/assets/parallax_back.png"
                className="absolute z-20 transition-transform duration-200 ease-linear opacity-75 min-h-screen object-cover"
                style={{
                    transform: `translate(${Math.sin(time + 1) * -15}px, ${Math.cos(time + 1) * -10}px)`, scale: 1.1
                }}
                alt="Parallax Back"
            />

            <div className="linear-gradient absolute bottom-0 left-0 right-0 h-44 z-50"></div>
        </section>
    );
}