import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {PostListComponentComponent} from './post-list-component/post-list-component.component';
import {PostService} from './services/post.service';
import {AuthComponent} from './auth/auth.component';
import {PostViewComponent} from './post-view/post-view.component';
import {Routes, RouterModule} from '@angular/router';
import {AuthService} from './services/auth.service';
import {PostSoloComponent} from './post-solo/post-solo.component';
import {FourofourComponent} from './fourofour/fourofour.component';
import {AuthGuardGuard} from './services/auth-guard.guard';
import { EditPostComponentComponent } from './edit-post-component/edit-post-component.component';
import {FormsModule} from '@angular/forms';

const appRoutes: Routes = [
  {path: 'posts', canActivate: [AuthGuardGuard], component: PostViewComponent},
  {path: 'posts/:id', canActivate: [AuthGuardGuard], component: PostSoloComponent},
  {path: 'edit', canActivate: [AuthGuardGuard], component: EditPostComponentComponent},
  {path: 'login', component: AuthComponent},
  {path: '', canActivate: [AuthGuardGuard], component: PostViewComponent},
  {path: 'not-found', component: FourofourComponent},
  {path: '**', redirectTo: 'not-found'}
];

@NgModule({
  declarations: [
    AppComponent,
    PostListComponentComponent,
    AuthComponent,
    PostViewComponent,
    PostSoloComponent,
    FourofourComponent,
    EditPostComponentComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule
  ],
  providers: [
    PostService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
