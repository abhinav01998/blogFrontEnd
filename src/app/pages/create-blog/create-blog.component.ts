import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { PostServiceService } from '../../services/post-service.service';
import { CommonModule } from '@angular/common';
import { HttpClient,HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-create-blog',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, RouterLink, RouterOutlet],
  templateUrl: './create-blog.component.html',
  styleUrl: './create-blog.component.css'
})
export class CreateBlogComponent {

  postform!: FormGroup;
  blogForm: any;

  constructor(private fb: FormBuilder, private http: HttpClient, private snackBar: MatSnackBar, private postService: PostServiceService, private router: Router) {
      this.postform = this.fb.group({
      name: ['', Validators.required],
      img: [null, Validators.required],
      body: ['', Validators.required]
    });
  }

  onFileChange(event: any) {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (file) {
      this.postform.patchValue({ image: file });
    }
  }

  submitForm() {
    if (this.postform.valid) {
      console.log('Form Data:', this.postform.value);
      alert('Form submitted successfully!');
    } else {
      alert('All fields must be filled out');
    }
  }

  postBlog(){
    const new_data = this.postform.value;
    this.postService.createNewBlog(new_data).subscribe(res=>{
      this.snackBar.open("Blog Posted Successfully!", "Ok");
      this.router.navigateByUrl("/");
    }, error=>{
      this.snackBar.open("Something Went Wrong :(", "Ok");
    })
  }

}