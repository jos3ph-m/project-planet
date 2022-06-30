import { useState } from 'react';
import { timestamp } from '../../firebase/config';
import { useAuthContext } from '../../hooks/useAuthContext';

export default function ProjectComments() {
  const [newComment, setNewComment] = useState('');
  const { user } = useAuthContext();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const commentToAdd = {
      displayName: user.displayName,
      photoURL: user.photoURL,
      content: newComment,
    };
  };
  return (
    <div className="project-comments">
      <h4>Project Comments</h4>
      <form className="add-comment" onSubmitt={handleSubmit}>
        <label>
          <span>Add new comment:</span>
          <textarea
            required
            onChange={setNewComment(e.target.value)}
            value={newComment}
          ></textarea>
        </label>
        <button className="btn">Add comment</button>
      </form>
    </div>
  );
}
