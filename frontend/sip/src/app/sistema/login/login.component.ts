import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute  } from '@angular/router';
import { AuthenticationService } from "../user/authentication.service"

@Component({
    selector: 'login',
    moduleId: module.id,
    templateUrl: './login.component.html'
})

export class LoginComponent implements OnInit {
    model: any = {};
    loading = false;
    error = '';

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthenticationService,
        ) { }

    ngOnInit() {
        // reset login status
        this.error =  "test";
    }

    login() {
        this.loading = true;
        this.authenticationService.login(this.model.username, this.model.password)
            .subscribe(result => {
                console.log(result)
                if (result === true) {
                    console.log(this.router.navigate(['/']))

                } else {
                    this.error = 'Username or password is incorrect';
                    this.loading = false;
                }
            });
    }
}
