import React, { useEffect, useState } from 'react';

function App() {
  const [users, setUsers] = useState([]);

 
  useEffect(() => {
    const fetchedUsers = [
      { id: 1, name: 'Nicolas' },
      { id: 2, name: 'Queila' },
      { id: 3, name: 'Don' },
      { id: 4, name: 'Trevisan' },
      { id: 5, name: 'Nycollas' },
      { id: 6, name: 'Fabio' },
      { id: 7, name: 'Stati' },
      { id: 8, name: 'Moll' },
    ];
    setUsers(fetchedUsers);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-blue-600 text-white p-4">
        <div className="container mx-auto flex justify-between">
          <h1 className="text-xl font-bold">Lista de Usuários</h1>
          <nav>
            <ul className="flex space-x-4">
              <li><a href="#" className="hover:underline">Home</a></li>
              <li><a href="#" className="hover:underline">Sobre</a></li>
              <li><a href="#" className="hover:underline">Contato</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="flex-grow container mx-auto p-4">
        <h2 className="text-2xl font-bold mb-4">Usuários</h2>
        <ul className="bg-white shadow-md rounded-lg p-4">
          {users.map(user => (
            <li key={user.id} className="border-b last:border-none p-2">
              {user.name}
            </li>
          ))}
        </ul>
      </main>

      <footer className="bg-gray-800 text-white p-4">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 Lista de Usuários. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
