$(document).ready(function () {
  //////////// FIRE BASE "CADASTRO EMPRESARIAL"
  $(".sign-up-company").click(function(event){
    event.preventDefault();

    var email = $(".su-email-address-company").val();
    var password = $(".su-password-company").val();

    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(function(){

    })
    .catch(function(error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      alert(errorMessage);
    });
  });


  //////////// FIRE BASE "ENTRAR EMPRESARIAL"
  $(".sign-in-company").click(function(event){
    event.preventDefault();

    var email = $(".si-email-address-company").val();
    var password = $(".si-password-company").val();

    firebase.auth().signInWithEmailAndPassword(email, password)
    .then(function(){

    })
    .catch(function(error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      alert(errorMessage);
    });
  });

});

