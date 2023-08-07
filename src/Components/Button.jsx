/* eslint-disable */
import "./button.css"

const Button = () => (
  <div className="container">
  <div className="grid-container">
  
    <input className=" value-input" type="text" value="0" />
    <button>AC </button>
    <button>+/- </button>
    <button> % </button>
    <button className="grid-item-color">/ </button>
    <button>7 </button>
    <button>8</button>
    <button>9 </button>
    <button className="grid-item-color">x </button>
    <button>4 </button>
    <button>5 </button>
    <button>6</button>
    <button className="grid-item-color">- </button>
    <button>1 </button>
    <button>2</button>
    <button>3</button>
    <button className="grid-item-color">+ </button>
    <button className="grid-item-zero">0 </button>
    <button>.</button>
    <button className="grid-item-color">=</button>
  </div>

</div>
);

export default Button;
