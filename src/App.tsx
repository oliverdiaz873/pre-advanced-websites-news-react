import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from './features/layout/components/Header/Header';

function App() {
  return (
    <div className="min-h-screen bg-white transition-colors duration-200 flex flex-col dark:bg-gray-950">
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
    </div>
  );
}

export default App;
