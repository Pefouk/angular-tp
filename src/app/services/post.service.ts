import {Post} from '../objects/post';

export class PostService {
  posts = [
    new Post(
      1,
      'Post numéro 1',
      'Lorem Ipsum',
      1,
      new Date()
    ),
    new Post(
      2,
      'Post numéro 2',
      'Lorem Ipsum',
      0,
      new Date()
    ),
    new Post(
      3,
      'Post numéro 3',
      'Lorem Ipsum',
      -1,
      new Date()
    ), new Post(
      4,
      'Post numéro 4',
      'Lorem Ipsum',
      0,
      new Date()
    )
  ];

  findById(id: number): Post {
    return this.posts.find(
      (s) => {
        return s.id === id;
      }
    );
  }

  likeOne(i: number): any {
    this.posts[i].loveIts++;
  }

  dislikeOne(i: number): any {
    this.posts[i].loveIts--;
  }

  likeAll(): any {
    for (const post of this.posts) {
      post.loveIts++;
    }
  }

  dislikeAll(): any {
    for (const post of this.posts) {
      post.loveIts--;
    }
  }

  resetAll(): any {
    for (const post of this.posts) {
      post.loveIts = 0;
    }
  }
}
