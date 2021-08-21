input.onButtonPressed(Button.A, function () {
    basic.showNumber(input.magneticForce(Dimension.Strength))
})
input.onButtonPressed(Button.B, function () {
    input.calibrateCompass()
})
basic.forever(function () {
    music.ringTone(input.magneticForce(Dimension.Strength))
})
