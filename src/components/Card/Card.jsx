import css from './Card.module.css';
import { Button } from '../Button/Button';
import { UserStat } from '../UserStat/UserStat';
import { Line } from '../Line/Line';
import { Avatar } from '../Avatar/Avatar';
import { UserWrap } from '../UserWrap/UserWrap';
import { ImageBlock } from '../ImageBlock/ImageBlock';

export const Card = ({ users, onClick }) => {
  return users.map(user => {
    return (
      <div className={css.cardWrap} key={user.id}>
        <ImageBlock />
        <UserWrap>
          <Line />
          <Avatar avatar={user.avatar} />
          <UserStat tweets={user.tweets} followers={user.followers} />
          <Button onClick={() => onClick(user.id)} following={user.following} />
        </UserWrap>
      </div>
    );
  });
};
