import { useState } from 'react';

export default function MyInput({ initialValue = 'hello' }) {
  const [text, setText] = useState(initialValue);

  return (
    <>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <p>You typed: {text}</p>
      <button onClick={() => setText(initialValue)}>
        Reset
      </button>
    </>
  );
}