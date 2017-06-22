import { Component } from '@angular/core';
import {PostsService} from '../services/posts.service';
@Component({
  moduleId: module.id,
  selector: 'user',
  templateUrl: `user.component.html`,
   providers: [PostsService]
})
export class UserComponent  {

 name: string;
 salary: string;
 job: string;
 address: address;
 hobbies: string[];
 showHobbies: boolean;
 posts:Post[];

 constructor(private postsService: PostsService){

      this.name = 'Jyotsna';
      this.salary = '15,00,000/- 15 LPA';
      this.job = 'Fullstack Web Developer';
      this.address = {
       street: '2704, FF, Sector-46',
       city: 'Gurugram',
       state: 'HR'
      }
      this.hobbies = ['Marathon', 'Karate', 'Travelling'];
      this.showHobbies = false;

      this.postsService.getPosts().subscribe(posts => {
          this.posts = posts;
      });
      }
      toggleHobbies(){
      if(this.showHobbies == true){
        this.showHobbies = false;
      }else{
        this.showHobbies = true;
      }

      }

      addHobby(hobby){
        this.hobbies.push(hobby);
      }

      deleteHobby(i){
        this.hobbies.splice(i, 1);
      }
}

interface address{
  street: string;
  city: string;
  state: string;
}

interface Post{
  id: number;
  title: string;
  body: string;
}
