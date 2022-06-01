import { useCollection } from '../hooks/useCollection';

// styles
import './OnlineUsers.css';

export default function OnlineUsers() {
  const { error, documents } = useCollection('users');
  return (
    <div className="user-list">
      <h2>All Users</h2>
      {error && <div className="error"></div>}
      {documents &&
        document.map((user) => (
          <div key={user.id}>
            <span>{user.displayName}</span>
            <Avatar src={user.photoURL} />
          </div>
        ))}
    </div>
  );
}
