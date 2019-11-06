const LANGUAGES = ['en', 'ru'];
const KEYS_CODE = [ {code:'Backquote',en:['`','~'],ru:['ё','Ё']},
    {code:'Digit1',en:['1','!'],ru:['1','!']},
    {code:'Digit2',en:['2','@'],ru:['2','"']},
    {code:'Digit3',en:['3','#'],ru:['3','№']},
    {code:'Digit4',en:['4','$'],ru:['4','%']},
    {code:'Digit5',en:['5','%'],ru:['5',':']},
    {code:'Digit6',en:['6','^'],ru:['6',',']},
    {code:'Digit7',en:['7','&'],ru:['7','.']},
    {code:'Digit8',en:['8','*'],ru:['8',';']},
    {code:'Digit9',en:['9','('],ru:['9','(']},
    {code:'Digit0',en:['0',')'],ru:['0',')']},
    {code:'Minus',en:['-','_'],ru:['-','_']},
    {code:'Equal',en:['=','+'],ru:['=','+']},
    {code:'Backspace',en:['delete','delete'],ru:['delete','delete']},
    {code:'Tab',en:['tab','tab'],ru:['tab','tab']},
    {code:'KeyQ',en:['q','Q'],ru:['й','Й']},
    {code:'KeyW',en:['w','W'],ru:['ц','Ц']},
    {code:'KeyE',en:['e','E'],ru:['у','У']},
    {code:'KeyR',en:['r','R'],ru:['к','К']},
    {code:'KeyT',en:['t','T'],ru:['е','Е']},
    {code:'KeyY',en:['y','Y'],ru:['н','Н']},
    {code:'KeyU',en:['u','U'],ru:['г','Г']},
    {code:'KeyI',en:['i','I'],ru:['ш','Ш']},
    {code:'KeyO',en:['o','O'],ru:['щ','Щ']},
    {code:'KeyP',en:['p','P'],ru:['з','З']},
    {code:'BracketLeft',en:['[','{'],ru:['х','Х']},
    {code:'BracketRight',en:[']','}'],ru:['ъ','Ъ']},
    {code:'Backslash',en:['\\','|'],ru:['\\','/']},
    {code:'CapsLock',en:['caps lock','caps lock'],ru:['caps lock','caps lock']},
    {code:'KeyA',en:['a','A'],ru:['ф','Ф']},
    {code:'KeyS',en:['s','S'],ru:['ы','Ы']},
    {code:'KeyD',en:['d','D'],ru:['в','В']},
    {code:'KeyF',en:['f','F'],ru:['а','А']},
    {code:'KeyG',en:['g','G'],ru:['п','П']},
    {code:'KeyH',en:['h','H'],ru:['р','Р']},
    {code:'KeyJ',en:['j','J'],ru:['о','О']},
    {code:'KeyK',en:['k','K'],ru:['л','Л']},
    {code:'KeyL',en:['l','L'],ru:['д','Д']},
    {code:'Semicolon',en:[';',':'],ru:['ж','Ж']},
    {code:'Quote',en:['\'','"'],ru:['э','Э']},
    {code:'Enter',en:['enter','enter'],ru:['enter','enter']},
    {code:'ShiftLeft',en:['shift','shift'],ru:['shift','shift']},
    {code:'KeyZ',en:['z','Z'],ru:['я','Я']},
    {code:'KeyX',en:['x','X'],ru:['ч','Ч']},
    {code:'KeyC',en:['c','C'],ru:['с','С']},
    {code:'KeyV',en:['v','V'],ru:['м','М']},
    {code:'KeyB',en:['b','B'],ru:['и','И']},
    {code:'KeyN',en:['n','N'],ru:['т','Т']},
    {code:'KeyM',en:['m','M'],ru:['ь','Ь']},
    {code:'Comma',en:[',','<'],ru:['б','Б']},
    {code:'Period',en:['.','>'],ru:['ю','Ю']},
    {code:'Slash',en:['/','?'],ru:['/','?']},
    {code:'ArrowUp',en:['^|','^|'],ru:['^|','^|']},
    {code:'ShiftRight',en:['shift','shift'],ru:['shift','shift']},
    {code:'ControlLeft',en:['ctrl','ctrl'],ru:['ctrl','ctrl']},
    {code:'AltLeft',en:['alt','alt'],ru:['alt','alt']},
    {code:'MetaLeft',en:['command','command'],ru:['command','command']},
    {code:'Space',en:[' ',' '],ru:[' ',' ']},
    {code:'MetaRight',en:['command','command'],ru:['command','command']},
    {code:'AltRight',en:['alt','alt'],ru:['alt','alt']},
    {code:'ArrowLeft',en:['<-','<-'],ru:['<-','<-']},
    {code:'ArrowDown',en:['|','|'],ru:['|','|']},
    {code:'ArrowRight',en:['->','->'],ru:['->','->']},
    {code: 'ControlRight',en:['ctrl','ctrl'],ru:['ctrl','ctrl']} ];

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

        return KEYS_CODE.map(key => {
            if (key.code === 'Backquote' || key.code === 'Tab' || key.code === 'CapsLock' || key.code === 'ShiftLeft' || key.code === 'ControlLeft') {
                row = document.createElement('div');
                row.classList.add('row');
            }

            let button = document.createElement('button');
            button.setAttribute('type','button');
            button.setAttribute('id',key.code);
            button.classList.add('key');
            button.innerHTML = key[label][0];

            if (key.code === 'Backspace' || key.code === 'Tab' || key.code === 'CapsLock' || key.code === 'Enter' || key.code === 'ShiftLeft' || key.code === 'ShiftRight' || key.code === 'AltLeft' || key.code === 'AltRight') {
                button.classList.add('key--wide');
            }

            switch (key.code) {
                case 'Backspace':
                    this.properties.capsLock = !this.properties.capsLock;
                    button.addEventListener('click', () => {
                        this.properties.value = this.properties.value.substring(0, this.properties.value.length - 1);
                    });
                    break;

                case 'Tab':
                    this.properties.value += '  ';
                    break;

                case 'CapsLock':
                    button.addEventListener('click', () => {
                        this.properties.capsLock = !this.properties.capsLock;
                        this.toggleKeysValue(this.properties.capsLock ? 1 : 0);
                        document.getElementById(key.code).classList.toggle('press', this.properties.capsLock);
                    });
                    break;

                case 'Enter':
                    button.addEventListener('click', () => {
                        this.properties.value += '\n';
                    });
                    break;

                case 'ShiftLeft':
                case 'ShiftRight':
                    if (this.properties.alt) this.toggleLanguage();
                    else this.toggleKeysValue(1);
                    break;

                case 'Space':
                    button.classList.add('key--space');
                    this.properties.value += ' ';
                    break;

                default:
                    button.addEventListener('click', (event) => {
                        this.properties.value += event.target.innerHTML;
                        document.querySelector('.textarea').innerHTML = this.properties.value;
                    });
            }

            button.addEventListener('mousedown', () => {
                if (key.code !== 'CapsLock') button.classList.add('press');
            });

            button.addEventListener('mouseup', () => {
                if (key.code !== 'CapsLock') button.classList.remove('press');
            });

            row.append(button);
            return row;
        });

    },

    keyboardEvents() {
        document.addEventListener('keydown', (event) => {
            this.properties.shift = event.shiftKey;
            this.properties.alt = event.altKey;

            switch (event.code) {
                case 'CapsLock':
                    this.properties.capsLock = !this.properties.capsLock;
                    this.toggleKeysValue(this.properties.capsLock ? 1 : 0);
                    document.getElementById(event.code).classList.toggle('press', this.properties.capsLock);
                    break;

                case 'ShiftLeft':
                case 'ShiftRight':
                    if (this.properties.alt) this.toggleLanguage();
                    this.toggleKeysValue(1);
                    break;
                default:
                    this.setFocus();
            }

            if (event.code !== 'CapsLock') document.getElementById(event.code).classList.add('press');
        });

        document.addEventListener('keyup', (event) => {
            this.properties.shift = event.shiftKey;
            this.properties.alt = event.altKey;

            switch (event.code) {
                case 'ShiftLeft':
                case 'ShiftRight':
                    if (this.properties.alt) this.toggleLanguage();
                    else this.toggleKeysValue(0);
                    break;
            }

            if (event.code !== 'CapsLock')  document.getElementById(event.code).classList.remove('press');
        });
    },

    toggleKeysValue(key) {
        document.querySelectorAll('.key').forEach((el, i) => {
            el.innerHTML = KEYS_CODE[i][`${this.properties.language}`][key];
        })
    },

    toggleLanguage() {
        this.properties.language = (this.properties.language === 'en') ? 'ru' : 'en';
    },

    setFocus() {
        document.querySelector('.textarea').focus();
    },

    init() {
        let keyboard = document.createElement('div');
        keyboard.className = 'keyboard';
        keyboard.append(...this.createKeys(this.properties.language));
        this.keyboardEvents();

        document.querySelector('.wrapper').append(keyboard);
    }
};

export {Keyboard};