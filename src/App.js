import { useState } from 'react';
import { Header } from './components/layout/Header';
import { ProjectProvider, SelectedProjectProvider } from './context';
// import { addFirebaseTask } from './firebase';

function App({ darkModeDefault = false }) {
  const [darkMode, setDarkMode] = useState(darkModeDefault);
  return (
    <SelectedProjectProvider>
      <ProjectProvider>
        <main className={darkMode ? 'darkmode' : undefined}>
          <Header darkMode={darkMode} setDarkMode={setDarkMode} />
        </main>
      </ProjectProvider>
    </SelectedProjectProvider>
  );
}

export default App;
