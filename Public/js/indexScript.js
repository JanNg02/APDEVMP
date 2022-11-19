
  // JS for submission of login form
  document.getElementById("loginForm").addEventListener("submit", ifValid); //triggers when submit button is clicked
  
  function ifValid() { //function that displays a message if the login credentials are valid
    alert("Loading..... Please wait!!");
  }

  //JS for Product Preview
  let x = 1; //indicates the product number
  displayProd(x);

  function nextProd(n) { //calls displayProd function to determine the next product to be displayed
    displayProd(x += n);
  }

  function show(n) { //calls displayProd function to determine the product to be displayed
    displayProd(x = n);
  }

  function displayProd(n) { //function that determines the product to be displayed
    let i;
    if (n > document.getElementsByClassName("products").length) { //first product
      x = 1
    }

    if (n < 1) { //last product
      x = document.getElementsByClassName("products").length
    }

    for (i = 0; i < document.getElementsByClassName("products").length; i++) { //all products should not be displayed yet
      document.getElementsByClassName("products")[i].style.display = "none";  
    }

    for (i = 0; i < document.getElementsByClassName("indicator").length; i++) { //replaces active indicators to not active
      document.getElementsByClassName("indicator")[i].className = document.getElementsByClassName("indicator")[i].className.replace(" active", "");
    }

    document.getElementsByClassName("products")[x-1].style.display = "block";  //displays the product
    document.getElementsByClassName("indicator")[x-1].className += " active"; //displays which indicator is active
  }

	// Close login page when the user clicks anywhere outside of the login page.
	var modal = document.getElementById('id01');
  window.onclick = function(event) {
		if (event.target == modal) {
			modal.style.display = "none";
		}
	}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 