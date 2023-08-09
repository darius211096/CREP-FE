class Animal {
    numberOfLegs;
    #somePrivateProperty;
    
    move() {
        console.log('animal moves');
    }
}

class Tiger extends Animal {
    move() {
        console.log('tiger moves');
    }
}

class Elephant extends Animal {
    #height = 200;

    getHeight() {
        return this.#height;
    }

    move() {
        console.log('elephant moves');
    }
}

const tiger = new Tiger();
const elephant = new Elephant();

tiger.move();
elephant.move();
console.log(elephant.getHeight());
// console.log(elephant.#height);