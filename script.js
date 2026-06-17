const botBrain = {
    "halo": "Halo! Saya adalah EPL Expert. Ada yang bisa saya bantu seputar Premier League?",
    "juara": "Manchester United masih memegang rekor juara Premier League terbanyak dengan 20 gelar, disusul Liverpool dengan 19 gelar.",
    "top skor": "Top skor sepanjang masa Premier League dipegang oleh Alan Shearer dengan 260 gol. Di posisi kedua ada Harry Kane.",
    "piala": "Piala Premier League yang asli memiliki tinggi 76 cm dan berat total sekitar 25 kg, terbuat dari perak murni dan emas.",
    "format": "Premier League diikuti oleh 20 klub, di mana 3 klub terbawah di akhir musim akan terdegradasi ke EFL Championship."
};

const btnSubmit = document.getElementById('btn-submit');
const userInput = document.getElementById('user-input');
const aiOutput = document.getElementById('ai-output');

function prosesPertanyaan() {
    const textTanya = userInput.value.toLowerCase().trim();
    
    if (textTanya === "") {
        aiOutput.innerHTML = "Ketik sesuatu dulu dong di kotak pertanyaan...";
        aiOutput.style.fontStyle = "italic";
        return;
    }

    aiOutput.style.fontStyle = "normal";
    aiOutput.style.color = "#3d003d";
    aiOutput.innerHTML = "<em>Sedang menganalisis...</em>";

    setTimeout(() => {
        let jawabanKetemu = false;

        for (let key in botBrain) {
            if (textTanya.includes(key)) {
                aiOutput.innerText = botBrain[key];
                jawabanKetemu = true;
                break;
            }
        }

        if (!jawabanKetemu) {
            aiOutput.innerText = "Maaf, saya tidak menemukan informasi spesifik tentang itu di encyclopedia saya. Coba ketik kata kunci seperti 'juara', 'top skor', atau 'piala'.";
        }
    }, 500);
}

btnSubmit.addEventListener('click', prosesPertanyaan);

userInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        e.preventDefault();
        prosesPertanyaan();
    }
});



function menanganiLogin(event) {
    event.preventDefault();

    const usernameInput = document.querySelector('input[type="text"]');
    const passwordInput = document.querySelector('input[type="password"]');

    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();

    if (username === '' || password === '') {
        alert('Waduh, email/username dan password jangan dikosongin ya!');
        return;
    }

    alert(`GGMU / YNWA! Login Berhasil.\nSelamat datang kembali, ${username}! ⚽`);
}

document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.querySelector('form');
    loginForm.addEventListener('submit', menanganiLogin);
});
