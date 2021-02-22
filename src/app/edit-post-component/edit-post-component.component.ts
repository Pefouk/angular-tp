import {Component, OnInit} from '@angular/core';
import {PostService} from '../services/post.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-edit-post-component',
  templateUrl: './edit-post-component.component.html',
  styleUrls: ['./edit-post-component.component.scss']
})
export class EditPostComponentComponent implements OnInit {

  constructor(private postService: PostService,
              private router: Router) {
  }

  ngOnInit(): void {
  }

  onSubmit(f: any): any {
    const titre = f.value.title;
    const content = f.value.content;
    const createdAt = f.value.createdAt;
    this.postService.createPost(titre, content, createdAt);
    this.router.navigate(['/posts']);
  }
}
