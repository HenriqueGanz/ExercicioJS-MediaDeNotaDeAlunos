
let student = prompt("Qual o nome do aluno?")

let note1 = prompt("Qual foi a nota da sua primeira prova?")
let note2 = prompt("Qual foi a nota da sua segunda prova?")
let note3 = prompt("Qual foi a nota da sua terceira prova?")

note1 = Number(note1)
note2 = Number(note2)
note3 = Number(note3)

let average = ((note1 + note2 + note3) / 3)

average = average.toFixed(2)

let result = average > 6

if(result) { //se for verdadeiro (maior que 6)
    alert("Parabéns " + student + "!" + " Você foi aprovado, e sua média foi de " + average)

} else { //se for falso (menor que 6)
    alert(student + ", infelizmente sua média foi de " + average + " e não foi o suficiente para passar, estude mais!")

}
