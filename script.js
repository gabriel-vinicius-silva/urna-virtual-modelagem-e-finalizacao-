let selectedCandidate = null;

function selectCandidate(candidateNumber) {
  selectedCandidate = candidateNumber;
  document.getElementById('candidateNumber').value = candidateNumber;
}

function addNumber(number) {
  if (selectedCandidate !== null) {
    // Se um candidato foi selecionado, adiciona o número ao campo de senha
    const passwordInput = document.getElementById('password');
    passwordInput.value += number;
  }
}

function clearInput() {
  // Limpa o campo de senha e o candidato selecionado
  document.getElementById('password').value = '';
  selectedCandidate = null;
}

const votingForm = document.getElementById('votingForm');

votingForm.addEventListener('submit', function(event) {
  event.preventDefault();
  
  const candidate = parseInt(document.getElementById('candidateNumber').value);
  const password = document.getElementById('password').value;
  
  if (!isNaN(candidate)) {
    // Verifica se foi selecionado um candidato
    if (password === 'g') {
      // Verifica a senha
      alert('Senha correta. Voto computado para o candidato ' + candidate + '!');
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
