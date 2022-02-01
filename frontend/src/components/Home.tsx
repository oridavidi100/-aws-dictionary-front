import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
function Home() {
  const navigate = useNavigate();
  const word = useRef<string | any>('');
  const pos = useRef<string | any>('');
  const words = useSelector((state: { words: any[] }) => state.words);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): any => {
    e.preventDefault();
    console.log(word.current.value);
    console.log(pos.current.value);
    if (word.current.value === '') {
      navigate(`part-of-speech/${pos.current.value}`);
    } else {
      navigate(`/${word.current.value}/${pos.current.value}`);
    }
  };
  const handleClick = async (e: React.MouseEvent<HTMLParagraphElement, MouseEvent>) => {
    navigate(`/${(e.target as HTMLParagraphElement).innerHTML}`);
  };
  console.log(words);
  return (
    <div>
      <div className='body'>
        wellcome to <p className='Title'> ori's dictionary</p> <br />
        <img src='https://www.matnas-access.org.il/wp-content/uploads/2020/12/dictionary_168552845.jpg' alt='' />
        <form onSubmit={(e) => handleSubmit(e)} className='searchForm'>
          <div className='box'>
            <input name='word' type='text' ref={word} placeholder='word' className='input'></input>
          </div>
          <br />
          <div className='searchPos'>
            <label htmlFor='pos'>Part Of Speech ?</label>
            <select ref={pos} name='pos' id='cars'>
              <option value=''>none</option>
              <option value='n.'>Noun</option>
              <option value='v.'>Verb</option>
              <option value='interj.'>Interjection </option>
              <option value='a.'>Article </option>
              <option value='pron.'>Pronoun </option>
              <option value='prep.'>Preposition </option>
              <option value='adv.'>Adverb </option>
              <option value='conj.'>Conjunction </option>
            </select>
            <br />
          </div>
          <button>search</button>
        </form>
      </div>
      <h2 className='lastSearch'>last search :</h2>
      <div className='lastWords'>
        {words.map((word) => {
          return (
            <p
              key={word}
              onClick={(e) => {
                handleClick(e);
              }}
            >
              {word}
            </p>
          );
        })}
      </div>
    </div>
  );
}

export default Home;
