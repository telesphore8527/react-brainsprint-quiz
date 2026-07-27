import { FaBrain } from "react-icons/fa";
export function Header({ highScore }) {
  return (
    <>
      <header>
        <div className="brand">
          <div className="logo">
            <FaBrain />
          </div>
          <div className="brand-name">
            <h1>BrainSprint</h1>
            <div className="sub-brand">Think Fast, Stay, Sharp</div>
          </div>
        </div>
        <div>
          <div className="highSore">Hight Score : {highScore}</div>
        </div>
      </header>
    </>
  );
}
