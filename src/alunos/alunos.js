module.exports = {
    soma: notas => {
        if ( Math.min(...notas) ) {
            const result = notas.reduce((acc, nota) => {
                acc += nota > 9 ? (nota * 2) : nota
                return acc
            },0)
            return notas.length > 5 ? (result * 2) : result
        }
        return 0
    }
}