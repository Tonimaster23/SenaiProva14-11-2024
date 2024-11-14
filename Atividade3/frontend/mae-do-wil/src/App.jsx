import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchedUsers = [
      { id: 1, name: 'Kethlin Priscila' },
      { id: 2, name: 'Stati Supervisor' },
      { id: 3, name: 'Nicolas Marques' },
      { id: 4, name: 'Teste Teste Teste' },
      { id: 5, name: 'Teste Teste Teste' },
      { id: 6, name: 'Teste Teste Teste' },
    ];
    setUsers(fetchedUsers);
  }, []);

  return (
    <div className="card-container">
      <div className="card">
        <div className="tonizinho">
          
        </div>
        <div className="header">
          <img 
            src="https://www.saopauloinfoco.com.br/wp-content/uploads/2021/05/Justiceiro-com-suas-armas-e-seu-famoso-Opala-posando-para-uma-reportagem-do-Noticias-Populares-e1620409977534.jpeg " alt="Guilherme Pires"  className="profile-pic" />
          <div className="title-toni">
            <h1>Guilherme Pires</h1>
            <p>Sistema fiep - Supervisor de curso</p>
          </div>
        </div>
        
        <div className="conteudo">
          <div className="info">
            <h2>Info</h2>
            <p>(41)99999-9999</p>
            <br></br>
            <p>guilherme@mail.com</p>
            <br></br>
            <p>N12345678</p>
          </div>
          
          <div className="equipe">
            <h2>Equipe</h2>
            <ul>
              {users.map(user => (
                <li key={user.id}>{user.name}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
