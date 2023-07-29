import { useState } from 'react';
import data from './../data.json';

export default function MyProjects() {
  const [index, setIndex] = useState(0);
  let item = data.projects[index];

  function handleClick() {
    if (index < data.projects.length - 1) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
  }

  return (
    <div>
      <button onClick={handleClick}>Next</button>
      <p>Tool Name: {item.tool}</p>
      <p>Tool Use: {item.use}</p>
      <p>Handle Construction: {item.handle}</p>
      <p>Tool Condition: {item.condition}</p>
    </div>
  );
}
