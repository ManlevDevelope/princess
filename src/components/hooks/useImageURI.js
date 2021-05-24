import { useEffect, useState } from 'react';

const useImageURI = (initValue) => {
  const [uri, setUri] = useState('');
  useEffect(() => {
    const baseURL =
      process.env.NODE_ENV === 'production'
        ? 'https://pockethive.ga/api/'
        : 'http://localhost:3080/';
    setUri(baseURL + initValue);
  }, []);
  return [uri, setUri];
};

export default useImageURI;
