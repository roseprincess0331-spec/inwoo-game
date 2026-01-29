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

    const text = textarea.value;

    if (!text.trim()) {
        alert("내용을 입력해주세요!");
        return;
    }

    // --- EmailJS 전송 부분 ---
    // 'YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID'
    const templateParams = {
        message: text, 
    };

    emailjs.send('service_urpr6ox', 'template_22rrawq', templateParams)
        .then(function(response) {
            // 성공했을 때 뜨는 메시지 (수정됨)
            alert('피드백 감사합니다. 💖\n인우에게 전달되었습니다.');
            textarea.value = ''; // 텍스트 영역 비우기
            counter.textContent = 0; // 글자 수 초기화
        }, function(error) {
            console.log('FAILED...', error);
            alert("전송에 실패했습니다. 다시 시도해주세요.");
        });
}