import { useState, useEffect } from 'react';
import './App.css'
import Header from  './components/Header'
import TicketTable from './components/table/TicketTable';
import TicketFilter from './components/TicketFilter';

function App() {
  const [darkTheme, setDarkTheme] = useState(true);
  const [filterStatus, setFilterStatus] = useState("Todos");

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

      <main className="min-h-screen bg-white dark:bg-gray-800  text-gray-950 dark:text-white pt-16 gap-26 px-30 pt-50">
        <TicketFilter
          filterStatus={filterStatus}
          onFilterChange={setFilterStatus}
        />
        <TicketTable filterStatus={filterStatus} />
      </main>
      
    </>
  )
}

export default App
