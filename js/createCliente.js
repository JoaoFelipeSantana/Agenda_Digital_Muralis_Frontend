const btnSubmitCliente = document.getElementById("btn_cadastrar_cliente");

async function buscarCEP() {
    let cep = document.getElementById("txt_cep").value.replace(/\D/g, ""); // Remove caracteres não numéricos

    if (cep.length !== 8) {
        alert("CEP inválido!");
        return;
    }

    try {
        const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        const data = await response.json();

        if (data.erro) {
            alert("CEP não encontrado!");
            return;
        }

        // Preenchendo os campos automaticamente
        document.getElementById("txt_logradouro").value = data.logradouro;
        document.getElementById("txt_bairro").value = data.bairro;
        document.getElementById("txt_cidade").value = data.localidade;
        document.getElementById("txt_estado").value = data.uf;

    } catch (error) {
        console.error("Erro ao buscar o CEP:", error);
    }
}

btnSubmitCliente.addEventListener("click", async function (event) {
    event.preventDefault();

    const cliente = {
        nome: document.getElementById("txt_nome").value,
        cpf: document.getElementById("txt_cpf").value.replace(/\D/g, ""),
        dt_nascimento: document.getElementById("dt_nascimento").value,
        cep: document.getElementById("txt_cep").value,
        numeroResidencia: document.getElementById("num_residencia").value
    };

    try {
        const apiUrl = "http://localhost:8080/cliente";

        const response = await fetch(apiUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(cliente)
        });

        if (response.ok) {
            alert("Cliente cadastrado com sucesso!");
            document.getElementById("cadastro-cliente").reset();
        } else {
            alert("Erro ao cadastrar cliente.");
        }
    } catch (error) {
        console.error("Erro na requisição:", error);
    }
});
