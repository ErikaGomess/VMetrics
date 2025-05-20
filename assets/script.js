function gerarAleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function atualizarDashboard() {
  document.getElementById('vms').textContent = gerarAleatorio(8, 15) + ' máquinas virtuais';
  document.getElementById('cpu').textContent = gerarAleatorio(40, 90) + '%';
  document.getElementById('memoria').textContent = gerarAleatorio(30, 80) + '%';
  document.getElementById('uptime').textContent = gerarAleatorio(99, 100) + '% uptime';
}

// Atualiza ao carregar e a cada 5 segundos
atualizarDashboard();
setInterval(atualizarDashboard, 5000);
