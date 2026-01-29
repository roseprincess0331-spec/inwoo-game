function showPage(pageId) {
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => page.classList.remove('active'));

    const targetPage = document.getElementById(pageId);
    if (targetPage) {
        targetPage.classList.add('active');
    }

    const header = document.getElementById('game-header');
    const title = document.getElementById('game-title');

    const hideHeaderPages = [
        'page-start',
        'page-success',
        'page-fail'
    ];


    if (hideHeaderPages.includes(pageId)) {
        header.classList.add('hidden');
        return;
    } else {
        header.classList.remove('hidden');
    }


    const tmiPages = ['page-quiz-3', 'page-quiz-4', 'page-quiz-5'];


    if (tmiPages.includes(pageId)) {
        title.innerText = '인우의 TMI 맞추기';
    } else {
        title.innerText = '인우의 취향 맞추기';
    }
}

window.onload = function () {
    showPage('page-start');

    const title = document.getElementById('game-title');
    if (title) {
        title.innerText = '인우의 취향 맞추기';
    }
};

const textarea = document.querySelector('.feedback-form textarea');
const counter = document.getElementById('current-count');

textarea.addEventListener('input', () => {
    const length = textarea.value.length;
    counter.textContent = length;


    counter.style.color = length > 280 ? '#e74c3c' : '#999';
});

function submitFeedback(e) {
    e.preventDefault();


    const text = e.target.querySelector('textarea').value;


    alert('피드백 감사합니다 💖\n\n"' + text + '"');


    e.target.reset();
}
