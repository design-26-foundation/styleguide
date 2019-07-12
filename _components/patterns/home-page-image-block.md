---
title: Home page image block
category: Patterns
scss: home-styles.css
usage: Home top image block with call to action
style: |

  h2 {
    color: white;
  }

---

<div class="pattern-outline">
  <section class="center-split">
  <article>
    <figure class="split-image">
      <img src="/assets/img/photos/women-sewing-one.jpg" alt="" />
    </figure>
    <div class="cta">
      <h2>Changing Lives</h2>
      <p>See how you can make a difference in the life of an unemployed and unskilled girl</p>
      <button class="button button-pink">Get to know us</button>
    </div>
  </article>
  <article>
    <figure class="split-image">
      <img src="/assets/img/photos/women-sewing-two.jpg" alt="" />
    </figure>
    <div class="cta">
      <h2>We need you</h2>
      <p>Your donation gives the hope of a second chance to a teenage mother and disadvantaged girl</p>
      <button class="button">Donate now</button>
    </div>
  </article>
</section>
</div>

{% highlight html %}
<section class="center-split">
  <article>
    <figure class="split-image">
      <img src="/assets/img/photos/women-sewing-one.jpg" alt="" />
    </figure>
    <div class="cta">
      <h2>Changing Lives</h2>
      <p>See how you can make a difference in the life of an unemployed and unskilled girl</p>
      <button class="button button-pink">Get to know us</button>
    </div>
  </article>
  <article>
    <figure class="split-image">
      <img src="/assets/img/photos/women-sewing-two.jpg" alt="" />
    </figure>
    <div class="cta">
      <h2>We need you</h2>
      <p>Your donation gives the hope of a second chance to a teenage mother and disadvantaged girl</p>
      <button class="button">Donate now</button>
    </div>
  </article>
</section>
{% endhighlight %}