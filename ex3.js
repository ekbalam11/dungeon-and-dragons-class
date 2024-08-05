class Character {
    constructor(name, attackPower, intelligence, hitPoints) {
        this.name = name;
        this.attackPower = attackPower;
        this.intelligence = intelligence;
        this.hitPoints = hitPoints;
        this.level = 0;
    }

    // Método para subir de nivel
    levelUp() {
        this.level += 1;
    }

    // Método para recibir daño
    receiveDamage(damage) {
        this.hitPoints -= damage;
    }

    // Método para verificar si el personaje está vivo
    isAlive() {
        return this.hitPoints > 0;
    }

    // Método estático para comparar niveles de dos personajes
    static compareLevels(character1, character2) {
            if (character1.level > character2.level) {
                return 1;
            } else if (character1.level < character2.level) {
                return -1;
            } else {
                return 0;
            }
        }
}

// Definición de la subclase Warrior
class Warrior extends Character {
    constructor(name, attackPower, intelligence, hitPoints) {
        // Sumar +1 a los puntos de vida antes de llamar al constructor de la clase base
        super(name, attackPower, intelligence, hitPoints + 1);
    }

    // Método exclusivo para el guerrero: strongAttack
    strongAttack() {
        // Calcula un número aleatorio entre 0 y attackPower y lo multiplica por 2
        const damage = Math.floor(Math.random() * this.attackPower * 2);
        return damage;
    }
}

// Definición de la subclase Healer
class Healer extends Character {
    constructor(name, attackPower, intelligence, hitPoints) {
        // Sumar +1 a la inteligencia antes de llamar al constructor de la clase base
        super(name, attackPower, intelligence + 1, hitPoints);
    }

    // Método exclusivo para el curandero: heal
    heal() {
        // Calcula un número aleatorio entre 0 y intelligence y lo multiplica por 2
        const healing = Math.floor(Math.random() * this.intelligence * 2);
        return healing;
    }
}

// Creación de un guerrero y un curandero
const warrior = new Warrior("Thor", 10, 5, 20);
const cleverWarrior = new Warrior("Hi-man", 11, 7, 20);
const healer = new Healer("Luna", 3, 8, 15);

// Los personajes suben de nivel
warrior.levelUp();
warrior.levelUp();
cleverWarrior.levelUp();
healer.levelUp();

// Comparamos dos personajes
const comparisonResult = Character.compareLevels(warrior, healer);
console.log(`Comparación de niveles: ${comparisonResult}`); // Debería devolver 1 porque Thor está en nivel 2 y Luna en nivel 1

// Luna sube de nivel
healer.levelUp();
const comparisonResult_2 = Character.compareLevels(warrior, healer);
console.log(`Comparación de niveles: ${comparisonResult_2}`); // Debería devolver 0 porque tienen el mismo nivel

// Luna sube de nivel de nuevo
healer.levelUp();
const comparisonResult_3 = Character.compareLevels(warrior, healer);
console.log(`Comparación de niveles: ${comparisonResult_3}`); // Debería devolver -1 porque Luna tiene más nivel que Thor
