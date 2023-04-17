/// <reference types="cypress"/>
require('@cypress/xpath');

describe('Testando contato seguro',() =>{
    
    it ('Visitar', () =>{

        cy.viewport(1400, 1400)

        cy.visit('https://tst.contatoseguro.io/cob')

        cy.wait(2000);


        cy.xpath('/html/body/main/div[1]/div/div[1]/div/div/div[2]/a/button').click();

        cy.wait(1000);


        cy.xpath('/html/body/div[1]/div/div/div/div/div[2]/button[2]').click();


        cy.wait(1000);

        cy.get('input[id="gostaria_de_se_identificar_s"]').type('Sim');

        cy.wait(1000);

        cy.get('input[id="denunciante"]').type('Sarah Lívia Martins');

        cy.wait(1000);

        cy.get('input[id="cpf_denunciante"]').type('722.920.761-44');

        cy.wait(1000);

        cy.get('input[id="email_gostaria_identificar"]').type('sarah_martins@jci.com');

        cy.wait(1000);

        cy.get('input[id="data_nascimento_denunciante"]').type('13/03/1993');

        cy.wait(1000);

        cy.get('input[id="telefone_denunciante"]').type('(86) 99857-8048');

        cy.wait(1000);

        cy.get('input[id="term_agree"]').click();

        cy.wait(1000);

        cy.get('a[id="submit"]').click();



    })

    

})
