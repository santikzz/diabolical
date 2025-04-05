export const Footer = () => {

    return (
        <footer className="md:h-[30vh] bg-black border-t border-red-800 flex flex-col md:flex-row items-center justify-between p-24 mt-24">

            <div className="flex flex-col md:flex-row items-center gap-8">
                <img src="/assets/logo.png" className="w-32" alt="diabolical" />
                <div className="flex flex-col text-center md:text-left">
                    <h1 className="font-grotesque-display text-white text-2xl md:text-4xl">DIABOLICAL</h1>
                    <h2 className="lato-light text-red-500 text-base md:text-lg">Powered by <a href="#">santikzz</a></h2>
                    <label className="text-zinc-400/50 text-sm lato-regular">Copyright © 2025 Diabolical.</label>
                </div>
            </div>

            <div className="grid grid-cols-2 md:flex flex-col md:flex-row gap-8 mt-24 md:mt-0">
                <a href="#" className="text-white text-lg lato-regular">Home</a>
                <a href="#" className="text-white text-lg lato-regular">Store</a>
                <a href="#" className="text-white text-lg lato-regular">Discord</a>
                <a href="#" className="text-white text-lg lato-regular">Website</a>
            </div>

        </footer>
    );

}