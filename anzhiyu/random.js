var posts=["2026/04/29/TEXT/","2026/04/28/hello-world/","2026/04/29/你的文章标题/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };