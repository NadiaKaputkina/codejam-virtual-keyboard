const Textarea = {
  init() {
    const textarea = document.createElement('textarea');
    textarea.className = 'textarea';
    document.querySelector('.wrapper').append(textarea);
  },
};

export default Textarea;
