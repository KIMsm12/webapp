import { useState } from 'react';

export default function Form({ initialName = 'Taylor', initialAge = 42 }) {
  const [name, setName] = useState(initialName);
  const [age, setAge] = useState(initialAge);

  return (
    <>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={() => setAge(age + 1)}>
        Increment age
      </button>
      <p>Hello, {name}. You are {age}.</p>
    </>
  );
}