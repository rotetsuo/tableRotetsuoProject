import { useState, useEffect } from 'react';
import './App.css'
import Header from  './components/Header'
import Footer from './components/Footer';
import TicketTable from './components/table/TicketTable';
import TicketFilter from './components/TicketFilter';
import statusOptions from './data/statusOptions.json';

function App() {
  const [darkTheme, setDarkTheme] = useState(true);
  const [filterStatus, setFilterStatus] =useState(statusOptions[0].value);

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

      <main className="ax-w-screen bg-white dark:bg-[#1f1f1f]  text-gray-950 dark:text-white lg:pt-40 md:pt-30 pt-28 lg:px-30 md:px-10 px-1">
        <TicketFilter
          filterStatus={filterStatus}
          onFilterChange={setFilterStatus}
        />
        <TicketTable filterStatus={filterStatus} />
      </main>
      <Footer />
    </>
  )
}

export default App
