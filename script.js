class Pet {
  constructor(animal, age, breed, sound) {
    this.animal = animal;
    this.age = age;
    this.breed = breed;
    this.sound = sound;
  }

  get activity() {
    const today = new Date();
    const hour = today.getHours();
    if (hour > 8 && hour <= 20) {
      return 'playing!';
    } else {
      return 'sleeping!';
    }
  }

  get owner() {
    return this._owner
  }

  set owner(owner) {
    this._owner = owner;
    console.log(`setter called: ${owner}`)
  }

  speak() {
    console.log(this.sound);
  }
}

class Owner {
  constructor(name, address) {
    this.name = name;
    this.address = address;
  }

  set phone(phone) {
    const phoneNormalized = phone.replace(/[^0-9]/g, '');
    this._phone = phoneNormalized;
  }

  get phone() {
    return this._phone;
  }
}


const denis = new Pet('dog', 20, 'border collie', 'woof');
const shaun = new Pet('super dog', 27, 'german shepherd', 'WHAT DOES THE FOX SAY');

console.log(denis);
denis.speak();
console.log(shaun);
shaun.speak();
console.log(shaun.activity);
shaun.owner = new Owner('Jeff', 'Kelvin Grove');
shaun.owner.phone = "0033-2234-66555"
console.log(shaun.owner);
console.log(shaun.owner.phone);
