/* eslint-disable no-restricted-syntax */
/* eslint-disable no-console */

const char = {
  name: 'Лучник',
  type: 'Bowman',
  health: 50,
  level: 1,
  attack: 40,
  defence: 10,
};

class Team {
  constructor() {
    this.team = [];
  }

  add(obj) {
    this.team.push(obj);
    return this;
  }

  [Symbol.iterator]() {
    return {
      allPers: this.team.slice(),
      next() {
        if (this.allPers.length) {
          return { value: this.allPers.shift(), done: false };
        }
        return { done: true };
      },
    };
  }
}

const team = new Team();

team.add(char).add(char).add(char);
console.log(team);

for (const pers of team) {
  console.log(pers);
}
