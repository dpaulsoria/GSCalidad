import { create } from "zustand";

interface SyncStore {
  isSyncInProgress: boolean;
  setSyncInProgress: (value: boolean) => void;
}

export const useSyncStore = create<SyncStore>((set) => ({
  isSyncInProgress: false,
  setSyncInProgress: (value) => set({ isSyncInProgress: value }),
}));
