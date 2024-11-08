const $btnSignIn = document.querySelector('.sign-in-btn'),
      $btnSignUp = document.querySelector('.sign-up-btn'),
      $signUpClub = document.querySelector('.club-sign-up'),
      $signUpUser = document.querySelector('.user-sign-up'),
      $signIn = document.querySelector('.sign-in');

const $btnSignUpClub = document.querySelector('.sign-up-club');
const $btnSignUpUser = document.querySelector('.sign-up-user');

document.addEventListener('click', e => {
    // Alternar entre el formulario de inicio de sesión y registro
    if (e.target === $btnSignIn || e.target === $btnSignUp) {
        $signIn.classList.toggle('active');
        $signUpClub.classList.toggle('active');
    }
    // Mostrar el formulario de registro de Clubes
    if (e.target === $btnSignUpClub) {
        $signUpClub.classList.add('active');
        $signUpUser.classList.remove('active');
        $signIn.classList.remove('active');
    }
    // Mostrar el formulario de registro de Usuarios
    if (e.target === $btnSignUpUser) {
        $signUpUser.classList.add('active');
        $signUpClub.classList.remove('active');
        $signIn.classList.remove('active');
    }
});
