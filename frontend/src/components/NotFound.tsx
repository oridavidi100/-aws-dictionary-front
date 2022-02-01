import React from 'react';
import { useNavigate } from 'react-router-dom';

function NotFound() {
  const navigate = useNavigate();
  return (
    <div className='body'>
      NotFound <br />
      <button
        onClick={() => {
          navigate('/');
        }}
      >
        search again
      </button>
    </div>
  );
}

export default NotFound;
