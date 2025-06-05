class animal{
    constructor(){
        console.log("bana lo bhai objects")
    }
    eats(){
        console.log("ab khao khana")
    }
    jumps(){
        console.log("kood raha hun ab")
    }
}

class lion extends animal{
    constructor(name){
        super(name)
        console.log("chillao bhai")
    }
    eats(){
        console.log("khata hun bhai nonveg")
    }
    jumps(){
        console.log("ku d nhi paunga ab")
    }
}
let a = new animal()
console.log(a)
let b = new lion("simba")
console.log(b)