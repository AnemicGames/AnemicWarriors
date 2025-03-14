export const createUiSlice = (set, get) => ({
    
    //currentView brukes for å vite hvilken view vi skal vise i appen.
    currentView: 'SPLASH', // views: 'SPLASH', 'MAIN_MENU', 'MAP', 'BATTLE', 'SHOP', 'CHARACTER_SHEET' 
    setCurrentView: (view) => set({ currentView: view }),
  
    //Embark state bruker vi for å vite vi skal navigere til main menu eller map fra shop.
    //Når embark er false når shoppen lukke skal vi navigere til main menu, hvis den er true skal vi navigere til map.
    //Embark settes til true når vi trykker på embark knappen i Main Menu.
    //Embark settes til false når vi har drept bossen eller dør i kamp og blir sendt tilbake til main menu.
    embark: false,
    setEmbark: (value) => set({ embark: value }),
  });
  