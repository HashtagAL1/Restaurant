import { Component, OnInit } from '@angular/core';
import {AuthorizationService} from "../../services/authorization.service";
import {Router} from "@angular/router";
import {Subscription} from "rxjs/index";
import {UserService} from "../../services/user.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {NotifierService} from "angular-notifier";

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css']
})
export class AllUsersComponent implements OnInit {

  allUsers: any;
  updateForm = new FormGroup({
    role: new FormControl('')
  });
  searchForm = new FormGroup({
    username: new FormControl('', [Validators.minLength(5), Validators.required])
  });

  constructor(public router: Router,
              public userService: UserService,
              public notifier: NotifierService) { }

  ngOnInit() {
    this.userService.getAllUsers().subscribe((res) => {
      this.allUsers = res.users;
    });
  }

  setRowClass(user): string {
    switch (user.role) {
      case 'user': return 'table-primary';
      case 'admin': return 'table-success';
      case 'deliverer': return 'table-warning';
      case 'moderator': return 'table-danger';
    }
  }

  updateUser(user) {
    const role = this.updateForm.get('role').value;
    let notificationType = 'success';
    if (role === user.role) {
        this.notifier.notify('info', `User already has the role of: ${role}`);
        return;
    }
    this.userService.updateUser(user._id, role).subscribe((res) => {
      if (!res.success) {
          notificationType = 'danger';
          return;
      }
      this.notifier.notify(notificationType, res.message);
      this.router.navigate(['/allUsers']);
      this.ngOnInit();
    });
  }

  findUser() {
    const username = this.searchForm.get('username').value;
    console.log(username);
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


}
