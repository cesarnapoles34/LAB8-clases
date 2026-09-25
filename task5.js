export class Player {
    constructor(name, level) {
        this.name = name;
        this.level = level;
        this.xp = 0;
        this.xpToLevel = 100;
    }

    info() {
        return `${this.name} has reached Level ${this.level}!`;
    }

    levelUp() {
        this.level++;
    }

    gainXp(amount) {
        this.xp += amount;
        while (this.xp >= this.xpToLevel) {
            this.xp -= this.xpToLevel;
            this.levelUp();
        }
    }
}