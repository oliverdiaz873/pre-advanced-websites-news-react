import React from 'react';

function App() {
  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center p-4">
      <div className="bg-gray-800 p-8 rounded-2xl shadow-2xl border border-gray-700 text-center max-w-lg w-full transition-all hover:scale-105 duration-300">
        <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-4">
          React + Tailwind CSS
        </h1>
        <p className="text-gray-300 text-lg mb-6">
          Tu entorno de desarrollo está listo. ¡Empieza a construir tu increíble proyecto ahora!
        </p>
        <div className="flex gap-4 justify-center">
          <button className="px-6 py-2 rounded-lg bg-blue-500 hover:bg-blue-600 text-white font-semibold transition-colors">
            Empezar
          </button>
          <button className="px-6 py-2 rounded-lg bg-transparent border border-gray-500 hover:border-gray-400 text-gray-300 font-semibold transition-colors">
            Documentación
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
