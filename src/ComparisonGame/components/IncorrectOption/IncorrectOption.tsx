import { memo, useCallback } from 'react';
import './IncorrectOption.css';
import { useActiveOption } from '../../../ComparisonGame/hooks/ActiveOption';

type Props = {
  src: string;
  order: number;
  onSelected: () => void;
  disabled: boolean;
};

const IncorrectOption: React.FC<Props> = ({
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
      className={
        isActive ? 'incorrect-option incorrect-active' : 'incorrect-option'
      }
      style={{ order }}
      disabled={disabled}
    >
      <img src={src} />
    </button>
  );
};

export default memo(IncorrectOption);
