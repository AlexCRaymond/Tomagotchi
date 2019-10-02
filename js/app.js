
class Tomagotchi {
    constructor(tomagotchisName) {
        this.name = tomagotchisName;
        this.age = 0;
        this.hunger = 0;
        this.sleep = 0;
        this.boredom = 0
    }
    
    feed() { 
        if (this.hunger > 0) { 
            this.hunger--
            const $hunger = $(`#hunger`) 
            $hunger.text(`Hunger: ${this.hunger}`) 
        }
    }
    sleeper() {
        if (this.sleep > 0) {
            this.sleep--
            const $sleep = $(`#sleep`) 
            $sleep.text(`Sleepiness: ${this.sleep}`)
        }    
    }
    play() {
        if (this.boredom > 0) {
            this.boredom--
            const $boredom = $(`#boredom`)
            $boredom.text(`Boredom: ${this.boredom}`)
        }
    }
}

let start = prompt("Name your Tomagotchi!")
const petName = new Tomagotchi(start);
const $toma=$('#name')
$toma.text(petName.name)

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
    setHunger() {
        setInterval(() => {
            const $hunger = $('#hunger')
            this.tomagotchis[0].hunger++
            $hunger.text(`Hunger: ${this.tomagotchis[0].hunger}`)
        }, randomNumber(5000,9000))
    },
    setBoredom() {
        setInterval(() => {
            const $boredom = $('#boredom')
            this.tomagotchis[0].boredom++
            $boredom.text(`Boredom: ${this.tomagotchis[0].boredom}`)
        }, randomNumber(10000,15000))
    },
    setSleep() {
        setInterval(() => {
            const $sleep = $('#sleep')
            this.tomagotchis[0].sleep++
            $sleep.text(`Sleepiness: ${this.tomagotchis[0].sleep}`)
        }, randomNumber(5000,7000))
    },
    setAge() {
        setInterval(() => {
            const $age = $('#age')
            this.tomagotchis[0].age++
            $age.text(`Age: ${this.tomagotchis[0].age}`)
        }, randomNumber(12000,16000))
    },
    tomagotchisUpdate() {
        for(let i = 0; i < this.tomagotchis.length; i++) {
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
game.setHunger()
game.setBoredom()
game.setSleep()
game.setAge()










