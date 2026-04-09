import { RefObject } from "react";
import { create } from "zustand";

interface CoverpageRefState {
    coverRef: RefObject<HTMLElement | null> | null
    setCoverRef: (ref: RefObject<HTMLElement | null> | null) => void
}

export const useCoverpageRefStore = create<CoverpageRefState>((set) => ({
    coverRef: null,
    setCoverRef: (ref: RefObject<HTMLElement | null> | null) => set({ coverRef: ref }),
}));