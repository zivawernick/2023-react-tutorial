/* reusable component
 hange the value of a square from empty to “X” when the user clicks on the square
 */
function Square({ value }) {
  return <button className="square">{value}</button>;
}

export default function Board() {
  //export makes function accessible outside of file apps.js .test
  //initially function named square -> board
  return (
    <>
      <div className="board-row">
        <Square value="1" />
        <Square value="2" />
        <Square value="3" />
      </div>
      <div className="board-row">
        <Square value="4" />
        <Square value="5" />
        <Square value="6" />
      </div>
      <div className="board-row">
        <Square value="7" />
        <Square value="8" />
        <Square value="9" />
      </div>
    </>
  );
  //className is a property for CSS styling
  //button is a JSX element (Javascript and HTMl)
}
