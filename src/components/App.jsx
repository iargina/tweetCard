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
    following: null,
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

  componentDidMount = () => {
    const followingStatus = localStorage.getItem('followingStatus');
    const followers = localStorage.getItem('Followers');
    if (!followers) {
      return;
    }
    this.setState({
      following: JSON.parse(followingStatus),
      followers: JSON.parse(followers),
    });
  };

  componentDidUpdate = (_, prevState) => {
    if (prevState.following !== this.state.following) {
      localStorage.setItem(
        'followingStatus',
        JSON.stringify(this.state.following)
      );
      localStorage.setItem('Followers', JSON.stringify(this.state.followers));
    }
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
