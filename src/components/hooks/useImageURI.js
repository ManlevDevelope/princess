import { useEffect, useState } from 'react';

const useImageURI = (initValue) => {
  const [uri, setUri] = useState('');
  useEffect(() => {
    const baseURL = process.env.NODE_ENV === 'production' ? '' : '';
    setUri(baseURL + initValue);
  }, []);
  return [uri, setUri];
};

export default useImageURI;
