radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 2) {
        while (receivedNumber == 2) {
            maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 255)
        }
    }
    if (receivedNumber == 3) {
        while (receivedNumber == 3) {
            maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, 255)
        }
    }
    if (receivedNumber == 4) {
        while (receivedNumber == 4) {
            maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 125)
            maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 125)
        }
    }
    if (receivedNumber == 5) {
        while (receivedNumber == 5) {
            maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 125)
            maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, 125)
        }
    }
    if (receivedNumber == 6) {
        maqueen.servoRun(maqueen.Servos.S2, 120)
    }
    if (receivedNumber == 7) {
        maqueen.servoRun(maqueen.Servos.S2, 0)
    }
})
basic.forever(function () {
	
})
