import css from './UserStat.module.css';

export const UserStat = ({ followers, tweets }) => {
  return (
    <div className={css.userTextWrap}>
      <p className={css.userText}> {tweets} tweets</p>
      <p className={css.userText}>
        {followers.toLocaleString('en-US')} Followers
      </p>
    </div>
  );
};
