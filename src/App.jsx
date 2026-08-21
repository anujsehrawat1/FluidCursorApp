import SplashCursor from './SplashCursor';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    // If running in a normal web browser (GitHub pages), make the background black
    if (!navigator.userAgent.includes('Electron')) {
      document.body.style.backgroundColor = '#000000';
    }
  }, []);

  return (
    <>
      <SplashCursor COLOR="#A855F7" RAINBOW_MODE={false} TRANSPARENT={true} />
    </>
  );
}

export default App;
