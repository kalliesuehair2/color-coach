import React, { useState, useEffect } from 'react';
import { supabase } from '../supabaseClient';

function History() {
  const [formulas, setFormulas] = useState([]);

  useEffect(() => {
    fetchHistory();
  }, []);

  const fetchHistory = async () => {
    const { data } = await supabase
      .from('formulas')
      .select('*')
      .order('created_at', { ascending: false });
    if (data) setFormulas(data);
  };

  return (
    <div className="page">
      <h1>History</h1>
      <div className="history-list">
        {formulas.map(formula => (
          <div key={formula.id} className="history-card">
            <h3>{formula.clientName}</h3>
            <p>Base Color: {formula.baseColor}</p>
            <p>Developer: {formula.developer}</p>
            <p>Notes: {formula.additionalNotes}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default History;
