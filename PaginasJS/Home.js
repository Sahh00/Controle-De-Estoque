
function Cadastro() {
    const NomeProduto = document.getElementById("NomeProduto").value;
    const CodigoProduto = Number(document.getElementById("CodigoProduto").value);
    const QuantidadeProduto = Number(document.getElementById("QuantidadeProduto").value);
    

    localStorage.setItem("Nome", JSON.stringify(NomeProduto));
    localStorage.setItem("Codigo", JSON.stringify(CodigoProduto));
    localStorage.setItem("Quantidade", JSON.stringify(QuantidadeProduto));

    window.location.href = "/Paginas/Tabela.html";

    console.log(NomeProduto);
    console.log(QuantidadeProduto);
    console.log(CodigoProduto);
}