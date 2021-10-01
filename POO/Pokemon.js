class Pokemon {
    /*
         Gracias a las nuevas especificaciones de JavaScript podemos
         utilizar el "#" para indicar que un atributo o método es privado,
         evitando el acceso desde fuera de la clase.
     */
     #name = ""; 
     #type = ""
     #evolutions = [];

    /*
         Desde el constructor podemos inicializar los atributos
         de la clase Pokémon.
     */
     constructor(name, type, evolutions) {
         // Se utilizan los métodos propios de la clase 
         // para modificar sus atributos. 
         this.#name = name;
         this.#type = type;
         this.#evolutions = evolutions;
     }

    /*
         En JavaScript podemos utilizar la propiedad llamada "set"
         la cual permite definir un método que solo recibe un parámetro
         y nunca tiene retorno, en este ejemplo nos permite modificar 
         los atributos de la clase.
     */
     set name(name) {
        this.#name = name;
     }

    set type(type) {
        this.#type = type;
    }

    set evolutions(evolutions) {
        this.#evolutions = evolutions;
    }

    /*
        En JavaScript podemos utilizar la propiedad llamada "get" 
        la cual nos permite definir un método que no recibe parámetros
        y siempre tiene retorno, en este ejemplo nos permite consultar 
        los atributos de la clase.
     */
     get name() {
        return this.#name;
    }

    get type() {
        return this.#type;
    }

    get evolutions() {
        return this.#evolutions;
    }

    /*
        Listado de métodos propios de la clase Pokémon
    */

    attack() {
        return `${this.name}, esta atacando`;
    }

    evolve(evolution = 0) {
        const EVOLVE = this.evolutions[evolution] || "";
        let message = "No puedo evolucionar";
        if (EVOLVE) {
            message = `${this.name} esta evolucionando a ${EVOLVE}`;
            this.name = EVOLVE;
        }
        return message;
     }
}

//Herencia
class TypeFire extends Pokemon { //esta heredando de Pokemon
    
    constructor(name, evolutions){

        super(name, 'fire', evolutions) 
    }
    message() {
        return `Hola, soy ${this.name} y soy de tipo fuego`
    }

}

const charmander = new TypeFire('Chramander', ['Charmeleon','charizard']);
charmander.name = 'Obito'
console.log(charmander.message())




/* class Pokemon {
constructor (name, type, evolutions) {
    this.#name = name,
    this.#type = type,
    this.#evolutions = evolutions
}
    set name(name){
    this.#name= name
}
    set type(type){
    this.#type=type
}
    set evolutions(evolutions){
    this.#evolutions=evolutions
}
get name(){   //solo va a devolver el valor, no necesita parametros
    return this.#name
}
get type(){
    return this.#type
}
get evolutions(){
    return this.#evolutions;
}
    attack() {                                                                      //metodo
        return `${this.#name}, esta atacando`
}


    evolve(evolution=0) {                                                           //metodo
        //valida que la opion exista
        const EVOLVE = this.#evolutions[evolution] || '';
        let message = 'No puedo evolucionar'

        if(EVOLVE){
            message = `${this.#name} esta evolucionando a ${EVOLVE}`
            this.#name = EVOLVE
        }
        return message
    }
}
 */

/* const Charmander = new Pokemon ('Charmander', 'Fuego', ['charmeleon', 'charizard']); 

const Squirtle = new Pokemon ('Squirtle', 'water', ['Watortle', 'Blastoise'])

console.log(`${Squirtle.name} es de tipo ${Squirtle.type}`)
console.log(Squirtle.attack())
console.log(Squirtle.evolve(0))
console.log(`${Squirtle.name} es de tipo ${Squirtle.type}`) */

//encapsulamiento: ocultacion de datos: metodos set(#) y get


