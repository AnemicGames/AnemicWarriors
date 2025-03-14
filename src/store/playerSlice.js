export const createPlayerSlice = (set, get) => ({
    player: {
      name: 'Hero',
      level: 1,
      currentHp: 100,
      maxHp: 100,
      attack: 10,
      defense: 5,
      speed: 5,
      xp: 0,
      xpToNextLvl: 100,
    },
  });
  