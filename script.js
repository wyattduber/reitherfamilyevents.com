emailjs.init('e5w8D_xKM9SqIVP1b');

function sendRSVP(e) {
  e.preventDefault();
  emailjs.sendForm('service_wgm8dyl', 'template_zmti6bw', e.target)
    .then(() => {
      alert('RSVP sent successfully!');
      e.target.reset();
    }, (error) => {
      alert('Failed to send RSVP: ' + error.text);
    });
}

async function loadEvents() {
  const response = await fetch('events.json');
  const events = await response.json();
  const eventsContainer = document.getElementById('events-list');
  events.forEach(event => {
    const div = document.createElement('div');
    div.className = 'event';
    div.innerHTML = `
      <h3>${event.title}</h3>
      <p><strong>Date:</strong> ${event.date}</p>
      <p><strong>Time:</strong> ${event.time}</p>
      <p><strong>Location:</strong> ${event.location}</p>
      <p><strong>Card:</strong> <img src="${event.card}" width="500" /></p>
    `;
    eventsContainer.appendChild(div);
  });
}

document.addEventListener('DOMContentLoaded', loadEvents);
