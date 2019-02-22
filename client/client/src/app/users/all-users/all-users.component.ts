import {Component, OnDestroy, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {UserService} from "../../services/user.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {NotifierService} from "angular-notifier";
import {Subscription} from "rxjs/Rx";

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css']
})
export class AllUsersComponent implements OnInit, OnDestroy {

  p: any;
  allUsers: any;
  refresh: boolean;
  searchForm = new FormGroup({
    username: new FormControl('', [Validators.minLength(5), Validators.required])
  });
  sub: Subscription;

  constructor(public router: Router,
              public userService: UserService,
              public notifier: NotifierService) { }

  ngOnInit() {
    this.sub = this.userService.getAllUsers().subscribe((res) => {
      this.allUsers = res.users;
    });
    this.refresh = false;
  }

  findUser() {
    const username = this.searchForm.get('username').value;
    if (username === '') {
        this.ngOnInit();
        return;
    }
    this.allUsers = this.allUsers.filter(user => user.username === username);
    if (this.allUsers.length === 0) {
        this.notifier.notify('info', 'No users found.');
        this.ngOnInit();
    }
  }

  getButtonValue() {
    const query = this.searchForm.get('username').value;
    if (query === '') {
        return 'Find All'
    }
    return 'Search';
  }

  ngOnDestroy() {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }


}
