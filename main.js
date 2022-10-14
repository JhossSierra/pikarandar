  
  let lc=document.querySelector('#poke')
  let inputSelec=document.getElementById('input')
  let id


  let creador= function(character){
    let typePoke
    // creamos elementos
    let nodediv=document.createElement('div')
    let nodeh2=document.createElement('h2')
    let nodeh3=document.createElement('h3')
    let nodep=document.createElement('p')
    // creamos texto
    let infop=document.createTextNode('prueba')
    let namePoke=document.createTextNode(`${character.name}`)
    
    
    // agregando clases
    nodediv.classList.add('container',`container__${character.types[0].type.name}`)
    nodeh3.className=`type-${character.types[0].type.name}`
    
    // tipos dobles
    if (typeof character.types[1] ==='undefined'){
      typePoke=document.createTextNode(`Type: ${character.types[0].type.name}`)
      
    }
    else{
      typePoke=document.createTextNode(`Type: ${character.types[0].type.name} and ${character.types[1].type.name}`) 
    }
    // append interno
    nodediv.appendChild(nodeh2)
    nodeh2.appendChild(namePoke)
    nodeh3.appendChild(typePoke)

    // append externo
    lc.appendChild(nodediv)
    nodediv.appendChild(nodeh3)
    
    
    let imgNode = document.createElement('img')
    imgNode.src=character.sprites.front_default;
    nodediv.appendChild(imgNode)

  }
  
  document.getElementById('input').addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
       id=inputSelec.value
      
       const Url= `https://pokeapi.co/api/v2/pokemon/${id}`
      fetch(Url)
     .then(response => response.json())
     .then(pokemon=>creador(pokemon))}
  });
    

     document.getElementById("button").addEventListener('click',()=>{
       id=inputSelec.value
       const Url= `https://pokeapi.co/api/v2/pokemon/${id}`
      fetch(Url)
     .then(response => response.json())
     .then(pokemon=>creador(pokemon))});