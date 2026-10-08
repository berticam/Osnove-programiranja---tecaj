console.log("datoteka se je odprla")
console.log("4 osnovne operacije ki uporabljata 2 stevili")
/*
Operacije:
sestevanje, odstevanje, mnozenje, deljenje

VHOD: operand1 , operand2 (stevili)
IZHOD:
vsota 
razlika 
zmnozek
kolicnik

PRIMER (testni primer)
oprand1 = 11, operand2 = 22
11+22=33
11-22=-11
11*22=242
11/22=0.5


ROBNI:
operand1 = 0, operand2 = 0
0
0
0
NE OBSTAJA

PSEUDO CODE(ALGORITEM)
// operand1 + operand2 -> vsota
vsota = operand1 + operand2
razlika = operand1 - operand2
zmnozek = operand1 * operand2
kolicnik = operand1 / operand2
*/

operand1 = 11
operand2 = 22
let vsota = operand1 + operand2
let razlika = operand1 - operand2
let zmnozek = operand1 * operand2
let kolicnik = operand1 / operand2

//operacije:
function racunaj(op1, op2) {
let vsota = op1 + op2
let razlika = op1 - op2
let zmnozek = op1 * op2
let kolicnik = op1 / op2

    //obvseti o rezultatih
console.log('te stiri operacije so')
console.log('vsota :', vsota)
    appendToDivAsNewLine('vsota :' + vsota)
console.log('razlika :', razlika)
    appendToDivAsNewLine('razlika :' + razlika)
console.log('zmnozek :', zmnozek)
    appendToDivAsNewLine('zmnozek :' + zmnozek)
console.log('kolicnik :', kolicnik)
    appendToDivAsNewLine('kolicnik :' + kolicnik)

}
function preveriStevilo(idElementa) {
   let elem1 = document.getElementById(idElementa)
    let stevilo = parseInt(elem1.value)
    return stevilo
    
}
function preberiSteviliInRacunaj(op1, op2) {
    elem1 = document.getElementById('input1')
    elem2 = document.getElementById('input2')

    let a = parseInt(elem1.value)
    let b = parseInt(elem2.value)
}
function appendToDivAsNewLine(vrstica){
    let rezElement = document.getElementById('rezultat')
    rezElement.append(vrstica)
    rezElement.append(/n)
}



const pi=3.14
let c = 12
pi = 8
x = 9


// to se ne izvede
//alert('test')
