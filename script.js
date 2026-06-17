const botBrain = {
    "halo": "Halo! Saya adalah EPL Expert. Ada yang bisa saya bantu seputar Premier League?",
    "juara": "Manchester United masih memegang rekor juara Premier League terbanyak dengan 20 gelar, disusul Liverpool dengan 19 gelar.",
    "top skor": "Top skor sepanjang masa Premier League dipegang oleh Alan Shearer dengan 260 gol. Di posisi kedua ada Harry Kane.",
    "piala": "Piala Premier League yang asli memiliki tinggi 76 cm dan berat total sekitar 25 kg, terbuat dari perak murni dan emas.",
    "format": "Premier League diikuti oleh 20 klub, di mana 3 klub terbawah di akhir musim akan terdegradasi ke EFL Championship."
};

function jalankanAiEncyclopedia() {
    const btnSubmit = document.getElementById('btn-submit');
    const userInput = document.getElementById('user-input');
    const aiOutput = document.getElementById('ai-output');

    if (!btnSubmit || !userInput || !aiOutput) return;

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
                aiOutput.innerText = "Maaf, saya tidak menemukan informasi spesifik tentang itu. Coba ketik kata kunci seperti 'juara', 'top skor', atau 'piala'.";
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
}

function executeLogin(event) {
    event.preventDefault(); 
    
    const usernameInput = document.getElementById('username').value.trim();
    const passwordInput = document.getElementById('password').value;

    if (validateAuthInput(usernameInput, passwordInput)) {
        processAuthentication(usernameInput, passwordInput);
    }
}

function validateAuthInput(username, password) {
    if (username === "" || password === "") {
        alert("Semua kolom input wajib diisi!");
        return false;
    }
    if (password.length < 6) {
        alert("Password minimal harus terdiri dari 6 karakter!");
        return false;
    }
    return true;
}

function processAuthentication(username, password) {
    console.log("Mengirim data login untuk akun: " + username);
    alert("Login Berhasil! Selamat datang di Premier League Dashboard.");
}

function clearFormFields(formId) {
    const form = document.getElementById(formId);
    if (form) {
        form.reset();
    }
}
