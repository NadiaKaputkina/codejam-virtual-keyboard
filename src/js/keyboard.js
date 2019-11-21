const KEYS_CODE = [{ code: 'Backquote', en: ['`', '~'], ru: ['ё', 'Ё'] },
  { code: 'Digit1', en: ['1', '!'], ru: ['1', '!'] },
  { code: 'Digit2', en: ['2', '@'], ru: ['2', '"'] },
  { code: 'Digit3', en: ['3', '#'], ru: ['3', '№'] },
  { code: 'Digit4', en: ['4', '$'], ru: ['4', '%'] },
  { code: 'Digit5', en: ['5', '%'], ru: ['5', ':'] },
  { code: 'Digit6', en: ['6', '^'], ru: ['6', ','] },
  { code: 'Digit7', en: ['7', '&'], ru: ['7', '.'] },
  { code: 'Digit8', en: ['8', '*'], ru: ['8', ';'] },
  { code: 'Digit9', en: ['9', '('], ru: ['9', '('] },
  { code: 'Digit0', en: ['0', ')'], ru: ['0', ')'] },
  { code: 'Minus', en: ['-', '_'], ru: ['-', '_'] },
  { code: 'Equal', en: ['=', '+'], ru: ['=', '+'] },
  { code: 'Backspace', en: ['delete', 'delete'], ru: ['delete', 'delete'] },
  { code: 'Tab', en: ['tab', 'tab'], ru: ['tab', 'tab'] },
  { code: 'KeyQ', en: ['q', 'Q'], ru: ['й', 'Й'] },
  { code: 'KeyW', en: ['w', 'W'], ru: ['ц', 'Ц'] },
  { code: 'KeyE', en: ['e', 'E'], ru: ['у', 'У'] },
  { code: 'KeyR', en: ['r', 'R'], ru: ['к', 'К'] },
  { code: 'KeyT', en: ['t', 'T'], ru: ['е', 'Е'] },
  { code: 'KeyY', en: ['y', 'Y'], ru: ['н', 'Н'] },
  { code: 'KeyU', en: ['u', 'U'], ru: ['г', 'Г'] },
  { code: 'KeyI', en: ['i', 'I'], ru: ['ш', 'Ш'] },
  { code: 'KeyO', en: ['o', 'O'], ru: ['щ', 'Щ'] },
  { code: 'KeyP', en: ['p', 'P'], ru: ['з', 'З'] },
  { code: 'BracketLeft', en: ['[', '{'], ru: ['х', 'Х'] },
  { code: 'BracketRight', en: [']', '}'], ru: ['ъ', 'Ъ'] },
  { code: 'Backslash', en: ['\\', '|'], ru: ['\\', '/'] },
  { code: 'CapsLock', en: ['caps lock', 'caps lock'], ru: ['caps lock', 'caps lock'] },
  { code: 'KeyA', en: ['a', 'A'], ru: ['ф', 'Ф'] },
  { code: 'KeyS', en: ['s', 'S'], ru: ['ы', 'Ы'] },
  { code: 'KeyD', en: ['d', 'D'], ru: ['в', 'В'] },
  { code: 'KeyF', en: ['f', 'F'], ru: ['а', 'А'] },
  { code: 'KeyG', en: ['g', 'G'], ru: ['п', 'П'] },
  { code: 'KeyH', en: ['h', 'H'], ru: ['р', 'Р'] },
  { code: 'KeyJ', en: ['j', 'J'], ru: ['о', 'О'] },
  { code: 'KeyK', en: ['k', 'K'], ru: ['л', 'Л'] },
  { code: 'KeyL', en: ['l', 'L'], ru: ['д', 'Д'] },
  { code: 'Semicolon', en: [';', ':'], ru: ['ж', 'Ж'] },
  { code: 'Quote', en: ['\'', '"'], ru: ['э', 'Э'] },
  { code: 'Enter', en: ['enter', 'enter'], ru: ['enter', 'enter'] },
  { code: 'ShiftLeft', en: ['shift', 'shift'], ru: ['shift', 'shift'] },
  { code: 'KeyZ', en: ['z', 'Z'], ru: ['я', 'Я'] },
  { code: 'KeyX', en: ['x', 'X'], ru: ['ч', 'Ч'] },
  { code: 'KeyC', en: ['c', 'C'], ru: ['с', 'С'] },
  { code: 'KeyV', en: ['v', 'V'], ru: ['м', 'М'] },
  { code: 'KeyB', en: ['b', 'B'], ru: ['и', 'И'] },
  { code: 'KeyN', en: ['n', 'N'], ru: ['т', 'Т'] },
  { code: 'KeyM', en: ['m', 'M'], ru: ['ь', 'Ь'] },
  { code: 'Comma', en: [',', '<'], ru: ['б', 'Б'] },
  { code: 'Period', en: ['.', '>'], ru: ['ю', 'Ю'] },
  { code: 'Slash', en: ['/', '?'], ru: ['/', '?'] },
  { code: 'ArrowUp', en: ['', ''], ru: ['', ''] },
  { code: 'ShiftRight', en: ['shift', 'shift'], ru: ['shift', 'shift'] },
  { code: 'ControlLeft', en: ['ctrl', 'ctrl'], ru: ['ctrl', 'ctrl'] },
  { code: 'AltLeft', en: ['alt', 'alt'], ru: ['alt', 'alt'] },
  { code: 'MetaLeft', en: ['', ''], ru: ['', ''] },
  { code: 'Space', en: [' ', ' '], ru: [' ', ' '] },
  { code: 'MetaRight', en: ['', ''], ru: ['', ''] },
  { code: 'AltRight', en: ['alt', 'alt'], ru: ['alt', 'alt'] },
  { code: 'ArrowLeft', en: ['', ''], ru: ['', ''] },
  { code: 'ArrowDown', en: ['', ''], ru: ['', ''] },
  { code: 'ArrowRight', en: ['', ''], ru: ['', ''] },
  { code: 'ControlRight', en: ['ctrl', 'ctrl'], ru: ['ctrl', 'ctrl'] }];

const Keyboard = {
  properties: {
    language: 'en',
    value: '',
    capsLock: false,
    shift: false,
    alt: false,
  },

  createKeys(label) {
    let row = null;

    return KEYS_CODE.map((key) => {
      const button = document.createElement('button');
      button.setAttribute('type', 'button');
      button.setAttribute('id', key.code);
      button.classList.add('key');
      button.innerHTML = key[label][0];

      const createNewRow = () => {
        row = document.createElement('div');
        row.classList.add('row');
      };

      const keysForNewRow = ['Backquote', 'Tab', 'CapsLock', 'ShiftLeft', 'ControlLeft'];
      if (keysForNewRow.includes(key.code)) createNewRow();

      const classForKeys = [{ code: 'ArrowUp', class: 'icon-up-dir' },
        { code: 'ArrowLeft', class: 'icon-left-dir' },
        { code: 'ArrowDown', class: 'icon-down-dir' },
        { code: 'ArrowRight', class: 'icon-right-dir' },
        { code: 'MetaLeft', class: 'icon-windows' },
        { code: 'MetaRight', class: 'icon-windows' },
        { code: 'AltLeft', class: 'key--wide' },
        { code: 'AltRight', class: 'key--wide' },
        { code: 'Backspace', class: 'key--wide' },
        { code: 'Tab', class: 'key--wide' },
        { code: 'CapsLock', class: 'key--wide' },
        { code: 'Enter', class: 'key--wide' },
        { code: 'ShiftLeft', class: 'key--wide' },
        { code: 'ShiftRight', class: 'key--wide' },
        { code: 'Space', class: 'key--double-wide' }];

      classForKeys.forEach((item) => {
        if (key.code === item.code) button.classList.add(item.class);
      });

      row.append(button);
      return row;
    });
  },

  mouseEvents() {
    document.addEventListener('mousedown', (e) => {
      const elem = e.target;
      if (elem.classList.contains('key') && elem.id !== 'CapsLock') elem.classList.add('press');
    });

    document.addEventListener('mouseup', (e) => {
      const elem = e.target;
      if (elem.classList.contains('key') && elem.id !== 'CapsLock') elem.classList.remove('press');
    });

    document.addEventListener('click', (e) => {
      const elem = e.target;
      if (elem.classList.contains('key')) {
        switch (elem.id) {
          case 'Backspace':
            this.properties.capsLock = !this.properties.capsLock;
            this.properties.value = this.properties.value.substring(0, this.properties.value.length - 1);
            break;

          case 'Tab':
            this.properties.value += '  ';
            break;

          case 'CapsLock':
            this.properties.capsLock = !this.properties.capsLock;
            this.toggleKeysValue(+this.properties.capsLock);
            elem.classList.toggle('press', this.properties.capsLock);
            break;

          case 'Enter':
            this.properties.value += '\n';
            break;

          case 'ShiftLeft':
          case 'ShiftRight':
            if (this.properties.alt) this.toggleLanguage();
            else this.toggleKeysValue(1);
            break;

          case 'Space':
            this.properties.value += ' ';
            break;

          default:
            this.properties.value += elem.textContent;
        }

        document.querySelector('.textarea').value = this.properties.value;
      }
    });
  },

  keyboardEvents() {
    document.addEventListener('keydown', (e) => {
      this.properties.shift = e.shiftKey;
      this.properties.alt = e.altKey;

      switch (e.code) {
        case 'CapsLock':
          this.properties.capsLock = !this.properties.capsLock;
          this.toggleKeysValue(+this.properties.capsLock);
          document.getElementById(e.code).classList.toggle('press', this.properties.capsLock);
          break;

        case 'ShiftLeft':
        case 'ShiftRight':
          if (this.properties.alt) this.toggleLanguage();
          this.toggleKeysValue(1);
          break;

        default:
          this.setFocus();
      }

      if (e.code !== 'CapsLock') {
        document.getElementById(e.code).classList.add('press');
      }
    });

    document.addEventListener('keyup', (e) => {
      this.properties.shift = e.shiftKey;
      this.properties.alt = e.altKey;

      switch (e.code) {
        case 'ShiftLeft':
        case 'ShiftRight':
          if (this.properties.alt) this.toggleLanguage();
          else this.toggleKeysValue(0);
          break;
        default:
      }

      if (e.code !== 'CapsLock') {
        document.getElementById(e.code).classList.remove('press');
      }
    });
  },

  toggleKeysValue(key) {
    document.querySelectorAll('.key').forEach((item, i) => {
      item.innerHTML = KEYS_CODE[i][`${this.properties.language}`][key];
    });
  },

  toggleLanguage() {
    this.properties.language = (this.properties.language === 'en') ? 'ru' : 'en';
  },

  setFocus() {
    document.querySelector('.textarea').focus();
  },

  init() {
    const keyboard = document.createElement('div');
    keyboard.className = 'keyboard';

    this.createKeys(this.properties.language).forEach((node) => {
      keyboard.append(node);
    });
    this.mouseEvents();
    this.keyboardEvents();

    document.querySelector('.wrapper').append(keyboard);
  },
};

export default Keyboard;
