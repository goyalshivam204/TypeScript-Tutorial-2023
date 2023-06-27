// Generate a lots of crazy when converted into .js file
enum SeatChoice {
    AISLE = "AISLE",
    MIDDLE = "MIDDLE", 
    WINDOW = "WINDOW",
    FOURTH = 1,
    FIFTH

}
// Don't generate too much code when converted into .js file
const enum SeatChoiceConst {
    AISLE = "AISLE",
    MIDDLE = "MIDDLE", 
    WINDOW = "WINDOW",
    FOURTH = 1,
    FIFTH
}

const hcSeat = SeatChoice.AISLE;