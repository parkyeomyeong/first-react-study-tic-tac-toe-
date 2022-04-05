import React from 'react';

// class component정의 말고 function component로 정의해서 아래는 주석 처리
// export default class Square extends React.Component{

//     // 상위 컴포넌에서 props를 넘겨받는 방식으로 변경했기 때문에 state가 필요없으므로 주석처리
//     // constructor(props){
//     //     //js class에서 하위 클래스의 생성자를 정의할 때
//     //     // 항상 super를 호출해야 함. 
//     //     // 모든 react 컴포넌트 class는 생성자를 가질때
//     //     // super(props) 호출 구문부터 작성해야 함
//     //     super(props);
//     //     this.state = {
//     //         value : null,
//     //     };
//     // }

//     render(){
//         return (
//             <button 
//                 className='square'
//                 // arrow 함수안에 또 arrow 함수를 넣는격인데? 뭐지?
//                 onClick={() => this.props.onClick()}
//             >
//                 {this.props.value}
//             </button>
//         );
//     }
// }

export default function Square(props){
    return (
        <button className='Square' onClick={props.onClick}>
            {props.value}
        </button>
    );
}