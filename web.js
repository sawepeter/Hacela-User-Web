//Login link in header
$("#loginLink").click(
  function signupDialog(){
    var dialog = document.querySelector('dialog');
    if (! dialog.showModal) {
      dialogPolyfill.registerDialog(dialog);
    }
    dialog.showModal();
  });


//SignUp dialog in login diolg
$("#signuplink").click(
  function(){
    var dialog = document.querySelector('dialog');
    if (! dialog.showModal) {
      dialogPolyfill.registerDialog(dialog);
    }
    dialog.showModal();
  });

  //Login dialog in signup
  $("#loginlink").click(
    function(){
      var dialog = document.querySelector('dialog');
      if (! dialog.showModal) {
        dialogPolyfill.registerDialog(dialog);
      }
      dialog.showModal();
    });

firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        // User signed in

     $("home.html").show();
     var dialog = document.querySelector('dialog');
     if (! dialog.showModal) {
       dialogPolyfill.registerDialog(dialog);
     }
     dialog.close();

    } else {
      // No user is signed in.
      $("index.html").show();
      var dialog = document.querySelector('dialog');
      if (! dialog.showModal) {
        dialogPolyfill.registerDialog(dialog);
      }
      dialog.showModal();
    }
  });

//***LOGIN***//
  $("#loginBtn").click(
      function(){

        var email = $("#loginEmail").val();
        var password = $("#loginPassword").val();

        if(email != "" && password != ""){

            $("#loginProgress").show();
            $("#loginBtn").hide();
            window.location="home.html"
           // $("home.html").show();
            firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error){

              $("#loginError").show().text(error.message);

              $("#loginProgress").hide();
              $("#loginBtn").show();

            })
        }  
      }
  );

  //***LOGOUT***//
  $("#logoutLink").click(
    function(){

      firebase.auth().signOut().then(function() {
        // Sign-out successful.
    
        $("#loginProgress").hide();
        $("#loginBtn").show();
        window.location.href="index.html"
      }).catch(function(error) {
        // An error happened.
        alert(error.message);

      });
    }
  )

  //Post dialog
  $("#postBtn").click(
    function(){
      var dialog = document.querySelector('dialog');
      if (! dialog.showModal) {
        dialogPolyfill.registerDialog(dialog);
      }
      dialog.showModal();
    });
    

//POST-ING


//RETRIEVE POST


//Add an investment project
$("#addinvestBtn").click(
  function(){
    var dialog = document.querySelector('dialog');
    if (! dialog.showModal) {
      dialogPolyfill.registerDialog(dialog);
    }
    dialog.showModal();
  });

  //add community project
  $("#addcommunityBtn").click(
    function(){
      var dialog = document.querySelector('dialog');
      if (! dialog.showModal) {
        dialogPolyfill.registerDialog(dialog);
      }
      dialog.showModal();
    });

    //Borrow loan 
    $("#borrowloanBtn").click(
      function(){
        var dialog = document.querySelector('dialog');
        if (! dialog.showModal) {
          dialogPolyfill.registerDialog(dialog);
        }
        dialog.showModal();
      });

      //pay loan 
      $("#payloanBtn").click(
        function(){
          var dialog = document.querySelector('dialog');
          if (! dialog.showModal) {
            dialogPolyfill.registerDialog(dialog);
          }
          dialog.showModal();
        });
  
        //drop down button
        var dropdown = document.getElementsByClassName("dropdown-btn");
        var i;
        
        for (i = 0; i < dropdown.length; i++) {
          dropdown[i].addEventListener("click", function() {
            this.classList.toggle("active");
            var dropdownContent = this.nextElementSibling;
            if (dropdownContent.style.display === "block") {
              dropdownContent.style.display = "none";
            } else {
              dropdownContent.style.display = "block";
            }
          });
        }

//Profile collection

filterSelection("all") // Execute the function and show all columns
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("column");
  if (c == "all") c = "";
  // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

// Show filtered elements
function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

// Hide elements that are not selected
function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1); 
    }
  }
  element.className = arr1.join(" ");
}

// Add active class to the current button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}


var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; 
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1} 
    slides[slideIndex-1].style.display = "block"; 
    setTimeout(showSlides, 2000); // Change image every 2 seconds
}



