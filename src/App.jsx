import { useState, useEffect } from 'react';
import './App.css'
import Header from  './components/Header'
import TicketTable from './components/table/TicketTable';

function App() {
  const [darkTheme, setDarkTheme] = useState(true);

  useEffect(() => {
    if(darkTheme) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkTheme]);

  const changeTheme = () => setDarkTheme(!darkTheme);

  return (
    <>
      <Header changeTheme={changeTheme} darkTheme={darkTheme} />

      <main className="bg-white dark:bg-gray-800  text-gray-950 dark:text-white pt-16">
        <TicketTable/>
      </main>
      
    </>
  )
}

export default App
