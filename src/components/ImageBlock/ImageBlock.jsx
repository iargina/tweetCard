import css from './ImageBlock.module.css';
import background from '../../images/background.png';
import logo from '../../images/logo.png';

export const ImageBlock = () => {
  return (
    <div className={css.imageWrap}>
      <img src={background} className={css.backgroundImage} alt="background" />
      <img src={logo} className={css.logo} alt="logo" />
    </div>
  );
};
