import css from './Card.module.css';

export const Card = ({ children }) => {
  return <div className={css.cardWrap}>{children}</div>;
};
