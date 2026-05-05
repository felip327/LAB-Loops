let contacts = [
  { name: "Maxwell Wright", phone: "(0191) 719 6495", email: "Curabitur.egestas.nunc@nonummyac.co.uk" },
  { name: "Raja Villarreal", phone: "0866 398 2895", email: "posuere.vulputate@sed.com" },
  { name: "Helen Richards", phone: "0800 1111", email: "libero@convallis.edu" }
];

let running = true;

while (running) {
  const cmd = prompt(
    "O que deseja fazer?\n" +
    "  primeiro  - exibir o primeiro contato\n" +
    "  último    - exibir o último contato\n" +
    "  todos     - exibir todos os contatos\n" +
    "  novo      - adicionar um novo contato\n" +
    "  encerrar  - sair do programa"
  );

  if (cmd === "primeiro") {
    alert(JSON.stringify(contacts[0], null, 2));
  } else if (cmd === "último") {
    alert(JSON.stringify(contacts[contacts.length - 1], null, 2));
  } else if (cmd === "todos") {
    for (const c of contacts) {
      console.log(c);
    }
  } else if (cmd === "novo") {
    const name  = prompt("Nome:");
    const phone = prompt("Telefone:");
    const email = prompt("Email:");
    contacts.push({ name, phone, email });
    alert("Contato adicionado!");
  } else if (cmd === "encerrar") {
    running = false;
  } else {
    alert("Comando não reconhecido. Tente novamente.");
  }
}