const form = document.querySelector('form');
const btnClear = document.querySelector('.btn-light');

btnClear.addEventListener('click', function () {
    form.reset();
});