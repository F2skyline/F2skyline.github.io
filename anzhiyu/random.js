var posts=["2026/04/30/C pan fast clean/","2026/04/28/windows safe/","2026/04/28/hello-world/","2026/04/12/safe/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };