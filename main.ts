let heading = 0
input.calibrateCompass()
basic.forever(function () {
    heading = input.compassHeading()
    if (heading >= 22.5 && heading < 67.5) {
        // Noreste (↗)
        basic.showArrow(ArrowNames.NorthEast)
    } else if (heading >= 67.5 && heading < 112.5) {
        // Este (→)
        basic.showArrow(ArrowNames.East)
    } else if (heading >= 112.5 && heading < 157.5) {
        // Sureste (↘)
        basic.showArrow(ArrowNames.SouthEast)
    } else if (heading >= 157.5 && heading < 202.5) {
        // Sur (↓)
        basic.showArrow(ArrowNames.South)
    } else if (heading >= 202.5 && heading < 247.5) {
        // Suroeste (↙)
        basic.showArrow(ArrowNames.SouthWest)
    } else if (heading >= 247.5 && heading < 292.5) {
        // Oeste (←)
        basic.showArrow(ArrowNames.West)
    } else if (heading >= 292.5 && heading < 337.5) {
        // Noroeste (↖)
        basic.showArrow(ArrowNames.NorthWest)
    } else if (heading >= 337.5 || heading < 22.5) {
        // Norte (↑)
        basic.showArrow(ArrowNames.North)
    } else {
        basic.showIcon(IconNames.SmallDiamond)
        basic.pause(100)
        basic.showIcon(IconNames.Diamond)
        basic.pause(100)
        basic.showIcon(IconNames.Target)
        basic.pause(100)
    }
    basic.pause(500)
})
