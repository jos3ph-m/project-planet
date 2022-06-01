import { useCollection } from '../hooks/useCollection';

// styles
import './OnlineUsers.css';

export default function OnlineUsers() {
  const { error, documents } = useCollection('users');
  return (
    <div className="user-list">
      <h2>All Users</h2>
      {error && <div></div>}
    </div>
  );
}
