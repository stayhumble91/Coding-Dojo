var Todd= {
    name:"Todd",
    sayName: function(){
        console.log("Todd");
    }
}

Todd.sayName();

function NewPerson(){
    return {
        name:name,
        sayName: function(){
            console.log(name);
        }

    }
}

var Jay = NewPerson("Jay");
var Sara = NewPerson("Sara");
Jay.sayName();
Sara.sayName();

