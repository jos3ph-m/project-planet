import { useEffect, useState } from 'react';
import { projectFirestore } from '../firebase/config';

export const useDocument = (collection, id) => {
  const [document, setDocument] = useState(null);
  const [error, setError] = useState(null);

  // realtime data
};
