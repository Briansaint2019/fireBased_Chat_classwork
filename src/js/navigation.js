function navigate(screen) {
    const root = $('#root');

    switch (screen) {
        case 'loading-screen':
            mountLoadingScreen();
            break;

        case 'sign-up-screen':
            mountSignUpScreen();
            break;

        case 'chat-screen':
            mountChatScreen();
            break;

        case 'login-screen':
            mountLoginScreen();
            break;

        default:
            mount404Screen();
            break;

    }
}