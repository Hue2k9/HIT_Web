function Post(title, body, author, views, comments, isLive){
    this.title=title;
    this.body=body;
    this.views=views;
    this.comments=comments;
    this.isLive=isLive;
}
const post = new Post("ahihi","anh Hoàng đzzz","abc",100,[
    {author: 'anh Huân đzzz', body: "lewlew"},
    {author: 'anh Huân đzzz', body: "lewlew"},
  ],true);
console.log(post);
