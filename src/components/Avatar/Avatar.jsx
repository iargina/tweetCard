import css from './Avatar.module.css';

export const Avatar = ({ avatar }) => {
  return <img src={avatar} className={css.userBoy} alt="line" />;
};
