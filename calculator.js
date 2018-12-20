
var entries = " ";

$("#clear").click(function() {
        $("#display").text( " " );
        entries = " ";
    });
//this function clears the entries array and display input
function insert(num) {
    $("#display").text(num);
    entries += num; //adding number parameter and setting it equal to entries so that it adds to entries string
} 

console.log(entries)

//now need to make a function that does the math when = is clicked
function doTheMath(str) { //entries is the string entered in the html file
            let answer = eval(str);
            $("#display").text(answer);
        }


//started with this:
// $("#clear").click(function() {
//     $("#display").text( " " );
//     entries = []
// }); //makes entries back to empty when clicked

// $("#decimal").click(function() {
//     $("#display").text( "." );
//     entries.push(".");
//     $("#display").text(entries);
// }); //entries needs to display in input box without commas between them

// $("#divide").click(function() {
//     $("#display").text( "/" );
//     entries.push("/");
//     $("#display").text(entries);
// });

// $("#add").click(function() {
//     $("#display").text( "+" );
//     entries.push("+");
//     $("#display").text(entries);
// });

// $("#subtract").click(function() {
//     $("#display").text( "-" );
//     entries.push("-");
//     $("#display").text(entries);
// });

// $("#multiply").click(function() {
//     $("#display").text( "*" );
//     entries.push("*");
//     $("#display").text(entries);
// });


// $("#zero").click(function() {
//     $("#display").text( "0" );
//     entries.push(0)
//     $("#display").text(entries);
// });

// $("#one").click(function() {
//     $("#display").text( "1" );
//     entries.push(1);
//     $("#display").text(entries);
// });


// $("#two").click(function() {
//     $("#display").text( "2" );
//     entries.push(2);
//     $("#display").text(entries);
// });

// $("#three").click(function() {
//     $("#display").text( "3" );
//     entries.push(3);
//     $("#display").text(entries);
// });

// $("#four").click(function() {
//     $("#display").text( "4" );
//     entries.push(4);
//     $("#display").text(entries);
// });

// $("#five").click(function() {
//     $("#display").text( "5" );
//     entries.push(5);
//     $("#display").text(entries);
// });

// $("#six").click(function() {
//     $("#display").text( "6" );
//     entries.push(6);
//     $("#display").text(entries);
// });

// $("#seven").click(function() {
//     $("#display").text( "7" );
//     entries.push(7);
//     $("#display").text(entries);
// });

// $("#eight").click(function() {
//     $("#display").text( "8" );
//     entries.push(8);
//     $("#display").text(entries);
// });

// $("#nine").click(function() {
//     $("#display").text( "9" );
//     entries.push(9);
//     $("#display").text(entries);
// });

// $("#equals").click(function() {
//     $("#display").text( "=" );
//     entries.push("=");
//     $("#display").text(entries);
// });