// Limite de agendamentos por dia
const scheduleLimit = 2;
let bookings = {
    "Segunda-feira": 0,
    "Quinta-feira": 0
};

function updateTimeDisplay(value) {
    const timeDisplay = document.getElementById('timeDisplay');
    const hours = value.padStart(2, '0');
    timeDisplay.textContent = `${hours}:00`;
}

function sendToWhatsApp() {
    const name = document.getElementById('name').value;
    const day = document.getElementById('day').value;
    const time = document.getElementById('timeDisplay').textContent;
    const service = document.getElementById('service').value;

    // Verifica se o limite de agendamentos foi atingido
    if (bookings[day] >= scheduleLimit) {
        // Exibe um alerta informando que não há disponibilidade
        alert(`O limite de agendamentos para ${day} foi atingido. Por favor, escolha outra data.`);
        return;
    }

    // Atualiza o contador de agendamentos
    bookings[day]++;

    const message = `Olá! Meu nome é ${name}. Gostaria de agendar um horário para ${service} na ${day} às ${time}.`;
    const phoneNumber = '5543999738255'; // Número do WhatsApp
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    window.open(whatsappURL, '_blank');
}