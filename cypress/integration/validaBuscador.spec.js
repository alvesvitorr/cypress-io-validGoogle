describe ('Visita buscador google e realiza pesquisa sobre cypress', ()=>{

    it('Acessa a página inicial do buscador',()=>{
        cy.visit ('google.com.br');


    })
    it('Valida barra de pesquisas realizando uma busca',()=>{
        cy.get('.gLFyf').type('Cypress documentation')
        .type('{enter}');
        

    })
    it('Retorna ao menu inicial e realiza pesquisa por imagem',()=>{
        cy.get('#logo').click() //retorna a pagina inicial clicando na logo
        cy.get('.gb_5d').click()
        cy.get('.gLFyf').click()
        .type('cypress io')
        .type('{enter}')
    })
    it('Realiza pesquisa por noticias Cypress',()=>{
        cy.get('.TYpZOd').click()
        cy.get('.gLFyf').click()
        .type('analista de qualidade')
        .type('{enter}')
        .get('.MUFPAc > :nth-child(4) > a')
        .click()

    })



})

    