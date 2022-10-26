// const importacao = document.querySelector('.importacao');
// const icms = document.querySelector('.icms');
// const total = document.querySelector('.total');
const botao = document.querySelector('.botao');
botao.addEventListener('keypress', function(e){
    if(e.keyCode === 13){
        botao.click();
    }
});

const calculo = () => {
    const element = !!document.querySelector('.valores');
    if (element) {
        document.querySelector('.valores').remove();
    }
    const preco = parseFloat(document.querySelector('.preco').value);  
    
    if(preco > 0){
        const taxaImportacao = 0.60 * preco;
        const taxa = ((parseFloat(taxaImportacao) + parseFloat(preco)) * 0.25) + (parseFloat(preco) + parseFloat(taxaImportacao)) ;
        const taxaIcms = (taxa + ((taxa * 0.25) * 0.25)) * 0.25;
        const total = taxaImportacao + taxaIcms + 15;
        const div = document.createElement('div');
        div.setAttribute('class', 'valores')
        div.innerHTML = `<div class='valores'>
            <div class="resultado">
                <p>Valor da mercadoria: <span>R$${preco}</span></p>
                <p class="importacao">Valor da taxa de importação: <span>R$${taxaImportacao.toFixed(2)}</span></p>
                <p class="icms">ICMS: <span>R$${taxaIcms.toFixed(2)}</span></p>
                <p>Taxa de entrega correios: <span>R$15,00</span></p>
                <p class="total">Total a pagar: <span>R$${total.toFixed(2)}</span></p>
                <p class="informe">* Lembramos que os valores são apenas estimativas, o valor real pode alterar para mais ou para menos. Nosso intuito é apenas trazer uma pequena estimativa do valor o qual você poderá pagar.
                <strong>Valores válidos para Minas Gerais</strong></p>
            </div>
        </div>`
       document.querySelector('main').appendChild(div);
       
    
        document.querySelector('.preco').value = '';
        
    }else{
        alert('Digite um valor válido');
    }
   
}