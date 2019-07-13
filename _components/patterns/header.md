---
title: Header
category: Patterns
scss: nav.css
usage: Main site navigation

---

<div class="pattern-outline">
<header class="top-header" id="js-header">
  <div class="header-elements">
    <a class="logo" href="">
      <img src="/assets/img/design26foundation-logo.jpg" alt="Design 26 Foundation">
    </a>
    <nav id="nav-primary" class="navigation">
      <ul>
        <li class="nav-primary-item">
          <a class="nav-primary-link current" href="/components/templates/home-page/">Home</a>
        </li>
        <li class="nav-primary-item"><a class="nav-primary-link" href="/components/templates/our-impact/">Our impact</a></li>
        <li class="nav-primary-item"><a class="nav-primary-link" href="/components/templates/about-page/">About</a></li>
        <li class="nav-primary-item"><a class="nav-primary-link" href="/gallery/">Gallery</a></li>
        <li class="nav-primary-item"><a class="nav-primary-link" href="/blog/">Blog</a></li>
        <li class="nav-primary-item"><a class="nav-primary-link" href="/contact-us/">Contact</a></li>
      </ul>
      <a href="" class="button button-small">Donate</a>
    </nav>
  </div>
</header>
</div>

{% highlight html %}
<header class="top-header" id="js-header">
  <div class="header-elements">
    <a class="logo" href="">
      <img src="/assets/img/design26foundation-logo.jpg" alt="Design 26 Foundation">
    </a>
    <nav id="nav-primary" class="navigation">
      <ul>
        <li class="nav-primary-item">
          <a class="nav-primary-link current" href="/components/templates/home-page/">Home</a>
        </li>
        <li class="nav-primary-item"><a class="nav-primary-link" href="/components/templates/our-impact/">Our impact</a></li>
        <li class="nav-primary-item"><a class="nav-primary-link" href="/components/templates/about-page/">About</a></li>
        <li class="nav-primary-item"><a class="nav-primary-link" href="/gallery/">Gallery</a></li>
        <li class="nav-primary-item"><a class="nav-primary-link" href="/blog/">Blog</a></li>
        <li class="nav-primary-item"><a class="nav-primary-link" href="/contact-us/">Contact</a></li>
      </ul>
      <a href="" class="button button-small">Donate</a>
    </nav>
  </div>
</header>
{% endhighlight %}