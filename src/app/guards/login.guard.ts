import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';

export const loginGuard: CanActivateFn = (route, state) => {
  //return true;
  const router = inject(Router);
  const token = localStorage.getItem("token");
  if (token){
    router.navigate(['home']);
    return false;
  }
  else{
    return true;
  }
};
