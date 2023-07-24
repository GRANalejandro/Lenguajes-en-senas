document.querySelector('.open-menul').addEventListener('click', () => {
    document.querySelector('.menul').classList.add('open-menul-flex');
    document.querySelector('.menul').classList.remove('close-menul-none');
});

document.querySelector('.close-menul').addEventListener('click', () => {
    document.querySelector('.menul').classList.add('close-menul-none');
    document.querySelector('.menul').classList.remove('open-menul-flex');
});