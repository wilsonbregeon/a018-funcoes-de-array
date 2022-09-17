const arrayNumeros = [1, 2, 3, 4, 5, 6, 7, 8]
const triplos = []
const metades = []

const num = arrayNumeros.map((numeros) => {
    
    triplos.push(numeros * 3)
    metades.push(numeros / 2)
    
})

console.log(triplos, metades) 