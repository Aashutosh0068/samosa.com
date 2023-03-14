const Values = {
    statusCodes : null
}

export function setValues(messageCode){
    Values.statusCodes = messageCode
}

export function getValue(){
    return Values.statusCodes
}