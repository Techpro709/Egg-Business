// JavaScript source code
var bank = localStorage.getItem("bankValue");;
var input = document.getElementById('input');
function count() {
    //clear console
    console.clear()
    //button pushed 
    console.log("Recive has been pushed");
    //what is inputvalue

    var inputValue = input.value;
    //telling user what bank,inputvalue and new bank is
    console.log(bank);
    console.log("Input value is equal to " + inputValue);
    bank += inputValue;
    console.log("Updated");
    console.log("bank = " + bank);
    // updating localStorage

    // Check browser support
    if (typeof (Storage) !== "undefined") {
        // Store
        localStorage.setItem("bankValue", bank);
        // Retrieve
        document.getElementById("bank_value").innerHTML = localStorage.getItem("bankValue");
    } else {
        document.getElementById("bank_value").innerHTML = "Sorry, your browser does not support Web Storage...";
    }
}
function display() {
    document.getElementById("bank_value").innerHTML = localStorage.getItem("bankValue");

}
function reset() {
    bank = 0;
}