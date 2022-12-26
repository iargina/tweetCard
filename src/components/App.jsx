import { Component } from 'react';
import { Button } from './Button/Button';
import { UserStat } from './UserStat/UserStat';
import { Line } from './Line/Line';
import { Avatar } from './Avatar/Avatar';
import { UserWrap } from './UserWrap/UserWrap';
import { Container } from './Container/Container';
import { Card } from './Card/Card';
import { ImageBlock } from './ImageBlock/ImageBlock';
export class App extends Component {
  state = {
    tweets: 777,
    followers: 100500,
    following: false,
  };
  onClick = () => {
    this.setState(prevState => {
      return {
        followers: prevState.following
          ? prevState.followers - 1
          : prevState.followers + 1,
        following: !prevState.following,
      };
    });
  };

  render() {
    const { tweets, followers, following } = this.state;
    return (
      <Container>
        <Card>
          <ImageBlock />
          <UserWrap>
            <Line />
            <Avatar />
            <UserStat tweets={tweets} followers={followers} />
            <Button onClick={this.onClick} following={following} />
          </UserWrap>
        </Card>
      </Container>
    );
  }
}
