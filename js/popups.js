const btnCadastrarCliente = document.getElementById("btn_novo_cliente");
const btnCadastrarContato = document.getElementById("btn_novo_contato");

const btnCancelarCliente = document.getElementById("btn_cancelar_cliente");
const btnCancelarContato = document.getElementById("btn_cancelar_contato");

const popupCadastrarCliente = document.getElementById("back_popup_create_cliente");
const popupCadastrarContato = document.getElementById("back_popup_create_contato");


btnCadastrarCliente.addEventListener("click", () => {
    popupCadastrarCliente.style.display = "block";
});

btnCadastrarContato.addEventListener("click", () => {
    popupCadastrarContato.style.display = "block";
});

window.addEventListener("click", (event) => {
    if (event.target === popupCadastrarCliente || event.target === popupCadastrarContato)   {
        popupCadastrarCliente.style.display = "none";
        popupCadastrarContato.style.display = "none";
    }
});

btnCancelarCliente.addEventListener("click", () => {
    popupCadastrarCliente.style.display = "none";
});

btnCancelarContato.addEventListener("click", () => {
    popupCadastrarContato.style.display = "none";
})
