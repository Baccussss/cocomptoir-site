import React from 'react';
import BenevoleActions from '../components/Benevoles/BenevoleActions';
import BenevoleForm from '../components/Benevoles/BenevoleForm';

export default function Benevole() {
  return (
    <div className="benevole-page">
      <BenevoleActions />
      <BenevoleForm />
    </div>
  );
}
