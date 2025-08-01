import { useState } from "react";

const Button = ({ handleClick, text }) => {
  return <button onClick={handleClick}>{text}</button>;
};

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.",
    "The only way to go fast, is to go well.",
  ];

  const [selected, setSelected] = useState(0);

  const [points, setPoints] = useState(new Uint8Array(anecdotes.length));
  const copy = [...points];
  let value = Math.max(...copy);
  let position = copy.indexOf(value);

  const randomClick = () => {
    const updatedSelected = Math.floor(Math.random() * anecdotes.length);
    setSelected(updatedSelected);
  };

  const voteClick = () => {
    copy[selected] += 1;
    setPoints(copy);
    console.log(copy, "This is updated points");
  };

  return (
    <div>
      <div>{anecdotes[selected]}</div>
      <p>Has {points[selected]} votes</p>
      <div>
        <Button handleClick={randomClick} text={"Next anecdote"} />
        <Button handleClick={voteClick} text={"Vote"} />
      </div>
      <h2>Most voted anecdote:</h2>
      <div>
        {anecdotes[position]}
        <p>Has {value} votes</p>
      </div>
    </div>
  );
};

export default App;
