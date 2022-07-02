import { useState } from 'react';
import { timestamp } from '../../firebase/config';
import { useAuthContext } from '../../hooks/useAuthContext';
import { useFirestore } from '../../hooks/useFirestore';

// id generator
import nextId from 'react-id-generator';

export default function ProjectComments() {
  const { updateDocument, response } = useFirestore('projects');
  const [newComment, setNewComment] = useState('');
  const { user } = useAuthContext();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const htmlId = nextId();

    const commentToAdd = {
      displayName: user.displayName,
      photoURL: user.photoURL,
      content: newComment,
      createdAt: timestamp.fromDate(new Date()),
      id: htmlId,
    };

    console.log(commentToAdd);
  };
  return (
    <div className="project-comments">
      <h4>Project Comments</h4>
      <form className="add-comment" onSubmit={handleSubmit}>
        <label>
          <span>Add new comment:</span>
          <textarea
            required
            onChange={(e) => setNewComment(e.target.value)}
            value={newComment}
          ></textarea>
        </label>
        <button className="btn">Add comment</button>
      </form>
    </div>
  );
}
