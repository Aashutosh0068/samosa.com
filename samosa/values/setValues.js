const Values = {
    statusCodes : 'abc'
}

export function setValues(userState){
    Values.statusCodes = 'Bcd'
}

export function getValue(){
    return Values.statusCodes
}