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
      xIsNext: true,
    };
  }

  handleClick(i){
    //원본을 얕은복사해서 새로운 객체로 반환. 원본배열 바뀌지 않음~
    const history = this.state.history;
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
      xIsNext : !this.state.xIsNext,
    });
  }

  render() {
      const history = this.state.history;
      const current = history[history.length - 1];
      const winner = calculateWinner(current.squares);
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
            <ol>{/* TODO */}</ol>
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