import { FeaturesBoxes } from "./FeaturesBoxes";
import FuzzyText from "./FuzzyText";
import { useGlobalContext } from "../GlobalContext";

export const AboutUs = () => {

    const { mousePos } = useGlobalContext();

    return (
        <section className="min-h-screen flex flex-col justify-center relative overflow-hidden">

            <div className="linear-gradient-top absolute top-0 left-0 right-0 h-44 z-50"></div>

            <div className="absolute z-30 right-0 -translate-x-24">
                <img
                    src="/assets/aboutus_parallax_front.png"
                    className="transition-transform duration-100 ease-linear"
                    style={{
                        // transform: `translate(${Math.sin(time) * 5}px, ${Math.cos(time) * 5}px)`,
                        transform: `translate(${mousePos.x * 5}px, ${mousePos.y * 2}px) scaleX(-1)`,
                    }}
                    alt="About Front"
                />
            </div>

            <div className="absolute z-20">
                <img
                    src="/assets/aboutus_parallax_back.png"
                    className="transition-transform duration-200 ease-linear opacity-75 blur-[2px]"
                    style={{
                        transform: `translate(${mousePos.x * -10}px, ${mousePos.y * -5}px)`, scale: 1.1
                    }}
                    alt="About Back"
                />
            </div>

            <div className="flex flex-col md:flex-row-reverse items-center md:items-start justify-center h-full px-24 z-50 gap-4">

                <div className="flex-1 flex flex-col h-full justify-between gap-4">
                    <div className="flex flex-col text-center items-center md:items-end md:text-right gap-12 md:gap-2">

                        <h2 className="flex md:hidden text-white font-grotesque-display text-4xl">About <span className="text-red-500">Us</span></h2>

                        <div className="hidden md:flex flex-col md:flex-row justify-center md:justify-end translate-x-12">
                            <div className="translate-x-24">
                                <FuzzyText
                                    baseIntensity={0.08}
                                    hoverIntensity={0.2}
                                    enableHover={true}
                                    fontSize="3rem"
                                    fontFamily="Grotesque Display"
                                >
                                    About
                                </FuzzyText>
                            </div>
                            <FuzzyText
                                baseIntensity={0.08}
                                hoverIntensity={0.2}
                                enableHover={true}
                                fontSize="3rem"
                                fontFamily="Grotesque Display"
                                color="#ef4444"
                            >
                                Us
                            </FuzzyText>
                        </div>

                        <p className="text-white lato-light md:text-xl md:max-w-[50vw] opacity-75">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                    <FeaturesBoxes />
                </div>

                <div className="flex-1 relative aspect-video w-screen md:w-full h-full my-24 md:my-0">
                    <iframe className="absolute left-0 top-0 w-full h-full" src="https://www.youtube.com/embed/qsMUfmPgFMU?si=yko2DtHtPJbctIsG" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>

            </div>

            <div id="foglayer_01" className="fog reverse">
                <div className="image01"></div>
                <div className="image02"></div>
            </div>

            <div className="linear-gradient absolute bottom-0 left-0 right-0 h-44 z-50"></div>

        </section>
    );

}