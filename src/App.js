import { useState } from 'react';
import { Header } from './components/layout/Header';
import { ProjectProvider } from './context';
// import { addFirebaseTask } from './firebase';

function App({ darkModeDefault = false }) {
  const [darkMode, setDarkMode] = useState(darkModeDefault);
  return (
    <ProjectProvider>
      <main className={darkMode ? 'darkmode' : undefined}>
        <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      </main>
    </ProjectProvider>
  );
}

export default App;
