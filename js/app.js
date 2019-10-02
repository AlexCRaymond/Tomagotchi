

class Tomagotchi {
    constructor(tomagotchisName) {
        this.name = tomagotchisName;
        this.age = 0;
        this.hunger = randomNumber(0,3)
        this.sleep = randomNumber(0,2)
        this.boredom = 0
        
    }
    getAge() {
        this.age++
        const $age = $(`#age`)
        $age.text(`Age: ${this.age}`)
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
    feed() { 
        this.hunger--
        const $hunger = $(`#hunger`) 
        $hunger.text(`Hunger: ${this.hunger}`) 
    }
    sleeper() {
        this.sleep--
        const $sleep = $(`#sleep`) 
        $sleep.text(`Sleepiness: ${this.sleep}`)
    }
    play() {
        this.boredom--
        const $boredom = $(`#boredom`)
        $boredom.text(`Boredom: ${this.boredom}`)
    }
    
}
let start = prompt("Name your Tomagotchi!")
console.log(start)
const petName = new Tomagotchi(start);
const $tama=$('#name')
$tama.text(petName.name)

const game = { 
    tomagotchis: [],
    time: 0,
    setTimer() {
        setInterval(() => {
            const $clock = $('#clock')
            this.time++
            $clock.text(`Timer: ${this.time}s`)
            this.tomagotchisUpdate()
        }, 1000)
    },
    tomagotchisUpdate() {
        for(let i = 0; i < this.tomagotchis.length; i++) {
            this.tomagotchis[i].getHungry()
            this.tomagotchis[i].getSleep()
            this.tomagotchis[i].getBored()
            this.tomagotchis[i].getAge()
        }
    }
}

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

$('.buttons').on('click',(e) => {
    if($(e.target).text() === "Sleep"){
        game.tomagotchis[0].sleeper()
    }
})

$('.buttons').on('click',(e) => {
    if($(e.target).text() === "Feed"){
        game.tomagotchis[0].feed()
    }
})

$('.buttons').on('click',(e) => {
    if($(e.target).text() === "Play"){
        game.tomagotchis[0].play()
    }
})

const morty = new Tomagotchi('Morty', 3);
game.tomagotchis.push(morty)
game.setTimer()










