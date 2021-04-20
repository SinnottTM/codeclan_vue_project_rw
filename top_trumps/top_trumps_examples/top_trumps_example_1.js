// from https://github.com/GF-01161999/Top-Trumps-Game/blob/master/topTrumps.js

let cards = [

]


let p1Cards = [
    { index: 2, name: "BMW M4 F82", to60: 3.8, newPrice: 62300, coolFactor: 6, topSpeed: 190, img: 'F82M4.jpg' },
    { index: 4, name: "Fiesta ST MK8", to60: 6.5, newPrice: 23000, coolFactor: 5, topSpeed: 144, img: 'MK8ST.jpg' },
    { index: 5, name: "Audi RS3 8", to60: 4.1, newPrice: 45290, coolFactor: 3, topSpeed: 180, img: 'RS38V.jpg' },
    { index: 7, name: "Honda NSX", to60: 4.1, newPrice: 1430000, coolFactor: 8, topSpeed: 191.4, img: 'NSX.jpg' },
    { index: 9, name: "Mercedes A35 AMG", to60: 4.6, newPrice: 35920, coolFactor: 5, topSpeed: 155.3, img: 'A35AMG.png' },
    { index: 10, name: "Mercedes C63 AMG", to60: 3.8, newPrice: 78023, coolFactor: 7, topSpeed: 190, img: 'C63AMG.jpg' },
    { index: 14, name: "Ford Focus RS MK3", to60: 4.5, newPrice: 35000, coolFactor: 4.5, topSpeed: 165, img: 'FOCUSRS.jpg' },
    { index: 18, name: "Vauxhall Corsa VXR", to60: 7.1, newPrice: 20600, coolFactor: 0.5, topSpeed: 143, img: 'CORSAVXR.jpg' },
    { index: 22, name: "Jaguar F-Type R", to60: 3.6, newPrice: 111115, coolFactor: 8.5, topSpeed: 200, img: 'FTYPER.jpg' },
    { index: 24, name: "BMW M2 Competition Pack", to60: 4.4, newPrice: 49805, coolFactor: 8.5, topSpeed: 170, img: 'M2COMP.jpg' },
    { index: 25, name: "Peugeot 208 GTI", to60: 6.5, newPrice: 22184, coolFactor: 2, topSpeed: 143, img: '208GTI.jpg' },
    { index: 26, name: "Volkswagen Golf GTI Clubsport", to60: 5.9, newPrice: 30875, coolFactor: 4, topSpeed: 156, img: 'GTICLUBSPORt1.jpg' },
    { index: 27, name: "Kia Stinger GT", to60: 4.7, newPrice: 30970, coolFactor: 4, topSpeed: 167, img: 'STINGERGT.jpg' },
    { index: 28, name: "Mercedes G Class AMG", to60: 4.4, newPrice: 140520, coolFactor: 1, topSpeed: 186, img: 'G62AMG.jpg' },
    { index: 29, name: "Porsche 718 Cayman", to60: 4.9, newPrice: 53746, coolFactor: 5.5, topSpeed: 170, img: '718CAYMAN.jpg' },
];

let p2Cards = [
    { index: 1, name: "BMW M3 F80", to60: 4.1, newPrice: 59860, coolFactor: 8, topSpeed: 189, img: 'F80M3.jpg' },
    { index: 3, name: "Alfa Romeo Giulia Quadrifoglio", to60: 3.6, newPrice: 62924, coolFactor: 10, topSpeed: 190.8, img: 'ALFAGIULIA.jpg' },
    { index: 6, name: "Nissan GT-R V Spec", to60: 2.9, newPrice: 81505, coolFactor: 10, topSpeed: 200, img: 'R35.jpg' },
    { index: 8, name: "Golf R", to60: 4.5, newPrice: 35125, coolFactor: 6, topSpeed: 168, img: 'GOLFR.jpg' },
    { index: 11, name: "Mitsubishi Evo X", to60: 4.4, newPrice: 35000, coolFactor: 4, topSpeed: 146, img: 'EVOX.jpeg' },
    { index: 12, name: "Subaru Impreza Final Edition", to60: 5.2, newPrice: 34000, coolFactor: 8, topSpeed: 158, img: 'IMPREZA.jpg' },
    { index: 16, name: "Volkswagen Polo GTI", to60: 6.7, newPrice: 21660, coolFactor: 2.5, topSpeed: 147, img: 'POLOGTI.jpg' },
    { index: 21, name: "Jaguar F-Pace R", to60: 4.3, newPrice: 73145, coolFactor: 5, topSpeed: 175.8, img: 'FPACE.jpg' },
    { index: 30, name: "Toyota GR Supra", to60: 3.8, newPrice: 51384, coolFactor: 10, topSpeed: 163, img: 'GRSUPRA.jpg' },
    { index: 23, name: "Alfa Romeo Mito Cloverleaf", to60: 7.5, newPrice: 17895, coolFactor: 6, topSpeed: 136, img: 'MITO.jpg' },
    { index: 19, name: "Landrover Rangerover SVR", to60: 4.3, newPrice: 99620, coolFactor: 10, topSpeed: 175.8, img: 'SVR.jpg' },
    { index: 17, name: "Vauxhall Astra GTC VXR", to60: 5.9, newPrice: 26995, coolFactor: -1, topSpeed: 155, img: 'GTCVXR.jpg' },
    { index: 20, name: "Honda Civic Type R", to60: 5.2, newPrice: 29985, coolFactor: 3.5, topSpeed: 169, img: 'CIVIC.jpg' },
    { index: 13, name: "Ford Mustang 5.0", to60: 4.1, newPrice: 40830, coolFactor: 1, topSpeed: 180, img: 'MUSTANG.jpeg' },
    { index: 15, name: "Abarth 500 695 Biposto", to60: 4.1, newPrice: 33055, coolFactor: 4, topSpeed: 151, img: '695BIPOSTO.jpg' },
];

const to60Btn = document.getElementById("to60-btn");
const topSpeedBtn = document.getElementById("top-speed-btn");
const coolBtn = document.getElementById("cool-factor-btn");
const priceBtn = document.getElementById("price-btn");
const msgDisplay = document.getElementById("message-display");
const reset = document.getElementById("reset-btn");
const p1ScoreDisplay = document.getElementById("p1-score");
const p2ScoreDisplay = document.getElementById("p2-score");
let p1CardDisplay = document.getElementById("p1-card-pic");
let cpuCardDisplay = document.getElementById("cpu-card-pic");


// Player 1 & 2 score 
let p1Score = 0;
let p2Score = 0;

// Array of cards for each player
let p1Current = []
let p2Current = []


// Current card function which is going to be called back in the top comparison function
function currentCard() {
    let p1 = Math.floor((Math.random() * p1Cards.length))
    let p2 = Math.floor((Math.random() * p2Cards.length))
    p1Current.push(p1Cards.splice(p1, 1)[0]);
    p2Current.push(p2Cards.splice(p2, 1)[0]);
    p1CardDisplay.src = `images/${p1Current[0].img}`
    cpuCardDisplay.src = `images/${p2Current[0].img}`
    console.log(`My current p1Card is ${p1Current[0].name}`)
    console.log(`My current p2Card is ${p2Current[0].name}`)
    console.log(p1Cards.length)
    console.log(p2Cards.length)
};

reset.addEventListener("click", () => {
    p1Score = 0;
    p2Score = 0;
    msgDisplay.style.display = "none"
    currentCard();
})

to60Btn.addEventListener("click", () => {
    console.log(p1Current[0].to60)
    console.log(p2Current[0].to60)

    if (p1Current[0].to60 < p2Current[0].to60) {
        p1Score += 1
        p1ScoreDisplay.textContent = `Player one score: ${p1Score}`
        p1Cards.push(p2Current.splice(0, 1)[0])
        p1Cards.push(p1Current.splice(0, 1)[0])
        msgDisplay.textContent = `Player one wins the round!`
        setTimeout(() => {
            msgDisplay.style.display = "none";
        }, 2000);
        playGame()
    } else if (p2Current[0].to60 < p1Current[0].to60) {
        p2Score += 1
        p2ScoreDisplay.textContent = `Player two score: ${p2Score}`
        p2Cards.push(p1Current.splice(0, 1)[0])
        p2Cards.push(p2Current.splice(0, 1)[0])

        playGame()
    } else {
        msgDisplay.textContent = `This round is a tie!`
        p1Cards.push(p1Current.splice(0, 1)[0])
        p2Cards.push(p2Current.splice(0, 1)[0])
        playGame()
    }
})

topSpeedBtn.addEventListener("click", () => {
    if (p1Current[0].topSpeed > p2Current[0].topSpeed) {
        p1Score += 1
        p1ScoreDisplay.textContent = `Player one score: ${p1Score}`
        p1Cards.push(p2Current.splice(0, 1)[0])
        p1Cards.push(p1Current.splice(0, 1)[0])
        playGame()
    } else if (p2Current[0].topSpeed > p1Current[0].topSpeed) {
        p2Score += 1
        p2ScoreDisplay.textContent = `Player two score: ${p2Score}`
        p2Cards.push(p1Current.splice(0, 1)[0])
        p2Cards.push(p2Current.splice(0, 1)[0])
        playGame()
    } else {
        msgDisplay.textContent = `This round is a tie!`
        p1Cards.push(p1Current.splice(0, 1)[0])
        p2Cards.push(p2Current.splice(0, 1)[0])
        playGame()
    }
})

coolBtn.addEventListener("click", () => {
    if (p1Current[0].coolFactor > p2Current[0].coolFactor) {
        p1Score += 1
        p1ScoreDisplay.textContent = `Player one score: ${p1Score}`
        p1Cards.push(p2Current.splice(0, 1)[0])
        p1Cards.push(p1Current.splice(0, 1)[0])
        playGame()
        // Eliminate player two's current card and give it to player one
    } else if (p2Current[0].coolFactor > p1Current[0].coolFactor) {
        p2Score += 1
        p2ScoreDisplay.textContent = `Player two score: ${p2Score}`
        p2Cards.push(p1Current.splice(0, 1)[0])
        p2Cards.push(p2Current.splice(0, 1)[0])
        playGame()
        // Eliminate player one's current card and give it to player two
    } else {
        msgDisplay.textContent = `This round is a tie!`
        p1Cards.push(p1Current.splice(0, 1)[0])
        p2Cards.push(p2Current.splice(0, 1)[0])
        playGame()
    }
})

// CONSOLE.LOG EACH AND EVERY STEP IN THE PROCESS OF A BTN CLICK.
priceBtn.addEventListener("click", () => {
    if (p1Current[0].newPrice > p2Current[0].newPrice) {
        p1Score += 1
        p1ScoreDisplay.textContent = `Player one score: ${p1Score}`
        p1Cards.push(p2Current.splice(0, 1)[0])
        p1Cards.push(p1Current.splice(0, 1)[0])
        playGame()
        // Eliminate player two's current card and give it to player one
    } else if (p2Current[0].newPrice > p1Current[0].newPrice) {
        p2Score += 1
        p2ScoreDisplay.textContent = `Player two score: ${p2Score}`
        p2Cards.push(p1Current.splice(0, 1)[0])
        p2Cards.push(p2Current.splice(0, 1)[0])
        playGame()
        // Eliminate player one's current card and give it to player two
    } else {
        msgDisplay.textContent = `This round is a tie!`
        p1Cards.push(p1Current.splice(0, 1)[0])
        p2Cards.push(p2Current.splice(0, 1)[0])
        playGame()
    }
})

const playGame = () => {
    if (p1Cards.length < 30 && p2Cards.length < 30) {
        currentCard();
    } else if (p1Cards.length == 30) {
        msgDisplay.textContent = "Player two wins!"
        reset.style.display = "block"
        to60Btn.style.display = "none"
        topSpeedBtn.style.display = "none"
        coolBtn.style.display = "none"
        priceBtn.style.display = "none"
    } else if (p2Cards.length == 30) {
        msgDisplay.textContent = "Player one wins!"
        reset.style.display = "block"
        to60Btn.style.display = "none"
        topSpeedBtn.style.display = "none"
        coolBtn.style.display = "none"
        priceBtn.style.display = "none"
    }
}

currentCard();