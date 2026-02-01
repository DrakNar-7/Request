// Get all the elements we need
const yesBtn = document.getElementById('yesBtn');
const noBtn  = document.getElementById('noBtn');
const quizBox = document.getElementById('quiz-box');
const successMessage = document.getElementById('success-message');

// YES button logic
yesBtn.addEventListener('click', () => {
    // 1. Hide the question box and show success message
    quizBox.style.display = 'none';
    successMessage.classList.remove('hidden');
    // or if you prefer: successMessage.style.display = 'block';

    // 2. Send notification to Formspree silently (in background)
    fetch("https://formspree.io/f/xgozkgaz", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            message: "She said YES! 🎉 Time to prepare for the date!"
            // you can add more fields if you want:
            // name: "Your Name",
            // timestamp: new Date().toISOString()
        })
    })
    .then(response => {
        if (response.ok) {
            console.log("Notification sent successfully!");
        } else {
            console.log("Formspree error:", response.status);
        }
    })
    .catch(error => {
        console.log("Failed to send notification (but she said yes anyway!)", error);
    });
});

// NO button logic – makes the button run away
noBtn.addEventListener('mouseover', () => {
    // Calculate safe random position (stays inside window)
    const maxX = window.innerWidth - noBtn.offsetWidth - 20;
    const maxY = window.innerHeight - noBtn.offsetHeight - 20;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    // Move the button
    noBtn.style.position = 'absolute';
    noBtn.style.left = randomX + 'px';
    noBtn.style.top  = randomY + 'px';
});

// Bonus: also move when someone tries to click it
noBtn.addEventListener('click', (e) => {
    e.preventDefault();           // prevent any default action
    noBtn.dispatchEvent(new MouseEvent('mouseover'));  // trigger movement
});