let numero = 0
input.onGesture(Gesture.Shake, function () {
    basic.clearScreen()
    numero = randint(0, 4)
    if (numero == 1) {
        basic.showIcon(IconNames.Happy)
    } else if (numero == 2) {
        basic.showIcon(IconNames.Sad)
    } else if (numero == 3) {
        basic.showIcon(IconNames.Surprised)
    } else if (numero == 4) {
        basic.showIcon(IconNames.Asleep)
    } else {
        basic.showIcon(IconNames.Silly)
    }
})
