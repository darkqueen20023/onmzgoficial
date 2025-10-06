// ---------- NAVEGAÇÃO ENTRE SEÇÕES ----------
const links = document.querySelectorAll('nav a');
const sections = document.querySelectorAll('main section');

links.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = link.dataset.target;
    sections.forEach(sec => sec.classList.remove('ativo'));
    document.getElementById(target).classList.add('ativo');
  });
});

// ---------- FORMULÁRIO DE PEDIDO ----------
const form = document.getElementById('pedidoForm');
const resultado = document.getElementById('resultado');

form.addEventListener('submit', function(e){
  e.preventDefault();

  const modelo = document.getElementById('modelo').value;
  const cor = document.getElementById('cor').value;
  const gb = document.getElementById('gb').value;
  const nome = document.getElementById('nome').value;
  const telefone = document.getElementById('telefone').value;
  const endereco = document.getElementById('endereco').value;

  // Gerar código do pedido aleatório
  const codigo = 'MGZ' + Math.floor(Math.random()*9000 + 1000);

  // Mostrar resultado com QR Code (substitua 'qrcode.png' pelo QR correto)
  resultado.innerHTML = `
    ✅ Pedido gerado com sucesso!<br><br>
    📱 Modelo: <b>${modelo}</b><br>
    🎨 Cor: <b>${cor}</b><br>
    💾 Armazenamento: <b>${gb}</b><br>
    📝 Nome: <b>${nome}</b><br>
    📞 WhatsApp: <b>${telefone}</b><br>
    🏠 Endereço: <b>${endereco}</b><br>
    📦 Código do pedido: <b>${codigo}</b><br>
    <img src="qrcode.png" width="180"/><br><br>
    <a href="https://wa.me/${telefone.replace(/\D/g,'')}?text=Olá, quero confirmar meu pedido ${codigo}" target="_blank" style="color:#007bff;">📲 Enviar via WhatsApp</a>
  `;

  // Opcional: limpar formulário
  form.reset();
});
