import { Component,OnInit,OnDestroy } from '@angular/core';
import {UserService} from './user.service';
import {Subscription} from 'rxjs/Subscription'


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  // styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit,OnDestroy {
      user1Activated=false;
      user2Activated=false;

      userSub:Subscription;

constructor(private userService:UserService){

}
  ngOnInit(){
  this.userSub= this.userService.userActivated.subscribe((id:number)=>{
     if(id==1){
       this.user1Activated=true;
     }
     else{
       this.user2Activated=true;
     }
   })
  }

  ngOnDestroy(){
     this.userSub.unsubscribe();
  }

}

// angular doesnot re render the user component if the parameters changes in the url


