import { useCallback } from 'react';
import { useState } from 'react';

const useInput = (initValue = null) => {
  const [input, setInput] = useState(initValue);
  const onChangeInput = useCallback(
    (e) => {
      setInput(e.target.value);
    },
    [input]
  );
  return [input, onChangeInput, setInput];
};

export default useInput;
