import css from './UserStat.module.css';
import PropTypes from 'prop-types';

export const UserStat = ({ followers, tweets }) => {
  return (
    <ul className={css.userTextWrap}>
      <li className={css.userText}> {tweets} tweets</li>
      <li className={css.userText}>
        {followers.toLocaleString('en-US')} Followers
      </li>
    </ul>
  );
};
UserStat.propTypes = {
  followers: PropTypes.number.isRequired,
  tweets: PropTypes.number.isRequired,
};
