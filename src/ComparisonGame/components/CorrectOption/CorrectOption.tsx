import { memo, useCallback } from 'react';
import { useActiveOption } from '../../../ComparisonGame/hooks/ActiveOption';
import './CorrectOption.css';

type Props = {
  src: string;
  order: number;
  onSelected: () => void;
  disabled: boolean;
};

const CorrectOption: React.FC<Props> = ({
  src,
  order,
  onSelected,
  disabled,
}) => {
  const { isActive, handleClickActive } = useActiveOption();

  const handleClick = useCallback(() => {
    onSelected();
    handleClickActive();
  }, []);

  return (
    <button
      onClick={handleClick}
      className={isActive ? 'correct-option correct-active' : 'correct-option'}
      style={{ order }}
      disabled={disabled}
    >
      <img src={src} />
    </button>
  );
};

export default memo(CorrectOption);
