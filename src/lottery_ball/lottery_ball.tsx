import React from 'react';
import '../App.css'

interface Props {
  number: number;
}

const LotteryBall: React.FC<Props> = ({number}) => {
  return (
    <div className='ball'>
      {number}
    </div>
  );
}

export default LotteryBall;