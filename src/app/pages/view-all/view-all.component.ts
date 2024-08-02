import { Component } from '@angular/core';
import { PostServiceService } from '../../services/post-service.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MaterialModule } from "../../AngularMaterialModule";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-view-all',
  standalone: true,
  imports: [MaterialModule, CommonModule],
  templateUrl: './view-all.component.html',
  styleUrl: './view-all.component.css'
})
export class ViewAllComponent {

  allBlogs: any;

  constructor(private postService: PostServiceService, private snackBar: MatSnackBar){}

  ngOnInit() {
    this.getAllBlogs();
  }

  getAllBlogs(){
    this.postService.getAllBlogs().subscribe(res=>{
      console.log(res);
      this.allBlogs = res;
    }, error=>{
      this.snackBar.open("Something Went Wrong!!", "Ok")
    })
  }
}
