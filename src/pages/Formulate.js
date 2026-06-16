import React, { useState } from 'react';
import { supabase } from '../supabaseClient';

function Formulate() {
  const [formula, setFormula] = useState({
    clientName: '',
    baseColor: '',
    developer: '',
    additionalNotes: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();import React, { useState } from 'react';
import { supabase } from '../supabaseClient';

function Formulate() {
  const [formula, setFormula] = useState({
    client_name: '',
    base_color: '',
    developer: '',
    additional_notes: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { error } = await supabase
      .from('formulas')
      .insert([formula]);
    if (!error) {
      alert('Formula saved!');
      setFormula({ client_name: '', base_color: '', developer: '', additional_notes: '' });
    } else {
      alert('Error: ' + error.message);
    }
  };

  return (
    <div className="page">
      <h1>Formulate</h1>
      <form onSubmit={handleSubmit}>
        <input placeholder="Client Name" value={formula.client_name}
          onChange={e => setFormula({...formula, client_name: e.target.value})} />
        <input placeholder="Base Color" value={formula.base_color}
          onChange={e => setFormula({...formula, base_color: e.target.value})} />
        <input placeholder="Developer" value={formula.developer}
          onChange={e => setFormula({...formula, developer: e.target.value})} />
        <textarea placeholder="Additional Notes" value={formula.additional_notes}
          onChange={e => setFormula({...formula, additional_notes: e.target.value})} />
        <button type="submit">Save Formula</button>
      </form>
    </div>
  );
}

export default Formulate;
    const { error } = await supabase
      .from('formulas')
      .insert([formula]);
    if (!error) {
      alert('Formula saved!');
      setFormula({ clientName: '', baseColor: '', developer: '', additionalNotes: '' });
    }
  };

  return (
    <div className="page">
      <h1>Formulate</h1>
      <form onSubmit={handleSubmit}>
        <input placeholder="Client Name" value={formula.clientName}
          onChange={e => setFormula({...formula, clientName: e.target.value})} />
        <input placeholder="Base Color" value={formula.baseColor}
          onChange={e => setFormula({...formula, baseColor: e.target.value})} />
        <input placeholder="Developer" value={formula.developer}
          onChange={e => setFormula({...formula, developer: e.target.value})} />
        <textarea placeholder="Additional Notes" value={formula.additionalNotes}
          onChange={e => setFormula({...formula, additionalNotes: e.target.value})} />
        <button type="submit">Save Formula</button>
      </form>
    </div>
  );
}

export default Formulate;
