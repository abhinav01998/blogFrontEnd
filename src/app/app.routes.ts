import { RouterModule, Routes } from '@angular/router';
import { CreateBlogComponent } from './pages/create-blog/create-blog.component';
import { NgModule } from '@angular/core';
import { ViewAllComponent } from './pages/view-all/view-all.component';
import { OpenBlogComponent } from './pages/open-blog/open-blog.component';

export const routes: Routes = [
    {path:'create-blog', component: CreateBlogComponent},
    {path:'view-blogs', component: ViewAllComponent},
    {path:'open-blog/:id', component: OpenBlogComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {  }