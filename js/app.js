
class Tomagotchi {
    constructor(tomagotchisName) {
        this.name = tomagotchisName;
        this.age = 0;
        this.hunger = 0;
        this.sleep = 0;
        this.boredom = 0;
        this.isAlive = true
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
    lightsOn: true,
    lightOff: true,

    setTimer() {
        setInterval(() => {
            const $clock = $('#clock')
            this.time++
            $clock.text(`Timer: ${this.time}s`)
            this.tomagotchisUpdate()
            this.stages()
        }, 1000)
    },
    setHunger() {
        const hungerClock = setInterval(() => {
            if (this.tomagotchis[0].hunger === 10) {
                this.tomagotchis[0].isAlive = false
                alert ("Ohh boy...RIP!")
                clearInterval(hungerClock)
            }
            const $hunger = $('#hunger')
            this.tomagotchis[0].hunger++
            $hunger.text(`Hunger: ${this.tomagotchis[0].hunger}`)
            if (this.tomagotchis[0].hunger === 8) { 
                alert("Better feed me!")
            }
        }, randomNumber(5000,7000))
    },
    setBoredom() {
        const boredomClock = setInterval(() => {
            if (this.tomagotchis[0].boredom === 10) {
                this.tomagotchis[0].isAlive = false
                alert ("Ohh boy...RIP from boredom!")
                clearInterval(boredomClock)
            }
            const $boredom = $('#boredom')
            this.tomagotchis[0].boredom++
            $boredom.text(`Boredom: ${this.tomagotchis[0].boredom}`)
            if (this.tomagotchis[0].boredom === 8) {
                alert("Uhhh I'm getting bored!")
            }
        }, randomNumber(6000,9000))
    },
    setSleep() {
        const sleepClock = setInterval(() => {
            if (this.tomagotchis[0].sleep === 10) {
                this.tomagotchis[0].isAlive = false
                alert ("I'm sleep deprived!...RIP")
                clearInterval(sleepClock)
            }
            const $sleep = $('#sleep')
            this.tomagotchis[0].sleep++
            $sleep.text(`Sleepiness: ${this.tomagotchis[0].sleep}`)
            if (this.tomagotchis[0].sleep === 8) {
                alert("I'm...getting...tired")
            }
        }, randomNumber(6000,12000))
    },
    setAge() {
        const ageClock = setInterval(() => {
            if (this.tomagotchis[0].age === 10) {
                this.tomagotchis[0].isAlive = false
                alert("Im out...")
                clearInterval(ageClock)
            }
            const $age = $('#age')
            this.tomagotchis[0].age++
            $age.text(`Age: ${this.tomagotchis[0].age}`)
            if (this.tomagotchis[0].age === 10) {
            }
        }, randomNumber(3000,5000))
    },
    tomagotchisUpdate() {
        for(let i = 0; i < this.tomagotchis.length; i++) {
        }
    },
    stages() {
        if (this.tomagotchis[0].age >= 0) {
            $("#roger").attr("src", "https://media0.giphy.com/media/Trnb5gP08uZYQ/giphy.gif?cid=790b7611783520bc96cef67741286925599b7bc0b1c408a3&rid=giphy.gif")
        }
        if (this.tomagotchis[0].age >= 3) { 
            $("#roger").attr("src", "https://media2.giphy.com/media/DLFwZdPo8cgKY/giphy.gif")
        }
        if (this.tomagotchis[0].age >= 7) {
            $("#roger").attr("src", "https://media2.giphy.com/media/XuApq8Jm12KIw/giphy.gif")
        }
        if (this.tomagotchis[0].age >= 10) {
            $("#roger").attr("src", "https://media1.giphy.com/media/VmNigSy0UENPy/giphy.gif?cid=790b7611785f46139eb40e52492f3d3df95d67a5fc6906f7&rid=giphy.gif")
        }
    }
}

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function death() {
    clearInterval(game)
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

$('.buttons').on('click',(e) => {
    if($(e.target).text() === "Flip light-switch"){
        if(game.lightsOn) {
            game.lightsOn = false
            $('body').attr('class', 'lights-off')
        } else if(game.lightsOff) 
            game.lightsOff = true
            $('body').attr('class', 'lights-off')
        }
    
})

const morty = new Tomagotchi('Morty', 3);
game.tomagotchis.push(morty)
game.setTimer()
game.setHunger()
game.setBoredom()
game.setSleep()
game.setAge()
