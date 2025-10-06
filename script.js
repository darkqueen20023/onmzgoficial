form.addEventListener('submit', function(e){
  e.preventDefault();

  const modelo = document.getElementById('modelo').value;
  const cor = document.getElementById('cor').value;
  const gb = document.getElementById('gb').value;
  const nome = document.getElementById('nome').value;
  const telefone = document.getElementById('telefone').value;
  const endereco = document.getElementById('endereco').value;

  const codigo = 'MGZ' + Math.floor(Math.random()*9000 + 1000);

  // Montar a mensagem completa
  const mensagem = encodeURIComponent(
    `Olá, quero confirmar meu pedido ${codigo}:\n\n` +
    `📱 Modelo: ${modelo}\n` +
    `🎨 Cor: ${cor}\n` +
    `💾 Armazenamento: ${gb}\n` +
    `📝 Nome: ${nome}\n` +
    `📞 WhatsApp: ${telefone}\n` +
    `🏠 Endereço: ${endereco}`
  );

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
    <a href="https://wa.me/554591033651?text=${mensagem}" target="_blank" style="color:#007bff;">📲 Enviar via WhatsApp</a>
  `;
  form.reset();
});
