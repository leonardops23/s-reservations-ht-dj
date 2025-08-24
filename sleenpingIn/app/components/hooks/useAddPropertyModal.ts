'use client'

import { create } from "zustand";

interface PropertyModalStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const usePropertyModalStore = create<PropertyModalStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}))

export default usePropertyModalStore;
