import { useState } from 'react';
import { timestamp } from '../../firebase/config';
import { useAuthContext } from '../../hooks/useAuthContext';

export default function ProjectComments() {
  const [newComment, setNewComment] = useState('');
  return (
    <div className="project-comments">
      <h4>Project Comments</h4>
      <form className="add-comment">
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
