import { useState } from 'react';

// styles
import './Create.css';
import react from 'react';

export default function Create() {
  //form field values
  const [name, setName] = useState('');
  const [details, setDetails] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [category, setCategory] = useState('');
  const [assignedUsers, setAssignedUsers] = useState([]);

  return (
    <div className="create-form">
      <h2 className="page-title">Create a new project</h2>
      <form>
        <label>
          <span>Project name:</span>
          <input
            required
            type="text"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </label>
        <label>
          <span>Project details:</span>
          <textarea
            required
            type="text"
            onChange={(e) => setDetails(e.target.value)}
            value={details}
          ></textarea>
        </label>
        <label>
          <span>Set due date:</span>
          <textarea
            required
            type="date"
            onChange={(e) => setDueDate(e.target.value)}
            value={details}
          ></textarea>
        </label>
      </form>
    </div>
  );
}
