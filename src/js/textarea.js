const Textarea = {

    init() {
        let textarea = document.createElement('textarea');
        textarea.className = 'textarea';
        document.querySelector('.wrapper').append(textarea);
    }
};

export default Textarea;