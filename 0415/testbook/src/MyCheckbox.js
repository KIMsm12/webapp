import { useState } from 'react';

export default function MyCheckbox({ label }) {
  const [checked, setChecked] = useState(false);

  return (
    <>
      <label>
        <input
          type="checkbox"
          checked={checked}
          onChange={(e) => setChecked(e.target.checked)}
        />
        {label}
      </label>
      <p>You {checked ? 'liked' : 'did not like'} this.</p>
    </>
  );
}