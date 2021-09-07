// soal 1

// Release 0
class Animal {
  constructor(name, legs = 4, cold_blooded = false) {
    this._name = name;
    this._legs = legs;
    this._cold_blooded = cold_blooded;
  }
  get name() {
    return this._name;
  }
  get legs() {
    return this._legs;
  }
  get cold_blooded() {
    return this._cold_blooded;
  }
  set legs(legs) {
    this._legs = legs;
  }
}

var sheep = new Animal("shaun");

console.log(sheep.name); // "shaun"
console.log(sheep.legs); // 4
console.log(sheep.cold_blooded); // false
sheep.legs = 3;
console.log(sheep.legs);

// Release 1
class Frog extends Animal {
  constructor(name) {
    super(name);
  }
  jump() {
    console.log("hop hop");
  }
}

class Ape extends Animal {
  constructor(name) {
    super(name, 2);
  }
  yell() {
    console.log("Auooo");
  }
}

var sungokong = new Ape("kera sakti");
sungokong.yell(); // "Auooo"
sungokong.legs = 2;
console.log(sungokong.name);
console.log(sungokong.legs);
console.log(sungokong.cold_blooded);

var kodok = new Frog("buduk");
kodok.jump(); // "hop hop"
console.log(kodok.name);
console.log(kodok.legs);
console.log(kodok.cold_blooded);

// soal 2

class Clock {
  constructor({ template }) {
    this.template = template;
    this.timer;
  }
  render = () => {
    let date = new Date();

    let hours = date.getHours();
    if (hours < 10) hours = "0" + hours;

    let mins = date.getMinutes();
    if (mins < 10) mins = "0" + mins;

    let secs = date.getSeconds();
    if (secs < 10) secs = "0" + secs;

    let output = this.template
      .replace("h", hours)
      .replace("m", mins)
      .replace("s", secs);

    console.log(output);
  };
  stop = () => {
    clearInterval(this.timer);
  };
  start = () => {
    this.render();
    this.timer = setInterval(this.render, 1000);
  };
}

var clock = new Clock({ template: "h:m:s" });
clock.start();
