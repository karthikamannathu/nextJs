let name = {
    firstname: "kathika",
lastname:"krishnankutty"
}

let printName = function () {
    console.log(this.firstname +" " + this.lastname)
}
let printmyName = printName.bind(name);
printmyName();


    function.prototype.mybind = function(){
this
    }


let printmyName2= printName.mybind(name);
printmyName();