import { memo } from 'react';
import './WrapperOptions.css';

type Props = {
  children: React.ReactNode;
};

const WrapperOptions: React.FC<Props> = ({ children }) => {
  return <section className="wrapper">{children}</section>;
};

export default memo(WrapperOptions);
