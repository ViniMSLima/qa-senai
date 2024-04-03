var nomeGlobal;
var mensagemGlobal;
var dateGlobal;
var style;

function conferirMensagemWhatsApp() {
    var nome = document.getElementById("nome").value;
    var mensagem = document.getElementById("mensagem").value;
    var date = new Date();

    document.getElementById("conf").style.display = "inline"

    nomeGlobal = nome;
    mensagemGlobal = mensagem;
    dateGlobal = date.toLocaleString(["pt-br"]);

    document.getElementById("confNome").textContent = nome;
    document.getElementById("confMsg").textContent = mensagem;
    document.getElementById("confDate").textContent = dateGlobal;
}

function enviar() {
    var numeroTelefone = "5541999999999";

    var linkWhatsApp =
        "https://wa.me/" +
        numeroTelefone +
        "?text=NOME DO RECEPTOR(A): " +
        nomeGlobal +
        " - MENSAGEM: " +
        mensagemGlobal +
        " - DATA: " +
        dateGlobal;

    window.open(linkWhatsApp, '_blank');
}

function format(data) {

}

function darkmode() {
    var body = document.body;
    body.classList.toggle('dark-mode');
    body.classList.toggle('light-mode');
}