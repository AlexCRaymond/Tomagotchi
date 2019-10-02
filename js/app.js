class Tomagotchi {
    constructor(tomagotchisName, tomagotchisAge) {
        this.name = tomagotchisName;
        this.age = tomagotchisAge;
        this.hunger = 0,
        this.sleep = 0,
        this.boredom = 0
    }
    getHungry() {
        this.hunger++
        const $hunger = $(`#hunger`)
        $hunger.text(`Hunger: ${this.hunger}`)
    }
    getBored() { 
        this.boredom++
        const $boredom = $(`#boredom`)
        $boredom.text(`Boredom: ${this.boredom}`)  
    }
    getSleep() { 
        this.sleep++
        const $sleep = $(`#sleep`)
        $sleep.text(`Sleepiness: ${this.sleep}`)
    }

}
const game = { 
    tomagotchis: [],
    time: 0,
    setTimer() {
        setInterval(() => {
            const $clock = $('#clock')
            this.time++
            $clock.text(`Clock: ${this.time}s`)
            this.tomagotchisUpdate()
        }, 1000)
    },
    tomagotchisUpdate() {
        for(let i = 0; i < this.tomagotchis.length; i++) {
            this.tomagotchis[i].getHungry()
            this.tomagotchis[i].getSleep()
            this.tomagotchis[i].getBored()
        }
    }
}

const rick = new Tomagotchi('Rick', 55);
const morty = new Tomagotchi('Morty', 3);
game.tomagotchis.push(morty)
game.tomagotchis.push(rick)
game.setTimer()










