class Tomagotchi {
    constructor(tomagotchisName) {
        this.name = tomagotchisName;
        this.age = 0;
        this.hunger = 0,
        this.sleep = 0,
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



// const rick = new Tomagotchi('Rick', 55);
const morty = new Tomagotchi('Morty', 3);
game.tomagotchis.push(morty)
// game.tomagotchis.push(rick)
game.setTimer()










