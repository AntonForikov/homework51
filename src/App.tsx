import {useState} from 'react';
import LotteryBall from './lottery_ball/lottery_ball';
import './App.css';

function App() {
  const [balls, setBalls] = useState(
    [5, 11, 16, 23, 32]
  )

  const newNumbers = () => {
    const numbersArr: number[] = [];
    for (let i = 0; i < 5; i++) {
      const num = Math.floor((Math.random() * 32) + 5);
      if (numbersArr.includes(num)) {
        i--;
      } else {
        numbersArr.push(num);
      }
    }
    numbersArr.sort((a, b) => a - b);

    setBalls(
      numbersArr
    )
  }

  return (
    <>
      <button onClick={newNumbers}>New numbers</button>
      <div className="balls">
        <LotteryBall number={balls[0]}></LotteryBall>
        <LotteryBall number={balls[1]}></LotteryBall>
        <LotteryBall number={balls[2]}></LotteryBall>
        <LotteryBall number={balls[3]}></LotteryBall>
        <LotteryBall number={balls[4]}></LotteryBall>
      </div>
    </>
  )
}

export default App
