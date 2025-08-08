function ValidateForm() {
    // Access the input value correctly
    let x = document.forms["form1"]["Fullname"].value.trim();

    if (x === "") {
        alert("Please enter data.");
        return false; // Prevent form submission
    } else {
        alert("Data entered successfully!");
        return true; // Allow form submission
    }
}


//Number validator

function Validatenum(){
    let y=document.forms["number"]["num"].value;

    if(y>=1&&y<=10){
         alert("Ok Valid");
    }
    else{
       alert("Not Valid");

    }
    return false;
}