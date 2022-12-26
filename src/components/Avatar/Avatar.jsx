import css from './Avatar.module.css';
import boy from '../../images/boy.png';

export const Avatar = () => {
  return <img src={boy} className={css.userBoy} alt="line" />;
};
