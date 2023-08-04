//Accediendo a elementos. Ejercicio 1. Accede al primer y último elemento de un array.

function obtenerElementos(arr){
    let primerElemento = arr[0];
    let ultimoElemento = arr[arr.length-1];
    return [primerElemento, ultimoElemento]
}

//Prueba en consola.
const numeros = [1,2,3,4,5,6,7,8,9];
console.log(obtenerElementos(numeros));

//Interactuando con el DOM para mostrar.
function ejercicio1() {
  const numeros = [1,2,3,4,5,6,7,8,9];
  const [primerElemento, ultimoElemento] = obtenerElementos(numeros);
  const resultadoDiv = document.getElementById('resultado1');
  resultadoDiv.innerHTML = `Primer elemento: ${primerElemento}, Último elemento: ${ultimoElemento}`;
  resultadoDiv.style.display = 'block';
}

//Manupulando un array para insertar, eliminar elementos. Ejercicio 2: Dado un array de nombres usar los métodos push, shift, unshift y pop.

function manipularNombres(nombres){
    console.log("Primero el método push para agregar un elemento al final.")
    nombres.push("Carlos");
    console.log(nombres)
    console.log("Ahora el metodo shift para eliminar el primer nombre del array.")
    nombres.shift();
    console.log(nombres);
    console.log("En tercer lugar usamos el método unshift para agregar al principio.")
    nombres.unshift("Ana");
    console.log(nombres);
    console.log("El método pop en último lugar para eliminar el último nombre.")
    nombres.pop();
    console.log(nombres);
    return nombres;
}

//Prueba en consola.
let nombres = ["Iosu", "Vero", "Aiur"];
console.log(manipularNombres(nombres));

//Interactuando con el DOM.
function ejercicio2() {
  let nombres = ["Iosu", "Vero", "Aiur"];
  const resultadoDiv = document.getElementById('resultado2');
  resultadoDiv.innerHTML = manipularNombres(nombres).join(', ');
  resultadoDiv.style.display = 'block';
}


//Buscar elementos en un array usando indexOf. Ejercicio 3: Este método obtenemos el índice donde se encuentra situado un elemento de un array.

function buscarNumero(arr, numero) {
    const indice = arr.indexOf(numero);
    return indice !== -1 ? indice : -1;
}

//Prueba en cosola.

const numeros2 = [5, 10, 15, 20, 25];
console.log(buscarNumero(numeros2, 15));  
console.log(buscarNumero(numeros2, 30)); 

//Interactuando con el DOM.
function ejercicio3() {
  const numeros2 = [5, 10, 15, 20, 25];
  const resultadoDiv = document.getElementById('resultado3');
  resultadoDiv.innerHTML = `Posición de 15: ${buscarNumero(numeros2, 15)}, Posición de 30: ${buscarNumero(numeros2, 30)}`;
  resultadoDiv.style.display = 'block';
}

//También aplicable a strings de la misma manera.

function buscarNombre(arr, nombre){
    const indice = arr.indexOf(nombre);
    return indice !== -1 ? indice : "No existe ese nombre.";
}

let nombres2 = ["Paco", "Merche", "Blanca", "Pedro"];
console.log(buscarNombre(nombres2, "Paco"))
console.log(buscarNombre(nombres2, "Julen"))

//Ordenamiento de elementos. Combinación de slice y sort. Ejercicio 4. Ordena un array de forma ascendente y forma descendente con una misma función.

function ordenarNumeros(arr) {
    const ascendente = arr.slice().sort((a, b) => a - b);
    const descendente = arr.slice().sort((a, b) => b - a);
    return [ascendente, descendente];
}

//Prueba en consola.
const numeros3 = [3, 1, 4, 1, 5, 9, 2, 6, 5];
const [ascendente, descendente] = ordenarNumeros(numeros);
console.log(ascendente);  
console.log(descendente);  

//Interactuando con el DOM.
function ejercicio4() {
  const numeros3 = [3, 1, 4, 1, 5, 9, 2, 6, 5];
  const [ascendente, descendente] = ordenarNumeros(numeros3);
  const resultadoDiv = document.getElementById('resultado4');
  resultadoDiv.innerHTML = `Ascendente: ${ascendente.join(', ')}, Descendente: ${descendente.join(', ')}`;
  resultadoDiv.style.display = 'block';
}


//Uso del método map. Map es una función en JavaScript que se utiliza para transformar los elementos de un array original y devolver un nuevo array con los elementos transformados.
//Se itera sobre cada elemento del array y se aplica una función de transformación a cada uno de ellos.
//El array resultante tendrá la misma longitud que el original y contendrá los elementos transformados.

//Ejercicio 5. Multiplica por 2 cada número de un array.

function multiplicarPorDos(arr){
    return arr.map((x) => x*2)
}

//Prueba en consola.
const numeros4 = [1,2,3,4,5];
console.log(multiplicarPorDos(numeros4));

//Interactuando con el DOM.
function ejercicio5() {
  const numeros4 = [1,2,3,4,5];
  const resultadoDiv = document.getElementById('resultado5');
  resultadoDiv.innerHTML = multiplicarPorDos(numeros4).join(', ');
  resultadoDiv.style.display = 'block';
}

//Uso del método filter. Filter es una función que se utiliza para filtrar elementos de un array original y crear un nuevo array con elementos que cumplen un determinada condición.
//La función filter() itera sobre cada elemento del array original y aplica una función de filtrado a cada uno de ellos, generando un nuevo array con los elementos que pasan la condición de filtrado.

//Ejercicio 6 y 7. Filtra los números pares de un array. Filtra de un array de palabras aquellas que tengan más de tres letras.

const numeros5 = [23, 45, 67, 82, 44, 66, 78];

const numerosPares = numeros5.filter((numero) => {
  return numero % 2 === 0;
});

//Prueba en consola.
console.log("Resultados ejercicio 6.")
console.log(numerosPares);

//Interactuando con el DOM.
function ejercicio6() {
  const resultadoDiv = document.getElementById('resultado6');
  resultadoDiv.innerHTML = numerosPares.join(', ');
  resultadoDiv.style.display = 'block';
}

const palabras = ["hola", "adiós", "amigo", "sol", "luna", "mar"];

const palabrasMasDeTresLetras = palabras.filter((palabra) => palabra.length > 3);

//Prueba en pantalla.
console.log("Resultados ejercicio 7.")
console.log(palabrasMasDeTresLetras);

//Interactuando con el DOM.
function ejercicio7() {
  const resultadoDiv = document.getElementById('resultado7');
  resultadoDiv.innerHTML = palabrasMasDeTresLetras.join(', ');
  resultadoDiv.style.display = 'block';
}

//Ejercicio 8. Combinación de ambos. Filtra y muestra las características de los elementos contenidos en un array.

function filtrarTitulosCortos(libros) {
    const librosCortos = libros.filter((libro) => libro.paginas < 200);
    const librosInfo = librosCortos.map((libro) => {
      const palabrasTitulo = libro.titulo.split(' ').length;
  
      return {
        titulo: libro.titulo.toUpperCase(),
        autor: libro.autor,
        paginas: libro.paginas,
        palabrasTitulo: palabrasTitulo,
        imagen: libro.imagen,
      };
    });
  
    return librosInfo;
}
  

const libros = [
  {
    id: 1,
    titulo: 'Cien años de soledad',
    autor: 'Gabriel García Márquez',
    paginas: 432,
    imagen: 'https://th.bing.com/th/id/OIP.esN01GCedQrA0nMENTgkRwHaMG?pid=ImgDet&rs=1',
  },
  {
    id: 2,
    titulo: 'El principito',
    autor: 'Antoine de Saint-Exupéry',
    paginas: 96,
    imagen: 'https://th.bing.com/th/id/OIP.JZ4A6r9HVrDUInOU2sAsCgHaI6?pid=ImgDet&rs=1',
  },
  {
    id: 3,
    titulo: 'Don Quijote de la Mancha',
    autor: 'Miguel de Cervantes',
    paginas: 928,
    imagen: 'https://th.bing.com/th/id/R.dc7c6ac59cb66a6251290cd7d45f17ba?rik=FtlbGWuQWxdlFQ&pid=ImgRaw&r=0',
  },
  {
    id: 4,
    titulo: 'Moby-Dick',
    autor: 'Herman Melville',
    paginas: 720,
    imagen: 'https://th.bing.com/th/id/R.7720f71b6f2b8b8cfe681511653c9c45?rik=7YRY%2bP0nkaWOcg&pid=ImgRaw&r=0',
  },
  {
    id: 5,
    titulo: 'Orgullo y prejuicio',
    autor: 'Jane Austen',
    paginas: 432,
    imagen: 'https://th.bing.com/th/id/R.90ebcd9461957fa3a7b321490f196996?rik=BbDeP2YeMBZt4g&pid=ImgRaw&r=0',
  },
  {
    id: 6,
    titulo: '1984',
    autor: 'George Orwell',
    paginas: 328,
    imagen: 'https://i.pinimg.com/originals/0d/2c/09/0d2c0915b3c86c8ac0680f3f6c88731d.jpg',
  },
  {
    id: 7,
    titulo: 'La sombra del viento',
    autor: 'Carlos Ruiz Zafón',
    paginas: 544,
    imagen: 'https://th.bing.com/th/id/OIP.kY_ymKvS0jeEQ2o_MWkE4QHaLQ?pid=ImgDet&rs=1',
  },
  {
    id: 8,
    titulo: 'El hobbit',
    autor: 'J.R.R. Tolkien',
    paginas: 304,
    imagen: 'https://th.bing.com/th/id/R.d9b67653623aae9dbf216de02cf7fe05?rik=kI3Lj3f4yrqwwg&pid=ImgRaw&r=0',
  },
  {
    id: 9,
    titulo: 'Crimen y castigo',
    autor: 'Fiódor Dostoievski',
    paginas: 656,
    imagen: 'https://th.bing.com/th/id/R.9ef7c775e5f3f887574d2ab953567933?rik=LShtfQEPfVyNww&riu=http%3a%2f%2f3.bp.blogspot.com%2f-gWeUOTI5CQo%2fUERiAlfUIhI%2fAAAAAAAAA0w%2f-vxr0EwE9zg%2fs1600%2fCrimen%2by%2bcastigo.jpg&ehk=zzBNJQxYm7OGhINwwZBzsW0Xt%2faGkIkr%2fuSyJRfpgbs%3d&risl=&pid=ImgRaw&r=0',
  },
  {
    id: 10,
    titulo: 'Matar un ruiseñor',
    autor: 'Harper Lee',
    paginas: 376,
    imagen: 'https://th.bing.com/th/id/OIP.OXGYmlikqb-g8A65288mTAHaK2?pid=ImgDet&rs=1',
  },
];

// Prueba en consola. 
console.log(filtrarTitulosCortos(libros));


//Interactuando con el DOM
function ejercicio8() {

  const libros = [
    {
      id: 1,
      titulo: 'Cien años de soledad',
      autor: 'Gabriel García Márquez',
      paginas: 432,
      imagen: 'https://th.bing.com/th/id/OIP.esN01GCedQrA0nMENTgkRwHaMG?pid=ImgDet&rs=1',
    },
    {
      id: 2,
      titulo: 'El principito',
      autor: 'Antoine de Saint-Exupéry',
      paginas: 96,
      imagen: 'https://th.bing.com/th/id/OIP.JZ4A6r9HVrDUInOU2sAsCgHaI6?pid=ImgDet&rs=1',
    },
    {
      id: 3,
      titulo: 'Don Quijote de la Mancha',
      autor: 'Miguel de Cervantes',
      paginas: 928,
      imagen: 'https://th.bing.com/th/id/R.dc7c6ac59cb66a6251290cd7d45f17ba?rik=FtlbGWuQWxdlFQ&pid=ImgRaw&r=0',
    },
    {
      id: 4,
      titulo: 'Moby-Dick',
      autor: 'Herman Melville',
      paginas: 720,
      imagen: 'https://th.bing.com/th/id/R.7720f71b6f2b8b8cfe681511653c9c45?rik=7YRY%2bP0nkaWOcg&pid=ImgRaw&r=0',
    },
    {
      id: 5,
      titulo: 'Orgullo y prejuicio',
      autor: 'Jane Austen',
      paginas: 432,
      imagen: 'https://th.bing.com/th/id/R.90ebcd9461957fa3a7b321490f196996?rik=BbDeP2YeMBZt4g&pid=ImgRaw&r=0',
    },
    {
      id: 6,
      titulo: '1984',
      autor: 'George Orwell',
      paginas: 328,
      imagen: 'https://i.pinimg.com/originals/0d/2c/09/0d2c0915b3c86c8ac0680f3f6c88731d.jpg',
    },
    {
      id: 7,
      titulo: 'La sombra del viento',
      autor: 'Carlos Ruiz Zafón',
      paginas: 544,
      imagen: 'https://th.bing.com/th/id/OIP.kY_ymKvS0jeEQ2o_MWkE4QHaLQ?pid=ImgDet&rs=1',
    },
    {
      id: 8,
      titulo: 'El hobbit',
      autor: 'J.R.R. Tolkien',
      paginas: 304,
      imagen: 'https://th.bing.com/th/id/R.d9b67653623aae9dbf216de02cf7fe05?rik=kI3Lj3f4yrqwwg&pid=ImgRaw&r=0',
    },
    {
      id: 9,
      titulo: 'Crimen y castigo',
      autor: 'Fiódor Dostoievski',
      paginas: 656,
      imagen: 'https://th.bing.com/th/id/R.9ef7c775e5f3f887574d2ab953567933?rik=LShtfQEPfVyNww&riu=http%3a%2f%2f3.bp.blogspot.com%2f-gWeUOTI5CQo%2fUERiAlfUIhI%2fAAAAAAAAA0w%2f-vxr0EwE9zg%2fs1600%2fCrimen%2by%2bcastigo.jpg&ehk=zzBNJQxYm7OGhINwwZBzsW0Xt%2faGkIkr%2fuSyJRfpgbs%3d&risl=&pid=ImgRaw&r=0',
    },
    {
      id: 10,
      titulo: 'Matar un ruiseñor',
      autor: 'Harper Lee',
      paginas: 376,
      imagen: 'https://th.bing.com/th/id/OIP.OXGYmlikqb-g8A65288mTAHaK2?pid=ImgDet&rs=1',
    },
  ];

  const resultadoDiv = document.getElementById('resultado8');
  const librosInfo = filtrarTitulosCortos(libros);

  let resultadoHTML = '';
  librosInfo.forEach((libro) => {
    resultadoHTML += `
      <div class="libro">
        <img src="${libro.imagen}" alt="Imagen de ${libro.titulo}">
        <h3>${libro.titulo}</h3>
        <p>Autor: ${libro.autor}</p>
        <p>Páginas: ${libro.paginas}</p>
        <p>Palabras en el título: ${libro.palabrasTitulo}</p>
      </div>
    `;
  });

  resultadoDiv.innerHTML = resultadoHTML;
  resultadoDiv.style.display = 'block';
}