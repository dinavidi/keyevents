function Game() {
    this.x = 200;
    this.y = 200;
    this.side = 39
    this.apple = {}

    this.createApple = () => {
        let x = Math.floor(Math.random() * 530) + 35
        let y = Math.floor(Math.random() * 530) + 35
        this.apple.x = x;
        this.apple.y = y
    }

    this.moveUp = () => this.y -= 2
    this.moveLeft = () => this.x -= 2
    this.moveRight = () => this.x += 2
    this.moveDown = () => this.y += 2

    this.move = (context) => {
        this.erase(context)
        switch (this.side) {
            case 37: this.moveLeft();
                break;
            case 38: this.moveUp();
                break;
            case 39: this.moveRight();
                break;
            case 40: this.moveDown();
                break;
        }
        //check if the apple is in the circle
        //if yes
        //create a new apple
        //and draw it
        //and get points 
        this.draw(context)
    }
    this.erase = context => {
        context.clearRect(this.x - 26, this.y - 26, 52, 52)
    }
    this.draw = (context) => {

        context.beginPath()
        context.fillStyle = "turquoise"

        context.arc(this.x, this.y, 25, 0, Math.PI * 2)

        context.fill()
        context.closePath()
    }

    this.drawApple = context => {
        context.beginPath()
        context.fillStyle = "red"
        context.arc(this.apple.x, this.apple.y, 10, 0, 2 * Math.PI)
        context.fill()
        context.closePath()
    }
}


let g = new Game()

function getKey() {
    console.log(event)
    if (event.type == 'keypress') {
        document.querySelector('#selectedKey').innerHTML = event.keyCode + " " + event.key
    }
}


function drawCircle() {
    let can = document.querySelector('#cnv')
    let context = can.getContext('2d')
    g.draw(context);
    g.createApple()
    g.drawApple(context)
}

let timer
function startGame() {
    timer = setInterval(() => g.move(document.querySelector('#cnv').getContext('2d')), 16)
    window.addEventListener('keydown', () => {
        g.side = event.keyCode
    })
}
