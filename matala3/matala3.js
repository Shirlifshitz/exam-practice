<div class="container">
  <nav class="menu">
    <ul>
      <li class="active">Home</li>
      <li>About</li>
      <li>Contact</li>
    </ul>
  </nav>
  <main>
    <section class="posts">
      <article class="post featured">
        <h2>Featured Post</h2>
        <p class="content">Featured content here</p>
      </article>
      <article class="post">
        <h2>Regular Post</h2>
        <p class="content">Regular content here</p>
      </article>
    </section>
  </main>
</div>;
document.querySelector(".post p").forEach((p) => {
  p.style.fontsize = "18px";
  p.style.color = "darkgray";
});
