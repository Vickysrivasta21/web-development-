var stdnames = ["avnish","sonal","gulshan","aryan","pulkit","nanditanayan","kailsahnathan","om","aditya","siddarth","krsubramaniyam"]
let gryfindoor = []
let f = 0;
let g = 0
let h = 0
let i = 0;
let slytherin = []
let hufflepuff =[]
let ravenclaw = []

function assignhouse(ar){
    for (let index = 0; index < ar.length; index++) {
        const element = ar[index];
        if(element.length<6)
        {
            gryfindoor[f++] = element
        }
        else if(element.length>=6&&element.length<8)
        {
            hufflepuff[g++] = element;
        }
        else if(element.length>=8&&element.length<12)
        {
            ravenclaw[h++] = element;
        }
        else{
            slytherin[i++] = element;
        }
    }
    console.log("following houses have been assigned to the students : ")
    console.log("gryfindoor : ",gryfindoor)
    console.log("hufflepuff:", hufflepuff)
    console.log("ravenclaw", ravenclaw)
    console.log("slytherin", slytherin)
}
assignhouse(stdnames)