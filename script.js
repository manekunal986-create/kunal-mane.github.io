// =====================================
// RESUME VOICE ASSISTANT
// =====================================

const resumeText = `
Hello and welcome!
My name is Kunal Mane.
I am an Electronics and Telecommunication Engineering graduate.
I am interested in software development, embedded systems,
Internet of Things, and data analytics.
My technical interests include HTML, CSS, Java, Python,
SQL, Power BI, and embedded technologies.
Thank you for visiting my portfolio.
`;

const speakButton = document.getElementById("speakButton");
const resumeSpeakButton = document.getElementById("speakResume");

function speakResume() {
    if (!("speechSynthesis" in window)) {
        alert("Your browser does not support speech.");
        return;
    }

    window.speechSynthesis.cancel();

    const speech = new SpeechSynthesisUtterance(resumeText);
    speech.lang = "en-IN";
    speech.rate = 0.9;

    window.speechSynthesis.speak(speech);
}

if (speakButton) {
    speakButton.addEventListener("click", speakResume);
}

if (resumeSpeakButton) {
    resumeSpeakButton.addEventListener("click", speakResume);
}


// =====================================
// PROJECT DETAILS
// =====================================

const projectDetails = {
    security: {
        title: "AI & IoT-Based Security System",
        description: "An academic project exploring security monitoring using embedded hardware and IoT technologies.",
        technologies: "Arduino, ESP32, IoT",
        status: "Academic Project"
    },

    portfolio: {
        title: "Interactive Developer Portfolio",
        description: "A responsive personal website featuring technical skills, project cards, and a voice introduction.",
        technologies: "HTML, CSS, JavaScript",
        status: "Currently Building"
    },

    analytics: {
        title: "Sales Intelligence Dashboard",
        description: "A planned dashboard to visualize sales trends, revenue, and product performance.",
        technologies: "Power BI, SQL, Excel",
        status: "Planned Project"
    }
};

document.querySelectorAll(".project-btn").forEach(function(button) {
    button.addEventListener("click", function() {

        const project = projectDetails[button.dataset.project];

        if (!project) return;

        const popup = document.createElement("div");
        popup.className = "project-popup";

        popup.innerHTML = `
            <div class="project-popup-content">
                <button class="popup-close" type="button">&times;</button>
                <p class="popup-label">PROJECT DETAILS</p>
                <h2></h2>
                <p class="popup-description"></p>
                <p class="popup-tech"></p>
                <p class="popup-status"></p>
            </div>
        `;

        popup.querySelector("h2").textContent = project.title;
        popup.querySelector(".popup-description").textContent = project.description;
        popup.querySelector(".popup-tech").textContent =
            "Technologies: " + project.technologies;
        popup.querySelector(".popup-status").textContent =
            "Status: " + project.status;

        document.body.appendChild(popup);

        const closeButton = popup.querySelector(".popup-close");

        closeButton.addEventListener("click", function() {
            popup.remove();
        });

        popup.addEventListener("click", function(event) {
            if (event.target === popup) {
                popup.remove();
            }
        });
    });
});


// =====================================
// SKILLS SECTION
// =====================================

document.querySelectorAll(".skill-card").forEach(function(card) {

    const button = card.querySelector(".skill-more");
    const progress = card.querySelector(".skill-progress-fill");

    if (progress) {
        progress.style.setProperty(
            "--skill-width",
            progress.dataset.width || "0%"
        );
    }

    if (button) {
        button.addEventListener("click", function() {

            const expanded =
                button.getAttribute("aria-expanded") === "true";

            button.setAttribute("aria-expanded", String(!expanded));

            button.textContent = expanded
                ? "Explore Skills +"
                : "Show Less −";

            card.classList.toggle("is-expanded", !expanded);
        });
    }
});


// =====================================
// COPY EMAIL BUTTON
// =====================================

const copyEmailBtn = document.getElementById("copyEmailBtn");

if (copyEmailBtn) {

    copyEmailBtn.addEventListener("click", async function() {

        const email = "kunalmane946@gmail.com";

        try {
            await navigator.clipboard.writeText(email);
            copyEmailBtn.textContent = "Email Copied ✓";
        } catch (error) {
            window.prompt("Copy this email address:", email);
        }

        setTimeout(function() {
            copyEmailBtn.textContent = "Copy Email 📋";
        }, 2000);
    });
}<script src="script.js"></script>
</body>
</html>