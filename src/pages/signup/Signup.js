import { useState } from 'react';

// styles
import './Signup.css';

export default function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [thumbnail, setThumbnail] = useState(null);

  return <div>Signup page</div>;
}
