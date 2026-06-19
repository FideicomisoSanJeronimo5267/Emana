import { create } from "zustand";

interface AmenitieSelectedState {
    currentAmenitieIndex: number
    setCurrentAmenitieIndex: (index: number) => void
}

export const useAmenitieSelectedStore = create<AmenitieSelectedState>((set) => ({
    currentAmenitieIndex: 0,
    setCurrentAmenitieIndex: (index: number) => set({ currentAmenitieIndex: index }),
}));
