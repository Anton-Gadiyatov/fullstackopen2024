import { useState } from "react";

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];

  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0));

  const handleNextAnecdote = () => {
    const randomNumber = getRandomNumber(0, anecdotes.length, selected);
    setSelected(randomNumber);
  };

  const handleVote = () => {
    const newVotes = [...votes];
    newVotes[selected] += 1;
    setVotes(newVotes);
  };

  const getRandomNumber = (min, max, exept = NaN) => {
    let number;
    do {
      const minCeiled = Math.ceil(min);
      const maxFloored = Math.floor(max);
      number = Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
    } while (number === exept);
    return number;
  };

  const maxVotes = Math.max(...votes);
  const maxVotedAnecdote = anecdotes[votes.indexOf(maxVotes)];

  return (
    <div>
      <h2>Anecdote of the day</h2>
      <div>{anecdotes[selected]}</div>
      <div>has {`${votes[selected]}`} votes</div>
      <button onClick={handleVote}>vote</button>
      <button onClick={handleNextAnecdote}>next anecdote</button>
      <h2>Anecdote with most votes</h2>
      <div>{maxVotedAnecdote}</div>
    </div>
  );
};

export default App;
