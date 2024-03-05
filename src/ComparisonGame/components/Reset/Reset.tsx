import { memo } from 'react';
import './Reset.css';

type Props = {
  onReset: () => void;
};

const Reset: React.FC<Props> = ({ onReset }) => {
  return (
    <button className="reset" onClick={onReset}>
      Reset
    </button>
  );
};

export default memo(Reset);
