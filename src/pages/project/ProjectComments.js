import { useState } from 'react';
import { timestamp } from '../../firebase/config';
import { useAuthContext } from '../../hooks/useAuthContext';

export default function ProjectComments() {
  return (
    <div className="project-comments">
      <h4>Project Comments</h4>
      <form className="add-comment">
        <label></label>
      </form>
    </div>
  );
}
