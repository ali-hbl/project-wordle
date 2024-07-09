import React from 'react';
import { checkGuess } from '../../game-helpers';
import { range } from '../../utils';

function Cell({ letter, status }) {
  const className = status ? `cell ${status}` : 'cell';

  return <span className={className}>{letter}</span>;
}

function Guess({ value, answer }) {
  const result = checkGuess(value, answer);

  return (
    <div className="grid">
      <p className="guess">
        {range(5).map((i) => (
          <Cell key={i} letter={result ? result[i].letter : undefined} status={result ? result[i].status : undefined} />
        ))}
      </p>
    </div>
  );
}

export default Guess;
