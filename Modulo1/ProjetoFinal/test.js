/*

Você foi contratado como programador para uma grande rede de lojas de automóveis 
(CarStore) e o seu primeiro desafio é construir a funcionalidade de enviar um e-mail, 
todas as segundas-feiras, para os clientes que visitaram as lojas no último mês, 
informando-os sobre os novos veículos e os mais vendidos, bem como as condições para 
aquisição (sejam criativos).

##########################################################################################

- Como não haverá acesso a banco de dados, uma lista (array) de emails deverá ser criada,
onde estarão armazenados os emails dos clientes.

- A lista de emails armazenará, além do email de cada cliente, uma flag com a decisão do 
cliente sobre receber ou não comunicações de marketing.

- Será fornecida uma função, no arquivo "envia-email.js", que fará o envio "fake" do 
e-mail para um cliente.

##########################################################################################

Dado o escopo global da aplicação, pede-se desenvolver cada subtarefa visando, ao final, 
a entrega completa da funcionalidade:

1. Criar uma função para verificar o dia da semana atual, que será levado em conta para o 
disparo dos emails.

2. Criar uma função para montar o corpo do e-mail a ser enviado.

3. Criar uma função para enviar o e-mail para cada um dos clientes da lista, levando em 
conta a sua decisão sobre receber comunicações de marketing.

4. Tratar o retorno de erro ou sucesso da função "enviarEmail", de maneira a exibir uma 
mensagem amigável ao usuário no console.

##########################################################################################

Observações:
- Os passos acima são um guia, mas não obrigatórios. Podem desenvolver uma lógica 
diferente, que atenda ao solicitado.

- Podem separar as funcionalidades em arquivos, de acordo com a necessidade que houver.

##########################################################################################
*/


// Array com lista de endereço de e-mail de clientes.
const listaDeEmails = [
    {email: "cliente1@email.com", status: true},
    {email: "cliente2@email.com", status: true},
    {email: "cliente3@email.com", status: false},
    {email: "cliente4@email.com", status: true}
]


// Função para verificar o dia da semana. Se segunda -> enviar email.
function verificarDiaDaSemana() {
    const date = new Date();
    const diaDaSemana = date.getDay();
    return diaDaSemana === 1;
}


// Função para construi o corpo do e-mail.
function corpoDoEmail() {
    return "Esse é o corpo do email! Teste ok";
}
const body = corpoDoEmail();


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



if(verificarDiaDaSemana(true)){
    enviarEmail(addressee, subject, body);
} else{
    console.log("No time for emails.");
}



// Trecho do código fornecido.
const enviarEmail = (addressee, subject, body) => {
    if (!addressee) {
      return {
        status: "Error",
        message: "Um destinatário precisa ser fornecido ao enviar um e-mail.",
      };
    }
  
    if (!subject) {
      return {
        status: "Error",
        message:
          "O campo de assunto não deveria estar vazio ao enviar um e-mail.",
      };
    }
  
    if (!body) {
      return {
        status: "Error",
        message: "O corpo da mensagem precisa ser fornecido ao enviar um e-mail.",
      };
    }
  
    console.log(
      `
        De: news@carstore.com
        Para: ${addressee}
        Assunto: ${subject}
        
        ${body}
        
        CarStore - Aqui você encontra o seu carro novo
      `
    );
  
    return { status: "Sucess", message: "E-mail enviado com sucesso!" };
  };
  
  module.exports = enviarEmail(addressee, subject, body);

