import React, { useState, useEffect } from 'react';
import { supabase } from '../supabaseClient';

function Clients() {
  const [clients, setClients] = useState([]);
  const [newClient, setNewClient] = useState({ name: '', email: '', phone: '' });

  useEffect(() => {
    fetchClients();
  }, []);

  const fetchClients = async () => {
    const { data } = await supabase.from('clients').select('*');
    if (data) setClients(data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { error } = await supabase.from('clients').insert([newClient]);
    if (!error) {
      alert('Client added!');
      setNewClient({ name: '', email: '', phone: '' });
      fetchClients();
    }
  };

  return (
    <div className="page">
      <h1>Clients</h1>
      <form onSubmit={handleSubmit}>
        <input placeholder="Name" value={newClient.name}
          onChange={e => setNewClient({...newClient, name: e.target.value})} />
        <input placeholder="Email" value={newClient.email}
          onChange={e => setNewClient({...newClient, email: e.target.value})} />
        <input placeholder="Phone" value={newClient.phone}
          onChange={e => setNewClient({...newClient, phone: e.target.value})} />
        <button type="submit">Add Client</button>
      </form>
      <div className="client-list">
        {clients.map(client => (
          <div key={client.id} className="client-card">
            <h3>{client.name}</h3>
            <p>{client.email}</p>
            <p>{client.phone}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Clients;
