describe("testing in google",()=>{
    beforeEach(()=>{
        cy.visit('https://www.google.com/');
    })
    it("make a search in google",()=>{
        const wordSearch= 'Historia de Colombia';
        cy.get('textarea[title=Buscar]').type(`${wordSearch}{enter}`);
        cy.get('div > a[href="https://es.wikipedia.org/wiki/Historia_de_Colombia"]')
        .contains(wordSearch);
    })
}) 