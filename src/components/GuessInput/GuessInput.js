import React, { useState } from 'react';

function GuessInput({ handleSubmitGuess }) {
  const [tentativeGuess, setTentativeGuess] = useState('');

  function handleSubmit(e) {
    e.preventDefault();

    handleSubmitGuess(tentativeGuess);
    setTentativeGuess('');
  }

  return (
    <>
      <form className="guess-input-wrapper" onSubmit={handleSubmit}>
        <label htmlFor="guess-input">Enter guess:</label>
        <input
          id="guess-input"
          type="text"
          value={tentativeGuess}
          required
          minLength={5}
          maxLength={5}
          pattern="[a-zA-Z]{5}"
          title="5 letter word"
          onChange={(e) => setTentativeGuess(e.target.value.toUpperCase())}
        />
      </form>
    </>
  );
}

export default GuessInput;
