import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit{
  constructor( private userService:UserService,private snack:MatSnackBar) {}

public user = {
username:'',
password:'',
firstName:'',
lastName:'',
email:'',
phone:'',
 };
 
  ngOnInit(): void {
     
  }
 
  formSubmit() {
    console.log(this.user);
     if(this.user.username=='' || this.user.username==null ){
      // alert('User is required !!');
this.snack.open('Username is required !! ', '',{
  duration:3000
}
);
      return;
     }


     // adduser: userservice
this.userService.addUser(this.user).subscribe(
  (data:any)=>{
    //success
    console.log(data);
    // alert('success');
    Swal.fire('Successfully done!!','user id is'  +data.id, 'success');

 this.user = {
          username: '',
          password: '',
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
        };
 
  },
  (error)=>{
    //error
    console.log(error);
    alert('something went wrong');
    this.snack.open('Username is required !! ', '',{
  duration:3000
});
  }
  )
  }
}
