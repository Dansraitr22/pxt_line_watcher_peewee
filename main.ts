type IRC = {
    l: DigitalPin,
    c: DigitalPin,
    r: DigitalPin
}
const IR: IRC = {
    l: DigitalPin.P14,
    c: DigitalPin.P15,
    r: DigitalPin.P13
}
pins.setPull(IR.l, PinPullMode.PullNone);
pins.setPull(IR.c, PinPullMode.PullNone);
pins.setPull(IR.r, PinPullMode.PullNone);
function online(left: number, rigt: number, center: number) {
    if (left||rigt||center ===1) {
 return true 
    } else{
        return false
    }
}
if (online(IR.l,IR.r,IR.c)) {
    PCAmotor.MotorRun(PCAmotor.Motors.M1, 125)
    PCAmotor.MotorRun(PCAmotor.Motors.M1, 125)
} /*else {
    PCAmotor.MotorStopAll
} */