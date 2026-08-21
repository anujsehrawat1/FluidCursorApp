import SplashCursor from './SplashCursor';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    if (!navigator.userAgent.includes('Electron')) {
      document.body.classList.add('web-mode');
    } else {
      document.body.classList.add('electron-mode');
    }
  }, []);

  return (
    <>
      <SplashCursor COLOR="#A855F7" RAINBOW_MODE={false} TRANSPARENT={true} />
    </>
  );
}

export default App;
