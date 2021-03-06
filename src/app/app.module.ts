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
import {EditPostComponentComponent} from './edit-post-component/edit-post-component.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {UserServiceService} from './services/user-service.service';
import {UserListComponent} from './user-list/user-list.component';
import {NewUserComponent} from './new-user/new-user.component';
import {HttpClientModule} from '@angular/common/http';

const appRoutes: Routes = [
  {path: 'posts', canActivate: [AuthGuardGuard], component: PostViewComponent},
  {path: 'posts/:id', canActivate: [AuthGuardGuard], component: PostSoloComponent},
  {path: 'new-user', canActivate: [AuthGuardGuard], component: NewUserComponent},
  {path: 'edit', canActivate: [AuthGuardGuard], component: EditPostComponentComponent},
  {path: 'login', component: AuthComponent},
  {path: 'users', component: UserListComponent},
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
    EditPostComponentComponent,
    UserListComponent,
    NewUserComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    PostService,
    AuthService,
    UserServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
