import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {NotifierService} from "angular-notifier";
import {UserService} from "../../../services/user.service";
import {Subscription} from "rxjs/Rx";

@Component({
  selector: 'app-user-row',
  templateUrl: './user-row.component.html',
  styleUrls: ['./user-row.component.css']
})
export class UserRowComponent implements OnInit, OnDestroy {

  @Input() user: any;
  @Input() refresh: boolean;
  @Output() roleChange = new EventEmitter();
  role: string;
  updateForm = new FormGroup({
    role: new FormControl(this.role, [Validators.required])
  });
  sub: Subscription;

  constructor(public notifier: NotifierService,
              public userService: UserService) { }

  ngOnInit() {
    this.role = this.user.role;
  }

  updateUser() {
    const role = this.updateForm.get('role').value;
    let notificationType = 'success';
    if (role === this.user.role) {
      this.notifier.notify('info', `User already has the role of: ${role}`);
      return;
    }
    this.sub = this.userService.updateUser(this.user._id, role).subscribe((res) => {
      if (!res.success) {
        notificationType = 'danger';
        return;
      }
      this.refresh = true;
      this.roleChange.emit(this.refresh);
      this.notifier.notify(notificationType, res.message);
    });
  }
  setRowClass(): string {
    switch (this.user.role) {
      case 'staff': return 'bg-primary customRow';
      case 'admin': return 'bg-success customRow';
      case 'deliverer': return 'bg-warning customRow';
      case 'moderator': return 'bg-danger customRow';
      default: return 'bg-secondary customRow'
    }
  }

  ngOnDestroy() {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }
}
