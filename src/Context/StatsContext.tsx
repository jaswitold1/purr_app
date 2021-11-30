import React,{useState,createContext} from "react";
import IStatsContext from "../interfaces/IStatsContext";

export const StatsContext = createContext<IStatsContext>({
    seen:0,
    didntPet:0,
    petted:0,
    skipped:0
})

export const StatsProvider = (props: { children: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; }) => {
    const [stats, setStats] = useState<IStatsContext>({
        seen:0,
    didntPet:0,
    petted:0,
    skipped:0
    });
    return <StatsContext.Provider value={[stats,setStats]}>{props.children}</StatsContext.Provider>
}