import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
function Word() {
  const navigate = useNavigate();
  const { word } = useParams();
  const [data, setData] = useState<any | null>();
  const dispatch = useDispatch();

  useEffect(() => {
    const getWord = async (): Promise<any> => {
      const response: any = await axios.get(`https://2bul9qr8el.execute-api.eu-central-1.amazonaws.com/dev/${word}`);
      if (response.data.Items.length === 0) {
        navigate('/NotFound');
      } else {
        setData(response.data.Items);
        dispatch({ type: 'ADD_WORD', word: word });
      }
    };
    getWord();
  }, []);

  console.log(data);

  return (
    <div className='body'>
      <p className='word'>word :{word}</p>
      {data &&
        data.map((item: any) => {
          return (
            <div key={item.pos}>
              <p key={item.pos} className='pos'>
                {item.pos}
              </p>
              <div key='definitions'>
                {item.definitions.map((def: any) => {
                  return (
                    <span key={def} className='definition'>
                      <p className='definitionTitle'> definition :</p>
                      {def}
                    </span>
                  );
                })}
              </div>
            </div>
          );
        })}
      <button
        onClick={() => {
          navigate('/');
        }}
      >
        {' '}
        search again
      </button>
    </div>
  );
}
export default Word;
