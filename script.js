// =====================================
// MOBILE NAVIGATION
// =====================================

document.addEventListener("DOMContentLoaded", function () {

    const menuToggle = document.getElementById("menuToggle");
    const navMenu = document.getElementById("navMenu");

    if (menuToggle && navMenu) {
        menuToggle.addEventListener("click", function () {
            navMenu.classList.toggle("active");
        });

        navMenu.querySelectorAll("a").forEach(function (link) {
            link.addEventListener("click", function () {
                navMenu.classList.remove("active");
            });
        });
    }

    // =====================================
    // COPY EMAIL BUTTON
    // =====================================

    const copyEmailBtn = document.getElementById("copyEmailBtn");
    const copyStatus = document.getElementById("copyStatus");

    if (copyEmailBtn) {
        copyEmailBtn.addEventListener("click", async function () {
            const email = "kunalmane946@gmail.com";

            try {
                await navigator.clipboard.writeText(email);

                if (copyStatus) {
                    copyStatus.textContent = "Email copied successfully!";
                }
            } catch (error) {
                if (copyStatus) {
                    copyStatus.textContent =
                        "Please copy the email manually: " + email;
                }
            }
        });
    }

    // =====================================
    // VOICE ASSISTANT BUTTON
    // =====================================

    const speakButton = document.getElementById("speakButton");

    if (speakButton) {
        speakButton.addEventListener("click", startResumeAssistant);
    }

});


// =====================================
// RESUME VOICE ASSISTANT
// =====================================

function startResumeAssistant() {

    if (!("speechSynthesis" in window)) {
        alert("Sorry, your browser does not support text-to-speech.");
        return;
    }

    window.speechSynthesis.cancel();

    const resumeText = `
        Hello! Welcome to Kunal Mane's portfolio.

        Kunal Mane is an Electronics and Telecommunication Engineering graduate
        from Savitribai Phule Pune University.

        He completed his Bachelor of Engineering in 2026 with a CGPA of 7.53.

        He completed his diploma from Government Polytechnic Karad.

        His technical skills include Embedded C, C, Python, SQL,
        HTML, CSS, JavaScript, Power BI, Arduino, ESP32 and IoT.

        He has worked on a final year project titled
        AI and IoT Based Enemy Tank Detection and Protection System
        using Raspberry Pi 4B.

        He has also completed internships in PCB Designing,
        Power BI and Cloud Computing.

        He has an achievement in Microsoft Azure Fundamentals.

        Thank you for visiting Kunal Mane's portfolio.
        You can contact him through the contact section of this website.
    `;

    const speech = new SpeechSynthesisUtterance(resumeText);

    speech.lang = "en-IN";
    speech.rate = 0.9;
    speech.pitch = 1;
    speech.volume = 1;

    speech.onstart = function () {
        updateVoiceStatus("Assistant is speaking...");
    };

    speech.onend = function () {
        updateVoiceStatus("Assistant finished speaking.");
    };

    speech.onerror = function () {
        updateVoiceStatus("Voice assistant encountered an error.");
    };

    window.speechSynthesis.speak(speech);
}


// =====================================
// STOP VOICE ASSISTANT
// =====================================

function stopResumeAssistant() {

    if ("speechSynthesis" in window) {
        window.speechSynthesis.cancel();
        updateVoiceStatus("Voice assistant stopped.");
    }

}


// =====================================
// UPDATE VOICE STATUS
// =====================================

function updateVoiceStatus(message) {

    const voiceStatus = document.getElementById("voiceStatus");

    if (voiceStatus) {
        voiceStatus.textContent = message;
    }

    const assistantMessage = document.getElementById("assistantMessage");

    if (assistantMessage) {
        assistantMessage.textContent = message;
    }

}
