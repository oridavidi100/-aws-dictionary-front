import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
function WordAndPos() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { word, partOfSpeech } = useParams();
  const [data, setData] = useState<any | undefined>();
  useEffect(() => {
    const getWord = async (): Promise<any> => {
      const response: any = await axios.get(
        `https://2bul9qr8el.execute-api.eu-central-1.amazonaws.com/dev/${word}/${partOfSpeech}`
      );
      console.log(response.data);
      if (response.data.Items.length === 0) {
        navigate('/NotFound');
      } else {
        setData(response.data.Items[0]);
        dispatch({ type: 'ADD_WORD', word: word });
      }
    };
    getWord();
  }, []);
  console.log(data);
  return (
    <div className='body'>
      WordAndPos <br />
      <p className='word'>word: {word}</p> <br />
      part-of-speech: {partOfSpeech}
      {data && (
        <div key={data.pos}>
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

export default WordAndPos;
