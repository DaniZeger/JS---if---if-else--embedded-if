var age = prompt("Hi, please anter your age");

if (age >= 18){
    console.log("Welcome");
    var meatEater = prompt("Do you eat meat?" , "Yes/No");
    if (meatEater == "Yes"){
        // var meatEater = true;
        console.log("Our gust eat meat");
        var hanger = prompt("Are you hangry?" , "Yes/No")
        if(hanger == "Yes"){
            // var hanger = true;
            console.log("Let's give him some shniztel with rise");
        }else{
            console.log("Ok. Only shnitzel than");
        }
    }else{
        console.log("Let's give home some pasta");
    }

}else{
    console.log("Sorry, you can't come in");
}