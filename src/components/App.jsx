import { Component } from 'react';
import css from './App.module.css';
export class App extends Component {
  render() {
    return (
      <div className={css.cardWrap}>
        <div className={css.imageWrap}>
          <img
            src="images/background.png"
            className={css.backgroundImage}
            alt="background"
          />
          <img src="images/logo.png" />
        </div>
      </div>
    );
  }
}
