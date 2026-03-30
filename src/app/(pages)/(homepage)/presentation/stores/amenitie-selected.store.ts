import { create } from "zustand";
import { Amenities } from "../enums/amenities";

interface AmenitieSelectedState {
    currentAmenitie: Amenities
    setCurrentAmenitie: (amenitie: Amenities) => void
}

export const useAmenitieSelectedStore = create<AmenitieSelectedState>((set) => ({
    currentAmenitie: Amenities.POOL,
    setCurrentAmenitie: (amenitie: Amenities) => set({ currentAmenitie: amenitie }),
}));