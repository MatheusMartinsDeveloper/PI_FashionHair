import { createContext } from "react";

type IDSchedulingContextType = {
    id: string | string[];
}

export const IDSchedulingContext = createContext<IDSchedulingContextType>({} as IDSchedulingContextType);