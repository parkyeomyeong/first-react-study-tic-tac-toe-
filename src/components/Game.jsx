import React from 'react';
import Board from './Board';
// import "./mycss.css";

export default class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [{
        squares: Array(9).fill(null),
      }],
      stepNumber: 0,
      xIsNext: true,
    };
  }

  handleClick(i){
    //원본을 얕은복사해서 새로운 객체로 반환. 원본배열 바뀌지 않음~
    // slice(start, end) 이면 start~ end-1까지만 복사이므로 여기서 end에 +1 해주는게 맞지
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    if (calculateWinner(squares) || squares[i]){
        return;
    }
    squares[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({
      //concat은 기존 배열을 변경하지 않아서 이렇게 함
      history : history.concat([{
        squares : squares,
      }]),
      stepNumber : history.length,
      xIsNext : !this.state.xIsNext,
    });
  }

  jumpTo(step){
    //setState할때 모든 프로퍼티(여기선 history)를 업데이트 하지 않아도 되나봐?
    this.setState({
      stepNumber : step,
      xIsNext : (step % 2) === 0,
      }
    );
  }

  render() {
      const history = this.state.history;
      const current = history[this.state.stepNumber];
      const winner = calculateWinner(current.squares);

      // map 함수에서 첫번째인 step은 각각의 값, 두번쨰 argument는 index이다
      const moves = history.map((step, move) => {
        const desc = move?
          `Go to move #${move}` :
          `Go to game start`;
        return (
          <li key={move}>
            <button onClick={() => this.jumpTo(move)}>{desc}</button>
          </li>
        );
      })

      let status;
      if(winner){
        status = `Winner : ${winner}`;
      }else{
        status = `Next Player : ${(this.state.xIsNext ? 'X' : 'O')}`;
      }

      return (
        <div className="game">
          <div className="game-board">
            <Board
              squares={current.squares}
              onClick={(i) => this.handleClick(i)} />
          </div>
          <div className="game-info">
            <div>{status}</div>
            <ol>
              {/* TODO */}
              {moves}
            </ol>
          </div>
        </div>
      );
    }
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}