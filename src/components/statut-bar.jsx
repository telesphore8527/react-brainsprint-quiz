import { FaHeart, FaRegHeart } from "react-icons/fa";

function Hearts({ heartNumber }) {
  const hearts = [1, 2, 3];
  return (
    <div className="hearts">
      {hearts.map((e, i) => {
        return i <= heartNumber - 1 ? <FaHeart key={i} /> : <FaRegHeart key={i} />;
      })}
    </div>
  );
}

export function StatutBar({ score, time, heartNumber }) {
  return (
    <>
      <div className="statut-bar-header">Statut Bar</div>
      <section className="statut-bar">
        <div className="score">Score : {score} </div>

        <div className={time <= 5 ? "time danger" : "time"}> {time === 10 ? "" : "0"} {time} </div>

        <Hearts heartNumber={heartNumber} />
      </section>
    </>
  );
}
