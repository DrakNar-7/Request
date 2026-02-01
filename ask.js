const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const quizBox = document.getElementById('quiz-box');
const successMessage = document.getElementById('success-message');

// When she says Yes
yesBtn.addEventListener('click', () => {
    quizBox.classList.add('hidden');
    successMessage.classList.remove('hidden');
    document.getElementById('notifyForm').submit();
});

// The "Runaway" No Button logic
noBtn.addEventListener('mouseover', () => {
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
    
    noBtn.style.position = 'absolute';
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
});