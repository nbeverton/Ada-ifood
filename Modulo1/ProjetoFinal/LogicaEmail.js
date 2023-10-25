// Importa a função EnviaEmail
const enviarEmail = require('./EnviaEmail');


// Array com lista de endereço de e-mail de clientes.
const listaDeEmails = [
    { email: "cliente1@email.com", status: true },
    { email: "cliente2@email.com", status: true },
    { email: "cliente3@email.com", status: false },
    { email: "cliente4@email.com", status: true }
];


// Função para verificar o dia da semana. Se segunda -> enviar email.
function verificarDiaDaSemana() {
    const date = new Date();
    const diaDaSemana = date.getDay();
    return diaDaSemana === 2; // 1 representa segunda-feira
}


// Função para construir o corpo do e-mail.
function corpoDoEmail() {
    return "Esse é o corpo do email! Teste ok";
}
const body = corpoDoEmail();

// Função para construir o assunto do e-mail.
function assuntoDoEmail() {
    return "subject é isso, tá querida!";
}
const subject = assuntoDoEmail();




// Função para definir os destinatários.
const addressee = destinatariosDoEmail();
function destinatariosDoEmail() {
    const validEmails = [];
    for (const i of listaDeEmails) {
        if (i.status === true) {
            validEmails.push(i.email);
        }
    }    
    return validEmails;
}


// Verifique se é segunda-feira para enviar o e-mail:
if (verificarDiaDaSemana(true)) {
    const addressee = destinatariosDoEmail();

    const body = corpoDoEmail();
    const subject = assuntoDoEmail();

    // Envie email para cada destinatário
    for (const addressees of addressee) {
        const resultadoEnvio = enviarEmail(addressee, subject, body);
        console.log(resultadoEnvio); // Exiba o resultado do envio
    }
} else {
    console.log("No time for emails.");
}
