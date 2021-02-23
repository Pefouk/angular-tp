import {Post} from '../models/post.model';
import {Subject} from 'rxjs';

export class PostService {
  postSubject = new Subject<any[]>();
  posts: Post[] = [
    new Post(
      1,
      'PostModel numéro 1',
      'Lorem Ipsum',
      1,
      new Date()
    ),
    new Post(
      2,
      'PostModel numéro 2',
      'Lorem Ipsum',
      0,
      new Date()
    ),
    new Post(
      3,
      'PostModel numéro 3',
      'Lorem Ipsum',
      -1,
      new Date()
    ), new Post(
      4,
      'PostModel numéro 4',
      'Lorem Ipsum',
      0,
      new Date()
    )
  ];

  createPost(titre: string, content: string, date: string): any {
    const id = this.posts[this.posts.length - 1].id + 1;
    const post = new Post(
      id,
      titre,
      content,
      0,
      new Date(date)
    );
    this.posts.push(post);
    this.emitPostSubject();
    return 'success !';
  }

  emitPostSubject(): any {
    this.postSubject.next(this.posts.slice());
  }

  findById(id: number): Post {
    return this.posts.find(
      (s) => {
        return s.id === id;
      }
    );
  }

  likeOne(i: number): any {
    this.posts[i].loveIts++;
    this.emitPostSubject();
  }

  dislikeOne(i: number): any {
    this.posts[i].loveIts--;
    this.emitPostSubject();
  }

  likeAll(): any {
    for (const post of this.posts) {
      post.loveIts++;
      this.emitPostSubject();
    }
  }

  dislikeAll(): any {
    for (const post of this.posts) {
      post.loveIts--;
      this.emitPostSubject();
    }
  }

  resetAll(): any {
    for (const post of this.posts) {
      post.loveIts = 0;
      this.emitPostSubject();
    }
  }
}
