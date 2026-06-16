import React, { useState, useEffect } from 'react';
import { supabase } from '../supabaseClient';

function Branding() {
  const [branding, setBranding] = useState({
    salonName: '',
    tagline: '',
    primaryColor: '#000000',
    secondaryColor: '#ffffff'
  });

  useEffect(() => {
    fetchBranding();
  }, []);

  const fetchBranding = async () => {
    const { data } = await supabase.from('branding').select('*').single();
    if (data) setBranding(data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { error } = await supabase
      .from('branding')
      .upsert([branding]);
    if (!error) alert('Branding saved!');
  };

  return (
    <div className="page">
      <h1>Branding</h1>
      <form onSubmit={handleSubmit}>
        <input placeholder="Salon Name" value={branding.salonName}
          onChange={e => setBranding({...branding, salonName: e.target.value})} />
        <input placeholder="Tagline" value={branding.tagline}
          onChange={e => setBranding({...branding, tagline: e.target.value})} />
        <label>Primary Color</label>
        <input type="color" value={branding.primaryColor}
          onChange={e => setBranding({...branding, primaryColor: e.target.value})} />
        <label>Secondary Color</label>
        <input type="color" value={branding.secondaryColor}
          onChange={e => setBranding({...branding, secondaryColor: e.target.value})} />
        <button type="submit">Save Branding</button>
      </form>
    </div>
  );
}

export default Branding;
