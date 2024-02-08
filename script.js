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
  
  if (candidateNumber !== "") {
    // Primeiro, verificamos se foi selecionado um candidato
    // Se sim, então pedimos a senha
    if (password === 'g') {
      // Verificamos a senha
      alert('Senha correta. Voto computado para o candidato ' + candidateNumber + '!');
      window.location.reload();
    } else {
      // Senha incorreta
      alert('Senha incorreta. Tente novamente.');
    }
  } else {
    // Se nenhum candidato foi selecionado
    alert('Selecione um candidato antes de prosseguir.');
  }
});
