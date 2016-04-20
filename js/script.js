

 	var link = document.querySelector(".page-map__btn");
	var popup = document.querySelector(".box__modal-wrapper");
 	var close = popup.querySelector(".close-form");
 	var form = popup.querySelector("form");
 	var login = popup.querySelector("[name=nameyour]");
 	var password = popup.querySelector("[name=email]");
 	var storage = localStorage.getItem("login");
 	var overlay = document.querySelector(".modal-overlay");

 	link.addEventListener("click", function(event) {
 	event.preventDefault();
 	popup.classList.add("box__modal-wrapper-show");
 	overlay.classList.add("modal-overlay-show");
 	
 	if (storage) {
 		login.value = storage;
 		password.focus();
 	} else {
 		login.focus(); 
 	}

 });
 	close.addEventListener("click", function(event) {
 	event.preventDefault();
 	popup.classList.remove("box__modal-wrapper-show");
 	overlay.classList.remove("modal-overlay-show");
 });
 	overlay.addEventListener("click" , function(event){
 	event.preventDefault();
 	popup.classList.remove("box__modal-wrapper-show");
 	overlay.classList.remove("modal-overlay-show");	
 	});

 	 form.addEventListener("submit", function(event) {
        if (!login.value || !password.value) {
          event.preventDefault();
          console.log("Нужно ввести логин и пароль"); 
        } else {
          localStorage.setItem("login", login.value);
        }
      });
