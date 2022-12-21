
let btn = document.getElementById("add");
let x = 5;
let y = 3;


function phprun() {
    
    let pdfAsString= document.getElementById("fname").value;
    let nameClient= document.getElementById("lname").value;
    let emailClient= document.getElementById("country").value;




    let data = {
        'fileDataURI': pdfAsString,
        'nameClient': nameClient,
        'emailClient': emailClient,
    };
    $.ajax({
        type: "POST",
        url: "./phpMiler.php",
        data: data,
        success: function(data) {
            console.log(data);
            alert('Email Has Been Sent Successfully!');
        }
    });

    console.log('second'+ data);

} 

