import '../sass/main.scss';
import Textarea from './textarea';
import Keyboard from './keyboard';

window.onload = () => {
  const wrapper = document.createElement('div');
  wrapper.className = 'wrapper';
  document.body.append(wrapper);

  Textarea.init();
  Keyboard.init();
};
