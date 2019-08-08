import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AboutComponent} from '././website/about/about.component';
import {BlogComponent} from '././website/blog/blog.component';
import {ContactComponent} from '././website/contact/contact.component';
import {HomeComponent} from '././website/home/home.component';
import {PostComponent} from '././website/post/post.component';

const routes: Routes = [
  {
    path:'',redirectTo:'home',pathMatch:'full'
  },
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'about',
    component:AboutComponent
  },
  {
    path:'blog',
    component:BlogComponent
  },
  {
    path:'contact',
    component:ContactComponent
  },
  {
    path:'post',
    component:PostComponent
  }
];

@NgModule({
  declarations:[
    AboutComponent,
    BlogComponent,
    ContactComponent,
    HomeComponent,
    PostComponent
  ],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
