import { useState } from "react";

const Button = ({ text, onClick }) => {
  return <button onClick={onClick}>{text}</button>;
};

const Statistics = ({ good, neutral, bad }) => {
  if (!good.value && !neutral.value && !bad.value) {
    return <p>No feedback given</p>;
  }
  const total = good.value + neutral.value + bad.value;

  const avarage = (good.value - bad.value) / total || 0;

  const positive = (good.value / total) * 100 || 0;

  return (
    <table>
      <tbody>
        <StatisticLine text={good.label} value={good.value} />
        <StatisticLine text={neutral.label} value={neutral.value} />
        <StatisticLine text={bad.label} value={bad.value} />
        <StatisticLine text="total" value={total} />
        <StatisticLine text="avarage" value={valueFormatter(avarage)} />
        <StatisticLine
          text="positive"
          value={`${valueFormatter(positive)} %`}
        />
      </tbody>
    </table>
  );
};

const StatisticLine = ({ text, value }) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  );
};

const valueFormatter = (value) => {
  return (value * 10) % 10 === 0 ? value : value.toFixed(1);
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState({ label: "good", value: 0 });
  const [neutral, setNeutral] = useState({ label: "neutral", value: 0 });
  const [bad, setBad] = useState({ label: "bad", value: 0 });
  // const [total, setTotal] = useState(0);

  const onValueChange = (fn, target) => {
    return () => {
      // setTotal(total + 1);
      fn({ ...target, value: target.value + 1 });
    };
  };

  return (
    <div>
      <h2>give feedback</h2>
      <Button text={good.label} onClick={onValueChange(setGood, good)} />
      <Button
        text={neutral.label}
        onClick={onValueChange(setNeutral, neutral)}
      />
      <Button text={bad.label} onClick={onValueChange(setBad, bad)} />
      <h2>statistics</h2>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

export default App;
