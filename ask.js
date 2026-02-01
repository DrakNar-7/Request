const yesBtn = document.getElementById('yesBtn');
const quizBox = document.getElementById('quiz-box');
const successMessage = document.getElementById('success-message');

yesBtn.addEventListener('click', () => {
    // 1. Immediately show your custom success message
    quizBox.style.display = 'none';
    successMessage.classList.remove('hidden');

    // 2. Send the notification to Formspree SILENTLY in the background
    fetch("https://formspree.io/f/your-unique-id", {
        method: "POST",
        body: JSON.stringify({ message: "She said YES! Time to prepare for the date." }),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    }).then(response => {
        console.log("Notification sent!");
    }).catch(error => {
        console.log("Error sending notification, but she doesn't know!");
    });
});
// The "Runaway" No Button logic
noBtn.addEventListener('mouseover', () => {
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
    
    noBtn.style.position = 'absolute';
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
});