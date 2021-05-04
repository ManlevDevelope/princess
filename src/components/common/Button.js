import { useState, useEffect, useRef } from 'react';
import { Loader } from '../styled';

const Button = ({ loading, children, ...rest }) => {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const ref = useRef();
  const [showLoad, setShowLoad] = useState(false);

  useEffect(() => {
    if (ref.current && ref.current.getBoundingClientRect().width) {
      setWidth(ref.current.getBoundingClientRect().width);
    }
    if (ref.current && ref.current.getBoundingClientRect().height) {
      setHeight(ref.current.getBoundingClientRect().height);
    }
  }, [children]);

  useEffect(() => {
    if (loading) {
      setShowLoad(true);
    }
    if (!loading && showLoad) {
      setShowLoad(false);
    }
  }, [loading, showLoad]);

  return (
    <button
      ref={ref}
      style={
        width && height
          ? {
              width: `${width}px`,
              height: `${height}px`,
            }
          : {}
      }
      {...rest}
    >
      {showLoad ? (
        <Loader>
          <div className='loader' />
        </Loader>
      ) : (
        children
      )}
    </button>
  );
};

export default Button;
