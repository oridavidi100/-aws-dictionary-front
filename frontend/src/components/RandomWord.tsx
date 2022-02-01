import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
function RandomWord() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { part } = useParams();
  const [data, setData] = useState<any | undefined>();
  useEffect(() => {
    const getWord = async (): Promise<any> => {
      const response: any = await axios.get(
        `https://2bul9qr8el.execute-api.eu-central-1.amazonaws.com/dev/part-of-speech/${part}`
      );
      console.log(response.data);
      setData(response.data);
    };
    getWord();
  }, []);
  if (data) {
    const word = data.word;
    console.log(word);
    dispatch({ type: 'ADD_WORD', word: word });
  }
  return (
    <div className='body'>
      part:{part} <br />
      {data && (
        <div>
          <p className='word'> word : {data.word}</p>
          <p key={data.pos} className='pos'>
            {data.pos}
          </p>
          <div key='definitions'>
            {data.definitions.map((def: any) => {
              return (
                <span key={def} className='definition'>
                  <p className='definitionTitle'> definition :</p> {def}
                </span>
              );
            })}
          </div>
        </div>
      )}
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

export default RandomWord;
