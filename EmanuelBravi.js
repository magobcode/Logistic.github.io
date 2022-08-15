// clase contructora de las empresas.
class Empresa {
constructor(Business, Rating, Realizados,){
this.Business = Business;
this.Rating = Rating;
this.Realizados = Realizados;
    }
}



// creacion de la empresa
const Empresa1 = new Empresa ('Andreani', 6, 23600,);
const Empresa2 = new Empresa ('OCASA', 10, 90234,);
const Empresa3 = new Empresa ('CorreoARG', 8, 23145,);
const Empresa4 = new Empresa ('Carolo.srl', 2, 2340,);
const Empresa5 = new Empresa ('Traverso', 4, 12003,);
const Empresa6 = new Empresa ('Fedex', 9, 89030,);
const Empresa7 = new Empresa ('Express', 7, 23403,);

//destructuracion del objeto Empresa
const {Business, Rating, Realizados} = Empresa2;


let Empresas = [];
// push de empresas
Empresas.push(Empresa1);
Empresas.push(Empresa2);
Empresas.push(Empresa3);
Empresas.push(Empresa4);
Empresas.push(Empresa5);
Empresas.push(Empresa6);
Empresas.push(Empresa7);

let trip = [];
// const globales de la primer vista de la app
const tripDiv = document.getElementById('trip');
const addtrip = document.getElementById('addtrip');
const businessButton = document.getElementById('businesButton');
const trips = document.getElementById('trips');
storageLoad()

 //creacion de campos input para el ingreso de datos del trip y su respectivo div contenedor.
function impInput() {
   
    tripDiv.innerHTML='';
    const inpDiv = document.createElement('div');
    tripDiv.append(inpDiv);
    inpDiv.setAttribute('id', 'inpContainer')
    inpDiv.innerHTML= 'los campos señaldos con un * son obligatorios. <br>'

    const userInp = document.createElement('input');
    userInp.setAttribute('placeholder', 'Titular del envio *')
    inpDiv.append(userInp);
    userInp.setAttribute('id', 'user')
    
    const destInp = document.createElement('input');
    destInp.setAttribute('placeholder','Destino: Ciudad, Provincia *')
    inpDiv.append(destInp);
   
    const numInp = document.createElement ('input');
    numInp.setAttribute('placeholder', 'Numero telefonico')
    numInp.setAttribute('type','number');
    numInp.setAttribute('id', 'num')
    inpDiv.append(numInp);

    const pesoInp = document.createElement ('input');
    pesoInp.setAttribute('type','number');
    pesoInp.setAttribute('placeholder','Peso en Kg')
    inpDiv.append(pesoInp);   
 
    function aggtrip(user, dest, Peso, num) {
       user == '' || dest == '' ? alert('error, hay campos obligatorios vacios.') : trip.push( {user, dest, Peso, num} ), printTrip()}
  
    
//function para imprimir en pantalla los datos cargados en el input
    function printTrip() {
        tripDiv.innerHTML= '';
        trip.forEach( t => {
            
            const li = document.createElement('li')
             li.innerText = `titular del Envio: ${t.user} 
             Destino: ${t.dest} 
             Peso: ${t.Peso}Kg
             numero telefonico: ${t.num}

            Te notificaremos cual será la empresa responsable del envio.
            `
            tripDiv.append( li )
        })
        
    }
    //button para cargar los datos del input
    const buttonTrip = document.createElement('button');
    inpDiv.append(buttonTrip);
    buttonTrip.setAttribute('id', 'buttonTrip');
    buttonTrip.innerHTML = 'ENVIAR'
    buttonTrip.addEventListener('click', () => {
    pesoInp.value > 100  ? alert('El peso excede el maximo de 100 Kg.') : aggtrip(userInp.value, destInp.value, pesoInp.value, numInp.value); localSync();  
})

    
}
    //funciones de almacenamiento en localstorage
    function localSync() {
            localStorage.setItem('trip', JSON.stringify(trip))
        }     
    
     function storageLoad() {
            const tripJson = localStorage.getItem('trip');
            const tripLocalstorage = JSON.parse(tripJson);
           trip = trip.concat ( tripLocalstorage );

        }   

// function de imporesion de empresas 
function impBusiness() {
    tripDiv.innerHTML='';
    tripDiv.innerHTML= `<h2>Empresa Estrella: ${Business}</h2>`

    Empresas.forEach(Empresa => {
        const div_Business = document.createElement('div');
           div_Business.classList.add("Business"); 
           tripDiv.append(div_Business);  
           div_Business.innerHTML= `
           <h3> ${Empresa.Business} </h3>
           <p><strong> Calificacion: ${Empresa.Rating}</strong></p>
           <p>Entregas Realizadas: ${Empresa.Realizados}`})
        
         
}

//button nuevo viaje
addtrip.addEventListener('click',  () => {
    console.log('boton add');
    impInput()
  
})
//button empresas
businessButton.addEventListener('click', () => {
    console.log('boton empresas');
    impBusiness()
});
//ignorar, en desarrollo. 
// trips.addEventListener('click', () => {
//     console.log('trips');
// });



