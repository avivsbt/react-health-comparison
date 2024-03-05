import { memo, useCallback, useEffect, useMemo, useState } from 'react';
import WrapperOptions from '../ComparisonGame/components/WrapperOptions /WrapperOptions';
import CorrectOption from '../ComparisonGame/components/CorrectOption/CorrectOption';
import IncorrectOption from '../ComparisonGame/components/IncorrectOption/IncorrectOption';
import { getHealthyFood, getUnHealthyFood } from '../api';
import Score from '../ComparisonGame/components/Score/Score';
import { randomZeroOrOne } from '../util';
import Reset from '../ComparisonGame/components/Reset/Reset';
import Loading from '../ComparisonGame/components/Loading/Loading';

const ComparisonGame: React.FC = () => {
  const [healthyFood, setHealthyFood] = useState<Array<string>>([]);
  const [unHealthyFood, setUnHealthyFood] = useState<Array<string>>([]);
  const [score, setScore] = useState<number>(0);
  const [orderOptions, setOrderOptions] = useState<number>(randomZeroOrOne());
  const [isDisabled, setDisabled] = useState<boolean>(false);

  const isLoaded: boolean = useMemo(
    () => !(healthyFood.length && unHealthyFood.length),
    [healthyFood, unHealthyFood]
  );

  const fetchHealthyFood = useCallback(async () => {
    try {
      const next = await getHealthyFood();
      setHealthyFood((prev) => [...prev, next]);
    } catch (err) {
      console.error('Error:', err);
    }
  }, [getHealthyFood]);

  const fetchUnHealthyFood = useCallback(async () => {
    try {
      const next = await getUnHealthyFood();
      setUnHealthyFood((prev) => [...prev, next]);
    } catch (err) {
      console.error('Error:', err);
    }
  }, [getHealthyFood]);

  const onSelected = useCallback(() => {
    setDisabled(true);
    setTimeout(() => {
      setUnHealthyFood((prev) => prev.slice(1));
      setHealthyFood((prev) => prev.slice(1));
      setOrderOptions(randomZeroOrOne());
      setDisabled(false);
    }, 2000);
  }, []);

  const onCorrectOption = useCallback(() => {
    onSelected();
    setScore((prev) => prev + 1);
  }, [onSelected]);

  const onReset = useCallback(() => {
    setUnHealthyFood([]);
    setHealthyFood([]);
    setOrderOptions(0);
    setDisabled(false);
    setScore(0);
  }, []);

  useEffect(() => {
    let ignore = false;
    if (healthyFood.length < 2) {
      !ignore && fetchHealthyFood();
    }
    return () => {
      ignore = true;
    };
  }, [healthyFood]);

  useEffect(() => {
    let ignore = false;
    if (unHealthyFood.length < 2) {
      !ignore && fetchUnHealthyFood();
    }
    return () => {
      ignore = true;
    };
  }, [unHealthyFood]);

  return (
    <>
      {isLoaded ? (
        <Loading />
      ) : (
        <>
          <WrapperOptions>
            <CorrectOption
              src={healthyFood[0]}
              onSelected={onCorrectOption}
              order={!orderOptions ? 1 : 0}
              disabled={isDisabled}
            />
            <IncorrectOption
              src={unHealthyFood[0]}
              onSelected={onSelected}
              order={!orderOptions ? 0 : 1}
              disabled={isDisabled}
            />
          </WrapperOptions>
          <Score score={score} />
          <Reset onReset={onReset} />
        </>
      )}
    </>
  );
};

export default memo(ComparisonGame);
