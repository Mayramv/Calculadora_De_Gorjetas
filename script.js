
const resultadoPessoa = document.querySelector("#result-person");
const resultadoTotal = document.querySelector("#result-Total");

const button = document.querySelector("#button5")
const button10 = document.querySelector("#button10")
const button15 = document.querySelector("#button15")
const button25 = document.querySelector("#button25")
const button50 = document.querySelector("#button50")
const buttoncust = document.querySelector("#costum")
function calcularGorjeta5(){
    const bill = document.querySelector("#bill");
    const people = document.querySelector("#people");
   
    
     if (bill.value !=="" && people.value !==""){
         
        valorGorjetaPessoa = ( (bill.value/100) * button.value)/people.value
        valortotalPessoa= (bill.value/people.value) +  valorGorjetaPessoa

         resultadoPessoa.innerHTML= valorGorjetaPessoa.toFixed(2);
         resultadoTotal.innerHTML= valortotalPessoa.toFixed(2);
         console.log(bill.value)
         
     } else{
         alert("Preencha todos os campos")
          }
     }
 
 button.addEventListener('click', () => {
     calcularGorjeta5();
     
 })
 function calcularGorjeta10(){
    const bill = document.querySelector("#bill");
    const people = document.querySelector("#people");
   
    
     if (bill.value !=="" && people.value !==""){
         
         valorGorjetaPessoa = ( (bill.value/100) * button10.value)/people.value
        valortotalPessoa= (bill.value/people.value) +  valorGorjetaPessoa

         resultadoPessoa.innerHTML= valorGorjetaPessoa.toFixed(2);
         resultadototal.innerHTML= valortotalPessoa.toFixed(2);
         console.log(bill.value)
         
     } else{
         alert("Preencha todos os campos")
            }
     }
 
 button10.addEventListener('click', () => {
     calcularGorjeta10();
     
 })

 function calcularGorjeta15(){
    const bill = document.querySelector("#bill");
    const people = document.querySelector("#people");
   
    
     if (bill.value !=="" && people.value !==""){
         
         valorGorjetaPessoa = ( (bill.value/100) * button15.value)/people.value
        valortotalPessoa= (bill.value/people.value) +  valorGorjetaPessoa

         resultadoPessoa.innerHTML= valorGorjetaPessoa.toFixed(2);
         resultadototal.innerHTML= valortotalPessoa.toFixed(2);
         console.log(bill.value)
         
     } else{
         alert("Preencha todos os campos")
            }
     }
 
 button15.addEventListener('click', () => {
     calcularGorjeta15();
     
 })
 function calcularGorjeta25(){
    const bill = document.querySelector("#bill");
    const people = document.querySelector("#people");
   
    
     if (bill.value !=="" && people.value !==""){
         
         valorGorjetaPessoa = ( (bill.value/100) * button25.value)/people.value
        valortotalPessoa= (bill.value/people.value) +  valorGorjetaPessoa

         resultadoPessoa.innerHTML= valorGorjetaPessoa.toFixed(2);
         resultadototal.innerHTML= valortotalPessoa.toFixed(2);
         console.log(bill.value)
         
     } else{
         alert("Preencha todos os campos")
            }
     }
 
 button25.addEventListener('click', () => {
     calcularGorjeta25();
     
 })
 function calcularGorjeta50(){
    const bill = document.querySelector("#bill");
    const people = document.querySelector("#people");
   
    
     if (bill.value !=="" && people.value !==""){
         
         valorGorjetaPessoa = ( (bill.value/100) * button50.value)/people.value
        valortotalPessoa= (bill.value/people.value) +  valorGorjetaPessoa

         resultadoPessoa.innerHTML= valorGorjetaPessoa.toFixed(2);
         resultadototal.innerHTML= valortotalPessoa.toFixed(2);
         console.log(bill.value)
         
     } else{
         alert("Preencha todos os campos")
            }
     }
 
 button50.addEventListener('click', () => {
     calcularGorjeta50();
     
 })
 function calcularGorjeta50(){
    const bill = document.querySelector("#bill");
    const people = document.querySelector("#people");
   
    
     if (bill.value !=="" && people.value !==""){
         
         valorGorjetaPessoa = ( (bill.value/100) * button50.value)/people.value
        valortotalPessoa= (bill.value/people.value) +  valorGorjetaPessoa

         resultadoPessoa.innerHTML= valorGorjetaPessoa.toFixed(2);
         resultadototal.innerHTML= valortotalPessoa.toFixed(2);
         console.log(bill.value)
         
     } else{
         alert("Preencha todos os campos")
            }
     }
 
 button50.addEventListener('click', () => {
     calcularGorjeta50();
     
    
        
     
 })

 function calcularGorjetacust(){
    const bill = document.querySelector("#bill");
    const people = document.querySelector("#people");
   
    
     if (bill.value !=="" && people.value !==""){
         
         valorGorjetaPessoa = ( (bill.value/100) * buttoncust.value)/people.value
        valortotalPessoa= (bill.value/people.value) +  valorGorjetaPessoa

         resultadoPessoa.innerHTML= valorGorjetaPessoa.toFixed(2);
         resultadototal.innerHTML= valortotalPessoa.toFixed(2);
         console.log(bill.value)
         
     } else{
         alert("Preencha todos os campos")
            }
     }
 
     buttoncust.addEventListener('click', () => {
     calcularGorjetacust();
     
 })
 
