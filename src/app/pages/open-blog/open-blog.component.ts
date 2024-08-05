import { Component } from '@angular/core';
import { PostServiceService } from '../../services/post-service.service';
import { ActivatedRoute} from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../AngularMaterialModule';

@Component({
  selector: 'app-open-blog',
  standalone: true,
  imports: [MaterialModule, CommonModule],
  templateUrl: './open-blog.component.html',
  styleUrl: './open-blog.component.css'
})
export class OpenBlogComponent {
  blogId = this.activatedRoute.snapshot.params['id'];
  blogData:any;

  constructor(private blogService: PostServiceService, private activatedRoute: ActivatedRoute, private snackBar: MatSnackBar) {}

  ngOnInit() {
    console.log(this.blogId);
    this.readBlog();
  }

  readBlog() {
    this.blogService.readBlog(this.blogId).subscribe(res=>{
      this.blogData = res;
      console.log(res);
    }, error=>{
      this.snackBar.open("Something Went Wrong! Check logs for more information!!!", "Ok")
    })
  }
}
