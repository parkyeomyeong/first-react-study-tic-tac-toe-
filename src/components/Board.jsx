import React from 'react';
import Square from './Squre';
// import './mycss.css'

export default class Board extends React.Component {
    
    //아래 내용들을 상위 component인 Game에서 관리할거기 때문에 아래 constructor는 주석처리
    // constructor(props){
    //     super(props);
    //     // 일단 빙고를 판단하기 위해서도 array로 state를 관리해야징
    //     this.state = {
    //         squares : Array(9).fill(null),
    //         xIsNext : true,
    //     };
    // }
    
    
    // Game component로 이동
    // handleClick(i){
    //     //원본을 얕은복사해서 새로운 객체로 반환. 원본배열 바뀌지 않음~
    //     const squares = this.state.squares.slice();
    //     if (calculateWinner(squares) || this.state.squares[i]){
    //         return;
    //     }
    //     squares[i] = this.state.xIsNext ? 'X' : 'O';
    //         this.setState({
    //             squares : squares,
    //             xIsNext : !this.state.xIsNext,
    //     });
    // }

    renderSquare(i) {
      return (
        <Square 
            value={this.props.squares[i]}
            onClick={() => this.props.onClick(i)}
        />
        );
    }

    render(){
        // const winner = calculateWinner(this.state.squares);
        // let status;
        // if(winner){
        //     status = `Winner : ${winner}`;
        // }else {
        //     status = `Next Player : ${this.state.xIsNext ? 'X' : 'O'}`;
        // }

        return (
            <div>
                {/* <div className='status'>{status}</div> */}
                <div className='borad-row'>
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className='borad-row'>
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className='borad-row'>
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
        );
    }
  }

