import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
    moduleId: module.id,
    templateUrl: 'login.component.html'
})

export class LoginComponent implements OnInit {
    model: any = {};
    loading = false;
    error = '';

    constructor(
        private router: Router,
        ) { }

    ngOnInit() {
        // reset login status
        this.error =  "test";
    }

    login() {
        this.loading = true;
        // this.authenticationService.login(this.model.username, this.model.password)
        //     .subscribe(result => {
        //         if (result === true) {
        //             this.router.navigate(['/']);
        //         } else {
        //             this.error = 'Username or password is incorrect';
        //             this.loading = false;
        //         }
        //     });
    }
}