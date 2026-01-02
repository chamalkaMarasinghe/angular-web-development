export class AuthService {

    isLoggedIn : boolean = true;

    signIn (): void {
        this.isLoggedIn = true;
    }

    signOut (): void {
        this.isLoggedIn = false;
    }

    isAthuenticated (): boolean {
        return this.isLoggedIn;
    }

}