import { useEffect, useState } from "react";
import {
  FiRefreshCcw,
  FiWifiOff,
  FiFrown,
  FiRotateCcw,
  FiAward,
  FiPlayCircle,
} from "react-icons/fi";
import he from "he";

export function QuestionBox({
  questTab,
  score,
  setScore,
  heartNumber,
  setHeartNumber,
  time,
  setTime,
}) {
  const [tmpTime, setTmpTime] = useState(10);
  const [questId, setQuestId] = useState(0);

  useEffect(() => {
    if (!questTab[questId] || heartNumber === 0) return;
    if (tmpTime === 0) {
      handleClick(true, false);
      return;
    }
    const timeout = setInterval(() => {
      setTmpTime((tmpTime) => tmpTime - 1);
    }, 1000);

    return () => clearInterval(timeout);
  }, [questTab, tmpTime]);

  const handleClick = (value, correct_answer) => {
    if (value === correct_answer) {
      setScore((prev) => prev + 1);
    } else {
      setHeartNumber((prev) => prev - 1);
    }
    setQuestId((prev) => prev + 1);
    if (questId < questTab.length) {
      setTmpTime(10);
    }
  };

  return (
    <section className="quest-section">
      <p
        style={{
          textAlign: "center",
          fontSize: "2rem",
        }}
      >
        {tmpTime <= 0 ? "0" : tmpTime}
      </p>
      <div className="quest-box">
        <div className="quest-box-main">
          <div className="quest-box-header">Question Box</div>
          {
            questTab &&
            questTab.length > 0 &&
            questTab[questId] &&
            heartNumber > 0 ? (
              <section className="quest-item">
                <p>{he.decode(questTab[questId].question)}</p>
                <div className="action-area">
                  <div>Action Area</div>
                  <div className="btns">
                    <button
                      onClick={() =>
                        handleClick("True", questTab[questId].correct_answer)
                      }
                    >
                      True
                    </button>

                    <button
                      onClick={() =>
                        handleClick("False", questTab[questId].correct_answer)
                      }
                    >
                      False
                    </button>
                  </div>
                </div>
              </section>
            ) : (!questTab[questId] && questTab.length === 0) ? (
              <div className="error">
                <div className="msg-icon alert">
                  <FiWifiOff />
                </div>
                Erreur de connexion, veuillez reessayer
                <button onClick={() => window.location.reload()}>
                  <FiRefreshCcw />
                  Reessayer
                </button>
              </div>
            ) : heartNumber <= 0 ? (
              <div className="error">
                <div className="msg-icon alert">
                  <FiFrown />
                </div>
                Fin de la partie, Vous avez perdu
                <button onClick={() => window.location.reload()}>
                  <FiRotateCcw />
                  recommencer
                </button>
              </div>
            ) : (
              <div className="error">
                <div className="msg-icon">
                  <FiAward />
                </div>
                Felicitations, vous avez gagne
                <button onClick={() => window.location.reload()}>
                  <FiPlayCircle />
                  Jouer a nouveau
                </button>
              </div>
            )
          }
        </div>
      </div>
    </section>
  );
}
