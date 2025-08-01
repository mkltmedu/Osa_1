import { useState } from "react";

const Button = ({ tag, handle }) => {
  return <button onClick={handle}>{tag}</button>;
};

const StatisticLine = ({ text, value }) => {
  console.log("StatisticLine komponentti");
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  );
};

const Statistics = ({ good, neutral, bad }) => {
  const total = good + neutral + bad;
  if (total === 0) {
    return (
      <div>
        <br></br>No feedback given
      </div>
    );
  }
  console.log("Statistics toimii");
  return (
    <div>
      <br></br>
      <h1>Statistics</h1>
      <table>
        <tbody>
          <StatisticLine text="Good: " value={good} />
          <StatisticLine text="Neutral: " value={neutral} />
          <StatisticLine text="Bad: " value={bad} />
          <StatisticLine text="Total: " value={total} />
          <StatisticLine text="Average: " value={(good - bad) / total} />
          <StatisticLine text="Positive: " value={(good / total) * 100} />
        </tbody>
      </table>
    </div>
  );
};

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleGoodClick = () => {
    console.log("Good button clicked");
    setGood(good + 1);
  };

  const handleNeutralClick = () => {
    console.log("Neutral button clicked");
    setNeutral(neutral + 1);
  };
  const handleBadClick = () => {
    console.log("Bad button clicked");
    setBad(bad + 1);
  };

  return (
    <div>
      <Button tag={"good"} handle={handleGoodClick} />
      <Button tag={"neutral"} handle={handleNeutralClick} />
      <Button tag={"bad"} handle={handleBadClick} />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

export default App;
