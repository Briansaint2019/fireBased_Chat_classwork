const googleProvider = new firebase.auth.GoogleAuthProvider();
const facebookProvider = new firebase.auth.FacebookAuthProvider();

// Function to login with Google
function logInWithGoogle() {
  socialLogin(googleProvider);
}

function loginWithFacebook() {
  socialLogin(facebookProvider);
}

function socialLogin(provider) {
  firebase.auth().signInWithPopup(provider).then(function (result) {
    // This gives you a Google Access Token. You can use it to access the Google API.
    var token = result.credential.accessToken;
    // The signed-in user info.
    var user = result.user;

    console.log(token, user);
  }).catch(function (error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;

    alert(errorMessage);
  });
}

function signUpWithEmailAndPassword(email, password) {
  firebase.auth().createUserWithEmailAndPassword(email, password).catch(function (error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    
    alert(errorMessage);
  });
}

function loginWithEmailAndPassword() {
  let email = $('#email').val();
  let password = $('#password').val();

  firebase.auth().signInWithEmailAndPassword(email, password).catch(function (error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    
    alert(errorMessage);
  });
}

function createPersistantSession(authenticate = () => console.log('no authentication passed to persistant session')) {
  firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL)
    .then(authenticate)
    .catch(function (error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;

      alert(errorMessage);
    });
}

function signOut() {
  firebase.auth().signOut().then(function () {
    // Sign-out successful.
    console.log('signed out successfully');
  }).catch(function (error) {
    // An error happened.
    console.error(error);
  });
}

function session() {
  firebase.auth().onAuthStateChanged(function (user) {
    window.user = user;
    if (user) {
      console.log(user);
      navigate('chat-screen', user);
    }
    else {
      navigate('login-screen');
    }
  });
}
