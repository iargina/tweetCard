import css from './Button.module.css';
import { Component } from 'react';

export class Button extends Component {
  state = {
    followingOption: null,
  };

  static getDerivedStateFromProps(props, state) {
    if (props.following !== state.followingOption) {
      return {
        followingOption: props.following,
      };
    }
    return null;
  }

  onClick = () => {
    const { following, onClick } = this.props;
    onClick();
    this.setState({
      followingOption: !following,
    });
  };

  render() {
    const { followingOption } = this.state;
    return (
      <button
        type="button"
        className={followingOption ? css.buttonFollowing : css.button}
        onClick={this.onClick}
      >
        {followingOption ? 'Following' : 'Follow'}
      </button>
    );
  }
}
