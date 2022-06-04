import { useState } from 'react';

// styles
import './Create.css';
import react from 'react';

export default function Create() {
  //form field values
  const [name, setName] = useState('');
  const [details, setDetails] = useState('');
  const [dueDate] = useState('');

  return (
    <div className="create-form">
      <h2 className="page-title">Create a new project</h2>
      <form></form>
    </div>
  );
}
