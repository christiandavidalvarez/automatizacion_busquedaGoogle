
describe("testing in google",()=>{
    beforeEach(()=>{
        cy.visit('https://www.google.com/');
    })
    it("buscar cualquier termino utilizando la barra de busqueda única en pantalla",()=>{
        /*Escenario automatizado
        Como usuario quiero buscar cualquier término utilizando la barra de búsqueda única en pantalla  
        */
        const wordSearch= 'Historia de Colombia';
        cy.get('textarea[title=Buscar]').type(`${wordSearch}{enter}`);
        cy.get('div > a[href="https://es.wikipedia.org/wiki/Historia_de_Colombia"]')
        .contains(wordSearch);
    })
}) 