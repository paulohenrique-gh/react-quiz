import {useState} from 'react';

function Option({option, isCorrect}) {
  const [btnClass, setBtnClass] = useState('');

  function handleClick() {
    setBtnClass(isCorrect ? 'correct' : 'wrong')
  }

  return (
    <button className={`btn btn-option ${btnClass}`} onClick={handleClick}>{option}</button>
  )
}
export default Option
