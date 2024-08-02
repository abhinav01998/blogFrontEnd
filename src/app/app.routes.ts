import { RouterModule, Routes } from '@angular/router';
import { CreateBlogComponent } from './pages/create-blog/create-blog.component';
import { NgModule } from '@angular/core';
import { ViewAllComponent } from './pages/view-all/view-all.component';

export const routes: Routes = [
    {path:'create-blog', component: CreateBlogComponent},
    {path:'view-blogs', component: ViewAllComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {  }