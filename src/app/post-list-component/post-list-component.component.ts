import {Component, Input, OnInit} from '@angular/core';
import {PostService} from '../services/post.service';

@Component({
  selector: 'app-post-list-component',
  templateUrl: './post-list-component.component.html',
  styleUrls: ['./post-list-component.component.scss']
})
export class PostListComponentComponent implements OnInit {

  constructor(private postService: PostService) {
  }

  @Input() title: string;
  @Input() content: string;
  @Input() loveIts: number;
  @Input() createdAt: Date;
  @Input() index: number;

  ngOnInit(): void {
  }

  like(): any {
    this.postService.likeOne(this.index);
  }

  dislike(): any {
    this.postService.dislikeOne(this.index);
  }

}
