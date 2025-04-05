import { MagicCard } from "./MagicCard";
import { Airplay, Crosshair, Eye, LifeBuoy, Radar } from "lucide-react";

export const FeaturesBoxes = () => {
    return (
        <div className="grid grid-cols-2 gap-4 items-center md:flex justify-between">

            <MagicCard
                className={`aspect-square size-32 flex items-center justify-center bg-zinc-900/20 backdrop-blur border border-red-800/60 shadow-2xl rounded-xl overflow-hidden`}
                gradientSize={400}
                gradientColor="#7f1d1d"
                gradientOpacity={0.5}
            >
                <div className="flex flex-col gap-2 items-center justify-center text-white lato-bold text-lg">
                    <Crosshair size={64} />
                   
                </div>
            </MagicCard>

            <MagicCard
                className={`aspect-square size-32 flex items-center justify-center bg-zinc-900/20 backdrop-blur border border-red-800/60 shadow-2xl rounded-xl overflow-hidden`}
                gradientSize={400}
                gradientColor="#7f1d1d"
                gradientOpacity={0.5}
            >
                <div className="flex flex-col gap-2 items-center justify-center text-white lato-bold text-lg">
                    <Eye size={64} />
                   
                </div>
            </MagicCard>

            <MagicCard
                className={`aspect-square size-32 flex items-center justify-center bg-zinc-900/20 backdrop-blur border border-red-800/60 shadow-2xl rounded-xl overflow-hidden`}
                gradientSize={400}
                gradientColor="#7f1d1d"
                gradientOpacity={0.5}
            >
                <div className="flex flex-col gap-2 items-center justify-center text-white lato-bold text-lg">
                    <Airplay size={64} />
                   
                </div>
            </MagicCard>

            <MagicCard
                className={`aspect-square size-32 flex items-center justify-center bg-zinc-900/20 backdrop-blur border border-red-800/60 shadow-2xl rounded-xl overflow-hidden`}
                gradientSize={400}
                gradientColor="#7f1d1d"
                gradientOpacity={0.5}
            >
                <div className="flex flex-col gap-2 items-center justify-center text-white lato-bold text-lg">
                    <Radar size={64} />
                   
                </div>
            </MagicCard>

            <MagicCard
                className={`aspect-square size-32 flex items-center justify-center bg-zinc-900/20 backdrop-blur border border-red-800/60 shadow-2xl rounded-xl overflow-hidden`}
                gradientSize={400}
                gradientColor="#7f1d1d"
                gradientOpacity={0.5}
            >
                <div className="flex flex-col gap-2 items-center justify-center text-white lato-bold text-lg">
                    <LifeBuoy size={64} />
                   
                </div>
            </MagicCard>


        </div>
    )
}