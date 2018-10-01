function mountLoginScreen() {
    $('#root').html(LoginScreen());
    //    setTimeout(()=>{
    initLoginScreenListners();


    //    },2000)

}


function LoginScreen() {
    let container = document.createElement('div');
    container.id = 'login-screen';
    //    container.innerHTML = `loading...`
    //    container.style.height = '100vh';
    //    container.style.display = 'flex';
    //    container.style.justifyContent = 'center';
    //    container.style.alignItems = 'center';
    container.classList.add('login-screen');
    container.innerHTML = `
   <div class="container">

   <div class="imgBox">
       <img src="img/hexagon.png\" alt="">
   </div>

   <div class="box">
       <form action="" id="userName">
           <input type="text" class="userName" placeholder="Email">
       </form>
       <form action="" id="passWord">
           <input type="password" id="passWordInput" placeholder="Password">
       </form>
   </div>
   <div class="box2">
       <i class="fab fa-facebook-square" id="facebook-login-btn"></i>
       <i class="fab fa-google-plus" id="google-login-btn"></i>

   </div>
   <div class="box3">
       <button type="submit" id= "login-btn">Log In</button>
       <button type="signUp" id="signMeUp">Sign Up!</button>
   </div>
</div>
   
   `;

    return container;
}


function initLoginScreenListners() {
    $('#google-login-btn').on('click', function () {
        createPersistantSession(logInWithGoogle)
    });
    $('#facebook-login-btn').on('click', function () {
        createPersistantSession(loginWithFacebook);
    });

    $('#login-btn').on('click', function () {
        createPersistantSession(loginWithEmailAndPassword);
    });

    $('#signMeUp').on('click', function () {
        console.log('going to sign up screen');
        navigate('sign-up-screen');
    });
}

