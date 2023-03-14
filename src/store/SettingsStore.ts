import { create } from "zustand";

interface SettingsStore {}

const useSettings = create<SettingsStore>()((set, get) => ({}));
