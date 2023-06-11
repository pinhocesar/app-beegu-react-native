const [horario, setaHorario] = React.useState('');
const [vagas, setaVagas] = React.useState('');
const [enderecoInicial, setaEnderecoInicia] = React.useState('');
const [enderecoFinal, setaEnderecoFnicia] = React.useState('');



const criarCarona = () => {
    let carona = {
      horario: horario,
      vagas: vagas,
      enderecoInicial: enderecoInicial,
      enderecoFinal: enderecoFinal,          
    }
    
    let exp = new RegExp('^([01]\d|2[0-3]):([0-5]\d):([0-5]\d)$');
    let horarioValido = carona.horario.match(exp) > 0; 
   
    if (horarioValido) {
      fetch(endpoint, {
          method: "POST",
          body: JSON.stringify(carona),
          headers: {"Content-type": "application/json; charset=UTF-8"}
      })
      .then(response => response.json()) 
      .then(json => console.log(json))
      .catch(err => console.log(err))

    } else {
        console.log(`Favor, inserir horário válido no formato HH:MM:SS`)
        Alert.alert(`Favor, inserir horário válido no formato HH:MM:SS`);
    }            
}



const listarCaronaById = (id) => { 
fetch(`${endpoint}/${id}`, {
    method: "GET",
    headers: {"Content-type": "application/json; charset=UTF-8"}
})
.then(response => console.log(response))
.catch(err => console.log(err))   
}



const atualizarCaronaById = (id) => {
fetch(`${endpoint}/${id}`, {
    method: "PUT",
    body: JSON.stringify(carona),
    headers: {"Content-type": "application/json; charset=UTF-8"}
})
.then(response => response.json()) 
.then(json => console.log(json))
.catch(err => console.log(err))
}



const deletarCaronaById = (id) => {
fetch(`${endpoint}/${id}`, {
    method: "DELETE",
    headers: {"Content-type": "application/json; charset=UTF-8"}
})
.then(response => response.json()) 
.then(json => console.log(json))
.catch(err => console.log(err))
}