import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useGameStore = create(
  persist(
    (set, get) => ({

      currentView: 'SPLASH', 
      setCurrentView: (view) => set({ currentView: view }),
    }),
    {
      name: 'anemic-heroes-store', 
    }
  )
);
