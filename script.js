let candidateNumber = "";

function addNumber(number) {
  if (candidateNumber.length < 2) {
    candidateNumber += number;
    updateInput();
  }
}

function updateInput() {
  document.getElementById("password").value = candidateNumber;
}

function clearInput() {
  candidateNumber = "";
  updateInput();
}

const votingForm = document.getElementById('votingForm');

votingForm.addEventListener('submit', function(event) {
  event.preventDefault();
  
  const password = document.getElementById('password').value;
  if (password === 'suasenha') {
    alert('Senha correta. Voto computado!');
    window.location.reload();
  } else {
    alert('Senha incorreta. Tente novamente.');
  }
});
