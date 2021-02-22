export class PostModel {
  constructor(
    public id: number,
    public title: string,
    public content: string,
    public loveIts: number,
    public createdAt: Date
  ) { }
}
