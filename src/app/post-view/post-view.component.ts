import {Component, OnInit} from '@angular/core';
import {PostService} from '../services/post.service';

@Component({
  selector: 'app-post-view',
  templateUrl: './post-view.component.html',
  styleUrls: ['./post-view.component.scss']
})
export class PostViewComponent implements OnInit {
  posts: any[];
  isAuth: false;

  constructor(private postService: PostService) {
  }

  resetAll(): any {
    this.postService.resetAll();
  }

  likeAll(): any {
    this.postService.likeAll();
  }

  dislikeAll(): any {
    this.postService.dislikeAll();
  }

  ngOnInit(): void {
    this.posts = this.postService.posts;
  }
}
