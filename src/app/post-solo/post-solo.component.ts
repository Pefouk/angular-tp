import {Component, OnInit} from '@angular/core';
import {Post} from '../objects/post';
import {PostService} from '../services/post.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-post-solo',
  templateUrl: './post-solo.component.html',
  styleUrls: ['./post-solo.component.scss']
})
export class PostSoloComponent implements OnInit {

  post: Post;

  constructor(private postService: PostService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.post = this.postService.posts[this.route.snapshot.params['id']];
  }

}
