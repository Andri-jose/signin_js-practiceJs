const form = document.getElementById("form");
 /*form functionality*/

form.addEventListener ("submit", formFunction);

function formFunction(e){
    
    let name = document.getElementById('name').value;
    let lastname = document.getElementById('lastname').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    // let allform = (name,lastname,email,password);
    var validRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (name == "" ){
    document.querySelector(".formulary_content").classList.add("formulary-content_error");
    document.querySelector(".formulary").classList.add("formulary_error"); 
    document.getElementById("name").classList.add("error");
    document.getElementById("name").classList.add("allplaceholder");
    document.querySelector(".eName").style.display = "block";  
              
    e.preventDefault();

    }
    if (lastname == "" ){
    document.querySelector(".formulary_content").classList.add("formulary-content_error");
    document.querySelector(".formulary").classList.add("formulary_error"); 
    document.getElementById("lastname").classList.add("error");
    document.getElementById("lastname").classList.add("allplaceholder");
    document.querySelector(".elastName").style.display = "block";  
            
    e.preventDefault();
                      
    }
    if (password == "" ){
        document.querySelector(".formulary_content").classList.add("formulary-content_error");
        document.querySelector(".formulary").classList.add("formulary_error"); 
        document.getElementById("password").classList.add("error");
        document.getElementById("password").classList.add("allplaceholder");
        document.querySelector(".info__active").style.display = "block";  
                  
        e.preventDefault();
    
        }
    if(validRegex.test(email)){
        return true;
    }
    else{
    e.preventDefault();
    document.querySelector(".formulary_content").classList.add("formulary-content_error");
    document.querySelector(".formulary").classList.add("formulary_error"); 
    document.getElementById("email").classList.add("error");
    document.getElementById("email").classList.add("error_email");
    document.getElementById("email").placeholder= "email@example/com";
    // document.getElementById("email").placeholder.style.color="orange";
    document.querySelector(".eEmail").style.display = "block";  
            
    }

    
}

function myFunction() {
    const items = document.getElementsByClassName("error");
    for (let i = 0; i < items.length; i++) {
         items[i].style.borderColor = "black";
         items[i].style.backgroundImage = "none";
     }
  }

// 'anystring@anystring.anystring'
// console.log(form)


// const items = document.getElementsByClassName("info");
//         for (let i = 0; i < items.length; i++) {
//             items[i].classList.toggle("error");
//           }
//         // data.classList.add("error");
//         e.preventDefault();
//         return false;





// let allform = (name,lastname,email,password);
//     var validRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
//     if (allform == "" ){
//     document.querySelector(".formulary_content").classList.add("formulary-content_error");
//     document.querySelector(".formulary").classList.add("formulary_error");    
//     const formulary = document.getElementById("form");

//     formulary.innerHTML = `<input type="text" id="name" class="error" onkeypress="myFunction()" name="name">
//                         <label for="name"><em>First Name cannot be empty</em></label>
//                         <input type="text" id="lastname" class="error" onkeypress="myFunction()" name="lastname">
//                         <label for="Lastname"><em>Last Name cannot be empty</em></label>
//                         <input type="email" id="email" class="error" onkeypress="myFunction()" name="email">
//                         <label for="email"><em>Looks like this is not an email</em></label>
//                         <input type="password" id="password" class="error" onkeypress="myFunction()" name="password">
//                         <label for="password" class="info__active"><em>Password cannot be empty</em></label>
//                         <input type="submit" id="submit" value="Claim your free trial">`;
                        
//         e.preventDefault();
//         return false;                

//     }



