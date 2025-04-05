import { createContext, useContext, useEffect, useState } from "react"

const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {

    const [time, setTime] = useState(0);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e) => {
            const { innerWidth, innerHeight } = window;
            setMousePos({
                x: (e.clientX / innerWidth) * 2 - 1,
                y: (e.clientY / innerHeight) * 2 - 1,
            });
        };
        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    useEffect(() => {
        let animationFrameId;
        const update = () => {
            setTime((prev) => prev + 0.005); // Adjust speed by modifying this value
            animationFrameId = requestAnimationFrame(update);
        };
        animationFrameId = requestAnimationFrame(update);
        return () => cancelAnimationFrame(animationFrameId);
    }, []);


    return (
        <GlobalContext.Provider value={{
            time,
            mousePos
        }}>
            {children}
        </GlobalContext.Provider>
    );

}

export const useGlobalContext = () => {
    const context = useContext(GlobalContext);
    if (context === undefined) {
        throw new Error("useContext must be used within a GlobalProvider");
    }
    return context;
}