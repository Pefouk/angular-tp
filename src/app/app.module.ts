import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {PostListComponentComponent} from './post-list-component/post-list-component.component';
import {PostService} from './services/post.service';
import {AuthComponent} from './auth/auth.component';
import {PostViewComponent} from './post-view/post-view.component';
import {Routes, RouterModule} from '@angular/router';
import {AuthService} from './services/auth.service';
import { PostSoloComponent } from './post-solo/post-solo.component';

const appRoutes: Routes = [
  {path: 'posts', component: PostViewComponent},
  {path: 'posts/:id', component: PostSoloComponent},
  {path: 'login', component: AuthComponent},
  {path: '', component: PostViewComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    PostListComponentComponent,
    AuthComponent,
    PostViewComponent,
    PostSoloComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    PostService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
