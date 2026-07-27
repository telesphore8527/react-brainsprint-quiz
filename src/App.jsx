import { useState } from "react";
import { useEffect } from "react";
import { Header } from "./components/header";
import { StatutBar } from "./components/statut-bar";
import { QuestionBox } from "./components/question-box";
import "./App.css";

function App() {
  const lastHightScore = JSON.parse(localStorage.getItem("hightScore") || "0");
  const [questTab, setQuestTab] = useState([]);
  const [hightScore, setHightScore] = useState(lastHightScore);
  const [score, setScore] = useState(0);
  const [heartNumber, setHeartNumber] = useState(3);
  const [time, setTime] = useState(10);

  useEffect(() => {
    const call = async () => {
      let result = await fetch(
        "https://opentdb.com/api.php?amount=5&category=18&type=boolean"
      );
      const data = await result.json();
      setQuestTab(data.results);
      console.log(data);
    };
    call();
  }, []);

  useEffect(() => {
    let max = Math.max(score, hightScore);
    setHightScore(max);
    localStorage.setItem("hightScore", JSON.stringify(max));
  }, [score]);

  return (
    <div>
      <Header highScore={hightScore} />
      <StatutBar score={score} time={time} heartNumber={heartNumber} />

      <QuestionBox
        questTab={questTab}
        score={score}
        setScore={setScore}
        heartNumber={heartNumber}
        setHeartNumber={setHeartNumber}
        time={time}
        setTime={setTime}
      />
    </div>
  );
}

export default App;
