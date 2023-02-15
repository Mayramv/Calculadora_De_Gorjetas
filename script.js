
const resultaPorPessoa = document.querySelector("#resultado_pessoa");
const resultadoTotal = document.querySelector("#resultado_total");

const botao = document.querySelector("[data-botao]")
const botao10 = document.querySelector("#botao10")
const botao15 = document.querySelector("#botao15")
const botao25 = document.querySelector("#botao25")
const botao50 = document.querySelector("#botao50")
const botaocust = document.querySelector("#costum")
function calcularGorjeta5(){
    const bill = document.querySelector("#bill");
    const people = document.querySelector("#people");
   
    
     if (bill.value !=="" && people.value !==""){
         
        valorGorjetaPessoa = ( (bill.value/100) * botao.value)/people.value
        valortotalPessoa= (bill.value/people.value) +  valorGorjetaPessoa

         resultaPorPessoa.innerHTML= valorGorjetaPessoa.toFixed(2);
         resultadoTotal.innerHTML= valortotalPessoa.toFixed(2);
         console.log(bill.value)
         
     } else{
         alert("Preencha todos os campos")
          }
     }
 
 botao.addEventListener('click', () => {
     calcularGorjeta5();
     
 })
 function calcularGorjeta10(){
    const bill = document.querySelector("#bill");
    const people = document.querySelector("#people");
   
    
     if (bill.value !=="" && people.value !==""){
         
         valorGorjetaPessoa = ( (bill.value/100) * botao10.value)/people.value
        valortotalPessoa= (bill.value/people.value) +  valorGorjetaPessoa

         resultaPorPessoa.innerHTML= valorGorjetaPessoa.toFixed(2);
         resultadoTotal.innerHTML= valortotalPessoa.toFixed(2);
         console.log(bill.value)
         
     } else{
         alert("Preencha todos os campos")
            }
     }
 
 botao10.addEventListener('click', () => {
     calcularGorjeta10();
     
 })

 function calcularGorjeta15(){
    const bill = document.querySelector("#bill");
    const people = document.querySelector("#people");
   
    
     if (bill.value !=="" && people.value !==""){
         
         valorGorjetaPessoa = ( (bill.value/100) * botao15.value)/people.value
        valortotalPessoa= (bill.value/people.value) +  valorGorjetaPessoa

         resultaPorPessoa.innerHTML= valorGorjetaPessoa.toFixed(2);
         resultadoTotal.innerHTML= valortotalPessoa.toFixed(2);
         console.log(bill.value)
         
     } else{
         alert("Preencha todos os campos")
            }
     }
 
 botao15.addEventListener('click', () => {
     calcularGorjeta15();
     
 })
 function calcularGorjeta25(){
    const bill = document.querySelector("#bill");
    const people = document.querySelector("#people");
   
    
     if (bill.value !=="" && people.value !==""){
         
         valorGorjetaPessoa = ( (bill.value/100) * botao25.value)/people.value
        valortotalPessoa= (bill.value/people.value) +  valorGorjetaPessoa

         resultaPorPessoa.innerHTML= valorGorjetaPessoa.toFixed(2);
         resultadoTotal.innerHTML= valortotalPessoa.toFixed(2);
         console.log(bill.value)
         
     } else{
         alert("Preencha todos os campos")
            }
     }
 
 botao25.addEventListener('click', () => {
     calcularGorjeta25();
     
 })
 function calcularGorjeta50(){
    const bill = document.querySelector("#bill");
    const people = document.querySelector("#people");
   
    
     if (bill.value !=="" && people.value !==""){
         
         valorGorjetaPessoa = ( (bill.value/100) * botao50.value)/people.value
        valortotalPessoa= (bill.value/people.value) +  valorGorjetaPessoa

         resultaPorPessoa.innerHTML= valorGorjetaPessoa.toFixed(2);
         resultadoTotal.innerHTML= valortotalPessoa.toFixed(2);
         console.log(bill.value)
         
     } else{
         alert("Preencha todos os campos")
            }
     }
 
 botao50.addEventListener('click', () => {
     calcularGorjeta50();
     
 })
 function calcularGorjeta50(){
    const bill = document.querySelector("#bill");
    const people = document.querySelector("#people");
   
    
     if (bill.value !=="" && people.value !==""){
         
         valorGorjetaPessoa = ( (bill.value/100) * botao50.value)/people.value
        valortotalPessoa= (bill.value/people.value) +  valorGorjetaPessoa

         resultaPorPessoa.innerHTML= valorGorjetaPessoa.toFixed(2);
         resultadoTotal.innerHTML= valortotalPessoa.toFixed(2);
         console.log(bill.value)
         
     } else{
         alert("Preencha todos os campos")
            }
     }
 
 botao50.addEventListener('click', () => {
     calcularGorjeta50();
     
 })

 function calcularGorjetacust(){
    const bill = document.querySelector("#bill");
    const people = document.querySelector("#people");
   
    
     if (bill.value !=="" && people.value !==""){
         
         valorGorjetaPessoa = ( (bill.value/100) * botaocust.value)/people.value
        valortotalPessoa= (bill.value/people.value) +  valorGorjetaPessoa

         resultaPorPessoa.innerHTML= valorGorjetaPessoa.toFixed(2);
         resultadoTotal.innerHTML= valortotalPessoa.toFixed(2);
         console.log(bill.value)
         
     } else{
         alert("Preencha todos os campos")
            }
     }
 
     botaocust.addEventListener('click', () => {
     calcularGorjetacust();
     
 })
 
