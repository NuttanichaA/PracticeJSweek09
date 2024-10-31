const echo = (x) => x
const y = echo
console.log(y)
console.log(y(10))
console.log(typeof y)
console.log(echo === y)
console.log('------------------')

function x(arg){
    arg.id = 555
}

const std = {id: 1}
x(std)
console.log(std)
console.log('----------------');

const value = 10
function x(num) { // outer func
    const a = 1
    function y(){ // nested func
        const a = 'functional'
        const b = 'JS'          
        return num * value + a + b 
    }
    // return y()
    return y //ตอนนี้ y = closure fn เป็น fn ที่รักษาสถานะของตัวแปรที่อ้างถึงนอก scope ของตัวเอง
    // closure ต้องเป็น 1.nested 2.outer must return nested และ 3.คงสถานะของตัวแปรทุกตัวนอกตัวเอง
}
// nested อ้างตัวแปร global scope และ outer ได้
// การอ้างตัวแปรจะเอาตัวแปรที่ใกล้ที่สุดก่อนเสมอถ้าชื่อซ้ำ
// func ที่อยู่ด้านในสุดจะได้เปรียบ เพราะจะใช้ตัวแปรได้ทุกอย่างเลย
// แต่ outer จะไม่เห็นตัวแปรของ inner
// วิธีที่จะทำให้ สามารถเรียก y ได้โดยไม่ error นอก outer คือ outer ต้องรีเทินฟังก์ชันออกมา
console.log(x(5))
console.log('------------------')

//closure usage
const func = x(5)
console.log(typeof func)
console.log(func()) //50functionalJS
const func2 = x(10)
console.log(func2()) //100functionalJS

console.log('------------------')

function visitor(initial){
    let visit = initial
    function getVistor(){
        return visit
    }
    function incrementVisit(){
        visit += 1
    }
    function decrementVisit(){
        visit -= 1
    }
    return {getVistor, incrementVisit, decrementVisit} //ถ้ามี closure หลายตัวต้อง rturn obj
}

const t = visitor(100)
console.log(t.getVistor())
console.log(t.incrementVisit())
console.log(t.getVistor())
console.log(t.decrementVisit())
console.log(t.getVistor())

console.log('------------------')
//or use destructuring
const {getVistor, incrementVisit:iv, decrementVisit} = visitor(200)
console.log(getVistor())
console.log(iv())
console.log(getVistor())
console.log(decrementVisit())
console.log(getVistor())

console.log('------------------')
//arguments obj
function testArg(a,b,...c){
    console.log(arguments)
    console.log(arguments.length)
    for(const arg of arguments){
        console.log(arg)
    }
    const arrayArg = Array.from(arguments)
    const test = arrayArg.filter((arg) => (typeof arg) === 'number')
    console.log(test)
}
testArg(2,10,{id: 1, name: 'Somchai'},'apple',25)
console.log('----------------')
let testG = 1
function plusOne(){
    testG++
}
plusOne()
console.log(testG);