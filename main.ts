let startTime = 0
let buttonPressed = false
let molePosition = 0
basic.showString("3-2-1")
let gameRunning = true
while (gameRunning) {
    molePosition = randint(0, 1)
    buttonPressed = false
    basic.pause(300)
    if (molePosition == 0) {
        basic.showLeds(`
            # . . . .
            # . . . .
            # . . . .
            . . . . .
            # . . . .
            `)
    } else {
        basic.showLeds(`
            . . . . #
            . . . . #
            . . . . #
            . . . . .
            . . . . #
            `)
    }
    startTime = input.runningTime()
    while (buttonPressed == false) {
        if (input.runningTime() - startTime > 1000) {
            game.gameOver()
        }
        if (molePosition == 0 && input.buttonIsPressed(Button.A)) {
            buttonPressed = true
            basic.showLeds(`
                . . . . .
                . . . . #
                . . . # .
                # . # . .
                . # . . .
                `)
            game.addScore(1)
        } else if (molePosition == 0 && input.buttonIsPressed(Button.B)) {
            buttonPressed = true
            game.gameOver()
        }
        if (molePosition == 1 && input.buttonIsPressed(Button.B)) {
            buttonPressed = true
            basic.showLeds(`
                . . . . .
                . . . . #
                . . . # .
                # . # . .
                . # . . .
                `)
            game.addScore(1)
        } else if (molePosition == 0 && input.buttonIsPressed(Button.A)) {
            buttonPressed = true
            game.gameOver()
        }
    }
}
