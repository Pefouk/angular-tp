export class AuthService {
  isAuth = false;

  login(): any {
    return new Promise(
      (resolve) =>
        setTimeout(
          () => {
            this.isAuth = true;
            resolve(true);
          }, 2000
        )
    );
  }

  signOut(): any {
    this.isAuth = false;
  }
}
