import React from 'react';
import { useGameStore } from './store/useGameStore';

import SplashScreen from './screens/SplashScreen';
import MainMenu from './screens/MainMenu';
import MapView from './screens/MapView';
import BattleView from './screens/BattleView';
import CharacterSheet from './screens/CharacterSheet';
import Shop from './screens/Shop';

export default function App() {
  const currentView = useGameStore((state) => state.currentView);

  switch (currentView) {
    case 'SPLASH':
      return <SplashScreen />;
    case 'MAIN_MENU':
      return <MainMenu />;
    case 'MAP':
      return <MapView />;
    case 'BATTLE':
      return <BattleView />;
    case 'CHARACTER_SHEET':
      return <CharacterSheet />;
    case 'SHOP':
      return <Shop />;
    default:
      return <SplashScreen />;
  }
}
