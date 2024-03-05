import { memo } from 'react';
import './Score.css';

type Props = {
  score: number;
};

const Score: React.FC<Props> = ({ score }) => {
  return <div className="score">My score: {score}</div>;
};

export default memo(Score);
