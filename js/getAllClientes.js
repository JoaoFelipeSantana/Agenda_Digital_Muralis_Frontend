const apiUrl = "http://localhost:8080/cliente";

const clientListContainer = document.getElementById("client_container_list");

async function loadClientes() {
    

    try {
        const response = await fetch(apiUrl);

        const clientes = await response.json();
        renderClients(clientes);
    } catch (error) {
        console.error("Erro ao carregar clientes:", error);
    }
}

function renderClients(clientes) {
    clientListContainer.innerHTML = "";

    clientes.forEach(client => {
        const clientItem = document.createElement("div");
            clientItem.classList.add("client");

            clientItem.innerHTML = `
                <span>${client.nome}</span>
                <span>${client.cpf}</span>
                <span>${client.dt_nascimento}</span>
                <button class="more_button">...</button>
            `;

            clientListContainer.appendChild(clientItem);
    })
}

loadClientes();