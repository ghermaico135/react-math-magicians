import './button.css';

const Button = () => (
  <div className="container">
    <div className="grid-container">

      <input className=" value-input" type="text" value="0" />
      <button type="button">AC </button>
      <button type="button">+/- </button>
      <button type="button"> % </button>
      <button type="button" className="grid-item-color">/ </button>
      <button type="button">7 </button>
      <button type="button">8</button>
      <button type="button">9 </button>
      <button type="button" className="grid-item-color">x </button>
      <button type="button">4 </button>
      <button type="button">5 </button>
      <button type="button">6</button>
      <button type="button" className="grid-item-color">- </button>
      <button type="button">1 </button>
      <button type="button">2</button>
      <button type="button">3</button>
      <button type="button" className="grid-item-color">+ </button>
      <button type="button" className="grid-item-zero">0 </button>
      <button type="button">.</button>
      <button type="button" className="grid-item-color">=</button>
    </div>

  </div>
);

export default Button;
