import css from './Button.module.css';
import { Component } from 'react';
export class Button extends Component {
  state = {
    text: 'Follow',
    followingOption: false,
  };
  onClick = () => {
    const { following, onClick } = this.props;
    onClick();
    this.setState({
      followingOption: !following,
      text: !this.state.followingOption ? `Following` : 'Follow',
    });
  };

  render() {
    const { text, followingOption } = this.state;
    return (
      <button
        type="button"
        className={followingOption ? css.buttonFollowing : css.button}
        onClick={this.onClick}
      >
        {text}
      </button>
    );
  }
}
