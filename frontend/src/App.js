import React, { useState, useEffect } from 'react';
import './App.css';

import api from './api';

function App() {

  const [membros, setMembros] = useState([]);

  useEffect(()=>{
    async function loadMembers(){
      const res = await api.get('/allmembers');
      const {data} = res;

      setMembros(data);
    }

    loadMembers();
  }, []);

  return (
    <div>
      <h1>SO RAKE</h1>
      <h3>mR RoBotNicO</h3>
      <span>Membros: {membros}</span>
    </div>
  );
}

export default App;
