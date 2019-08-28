import Footer from './components/footer';
import Header from './components/header';
import Images from './components/images';
import './style.css';

window.addEventListener('load', () => {
  const footer = new Footer('footer');
  const header = new Header('header');

  header.render();
  footer.render({copyright: 'passed value - Copyright 2018'});

  document
      .querySelector('[name="get-images"]')
      .addEventListener('click', () => {
        new Images({
          parentElement: 'main',
        });
      });
});
