import { useState } from 'react';

// styles
import './Signup.css';

export default function Signup() {
  const [password, setPassword] = useState('');
  const [displayName, setDisplayName] = useState('');
  const [thumbnail, setThumbnail] = useState(null);

  return <div>{displayName}</div>;
}
