export class Player {
    constructor(name, level) {
        this.name = name;
        this.level = level;
        this.xp = 0;
        this.xpToLevel = 100;
        this.party = [];
        this.inventory = {};
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

    addToParty(player) {
        this.party.push(player);
    }

    removeFromParty(player) {
        this.party = this.party.filter(member => member !== player);
    }

    addItem(item, quantity = 1) {
        if (this.inventory[item]) {
            this.inventory[item] += quantity;
        } else {
            this.inventory[item] = quantity;
        }
    }

    removeItem(item, quantity = 1) {
        if (!this.inventory[item]) return;
        this.inventory[item] -= quantity;
        if (this.inventory[item] <= 0) {
            delete this.inventory[item];
        }
    }
}