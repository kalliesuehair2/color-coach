import React, { useState, useEffect } from 'react';
import { supabase } from '../supabaseClient';

function Pricing() {
  const [services, setServices] = useState([]);
  const [newService, setNewService] = useState({ name: '', price: '' });

  useEffect(() => {
    fetchServices();
  }, []);

  const fetchServices = async () => {
    const { data } = await supabase.from('pricing').select('*');
    if (data) setServices(data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { error } = await supabase.from('pricing').insert([newService]);
    if (!error) {
      alert('Service added!');
      setNewService({ name: '', price: '' });
      fetchServices();
    }
  };

  return (
    <div className="page">
      <h1>Pricing</h1>
      <form onSubmit={handleSubmit}>
        <input placeholder="Service Name" value={newService.name}
          onChange={e => setNewService({...newService, name: e.target.value})} />
        <input placeholder="Price" value={newService.price}
          onChange={e => setNewService({...newService, price: e.target.value})} />
        <button type="submit">Add Service</button>
      </form>
      <div className="pricing-list">
        {services.map(service => (
          <div key={service.id} className="pricing-card">
            <h3>{service.name}</h3>
            <p>${service.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Pricing;
