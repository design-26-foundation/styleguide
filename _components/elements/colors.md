---
title: Color Palette
category: Elements
scss: variables.scss
usage: "Color palette"
style: |
  .colour-palette {
    margin: 0 0 2.5rem 0;
  }

  @media (min-width: 1024px) {
    .swatch-wrapper {
      display: flex;
      flex-wrap: wrap;
    }
  }

  .swatch {
    flex: 0 0 25%;
    padding: 4rem 3rem;
    color: white;
  }

  .clear {
    clear: both;
  }

---

## Colour palette for Design 26 Foundation

SASS variable is given along with `hsl` value.

<div class="colour-palette">
  <h3>Base colour</h3>
  <p>Used for body text, headers etc</p>
  <div class="swatch-wrapper">
    <div class="swatch"  style="background-color: hsl(0, 0%, 20%);">
      $base-color<br>hsl(0°, 0%, 20%)
    </div>
  </div>
</div>

<div class="colour-palette">
  <h3>Design 26 Foundation colour pallete.</h3>
   <div class="swatch-wrapper">
    <div class="swatch" style="background-color: hsl(347, 62%, 69%);">
      $carisma<br>hsl(347, 62%, 69%);
    </div>
    <div class="swatch" style="background-color: hsl(331, 90%, 91%);">
      $violet<br>hsl(331, 90%, 91%);
    </div>
    <div class="swatch" style="background-color: hsl(252, 100%, 29%);">
      $ultramarine<br>hsl(252, 100%, 29%);
    </div>
    <div class="swatch" style="background-color: hsl(223, 100%, 60%);">
      $blue<br>hsl(223, 100%, 60%);
    </div>
    <div class="swatch" style="background-color: hsl(335, 60%, 52%);">
      $pink<br>hsl(335, 60%, 52%)
    </div>
  </div>
</div>

<div class="colour-palette">
  <h3>Highlight colours</h3>
  <div class="swatch-wrapper">
    <div class="swatch" style="background-color: hsl(358, 72%, 48%);">
      $warning<br>hsl(358, 72%, 48%);
    </div>
    <div class="swatch"  style="background-color: hsl(177, 100%, 35%);">
      $success<br>hsl(177, 100%, 35%)
    </div>
    <div class="swatch"  style="background-color: hsl(42, 100%, 48%);">
      $alert<br>hsl(42, 100%, 48%)
    </div>
  </div>
</div>

<div class="colour-palette">
  <h3>Greys</h3>
  <div class="swatch-wrapper">
    <div class="swatch" style="background-color: hsl(0, 0%, 96%);color: hsl(0, 0%, 20%)">
      $off-white<br>hsl(0°, 0%, 96%)
    </div>
    <div class="swatch"  style="background-color: hsl(0, 0%, 88%);color: hsl(0, 0%, 20%)">
      $very-light-grey<br>hsl(0°, 0%, 88%)
    </div>
    <div class="swatch"  style="background-color: hsl(0, 0%, 76%);color: hsl(0, 0%, 20%)">
      $light-grey<br>hsl(0°, 0%, 76%)
    </div>
  </div>
</div>

<div class="colour-palette">
  <h3>Links</h3>
  <div class="swatch-wrapper">
    <div class="swatch" style="background-color: hsl(0, 0%, 96%);color: hsl(0, 0%, 20%)">
      $button-link-color<br>hsl(0°, 0%, 96%)
    </div>
    <div class="swatch"  style="background-color: hsl(281, 37%, 38%);">
      $button-link-hover-color<br>hsl(281, 37%, 38%)
    </div>
  </div>
</div>

<div class="colour-palette">
  <h3>Borders</h3>
  <div class="swatch-wrapper">
    <div class="swatch"  style="background-color: hsl(0, 0%, 88%);color: hsl(0, 0%, 20%)">
      $border-color<br>$very-light-grey<br>hsl(0°, 0%, 88%)
    </div>
  </div>
</div>