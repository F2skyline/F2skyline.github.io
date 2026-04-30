var posts=["2026/04/28/hello-world/","2026/04/30/windows safe/","2026/04/30/safe/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };