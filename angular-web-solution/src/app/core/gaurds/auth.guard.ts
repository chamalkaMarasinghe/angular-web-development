import { ActivatedRouteSnapshot, CanActivate, GuardResult, MaybeAsync, Router, RouterStateSnapshot } from "@angular/router";
import { AuthService } from "../services/auth.service";
import { Injectable } from "@angular/core";

@Injectable()
export class AuthGaurd implements CanActivate{

    constructor (private authService: AuthService, private router: Router) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): MaybeAsync<GuardResult> {
        if(this.authService.isAthuenticated()){
            return true;
        }else{
            return this.router.navigate([""]);
        }
    }
}