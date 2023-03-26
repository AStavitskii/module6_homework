function primeNumber (arg){
    let result 
       
    for (i=2; i < arg; i = i + 1){
        if (arg%i == 0) {
            return result = `${arg} не является простым числом`
            }
        }

    if (arg == 0) {
            result = "0 не является простым числом"
            return result
            }
    if (arg == 1) {
            result = "1 не является простым числом"
            return result
            }
    else{
        return result = `${arg} является простым числом`
    }
}
console.log(primeNumber(17))