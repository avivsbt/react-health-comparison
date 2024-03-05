import { useCallback, useState } from 'react';

type ActiveOption = {
  isActive: boolean;
  handleClickActive: () => void;
};

export const useActiveOption = (): ActiveOption => {
  const [isActive, setIsActive] = useState<boolean>(false);

  const handleClickActive = useCallback(() => {
    setIsActive(true);
    setTimeout(() => setIsActive(false), 2000);
  }, []);

  return { isActive, handleClickActive };
};
