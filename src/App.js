export default function Board() { //export makes function accessible outside of file apps.js
  //initially function named square -> board
  return (
  <> 
    <div className="board-row">
      <button className="square">1</button>
      <button className="square">2</button> 
      <button className="square">3</button>
    </div>
    <div className="board-row">
      <button className="square">4</button> 
      <button className="square">5</button> 
      <button className="square">6</button>
    </div>
    <div className="board-row">
      <button className="square">7</button> 
      <button className="square">8</button> 
      <button className="square">9</button>
    </div>
  </>
  );
  //className is a property for CSS styling
  //button is a JSX element (Javascript and HTMl)
}
