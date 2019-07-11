---
title: Forms and inputs
category: Elements
scss: forms.scss
usage: "Form elements"
---

#### Fieldset with legend

<form action="" method="">
  <fieldset>
    <legend>A form</legend>
  </fieldset>
</form>

{% highlight html %}
<form action="" method="">
  <fieldset>
    <legend>A form</legend>
  </fieldset>
</form>
{% endhighlight %}

### Inputs

All form inputs must have a label with a `for` attribute, a matching `id` and a `name` attribute as shown in the example below.

**Text Input with label**

<label for="text">Text input</label>
<input type="text" class="text-input" name="" id="text" placeholder="Placeholder">

{% highlight html %}
<label for="text">Text input</label>
<input type="text" class="text-input" name="" id="text" placeholder="Placeholder">
{% endhighlight %}


Inputs can be styled with a `text-input` class.

This class should be applied to all HTML inputs with the exception of `radio` buttons and `checkboxes`.

Apply the `text-input` class to the following:

{% highlight html %}
<input type="text" class="text-input" name="" id="">
{% endhighlight html %}

{% highlight html %}
<input type="email" class="text-input" name="" id="">
{% endhighlight html %}

{% highlight html %}
<input type="url" class="text-input" name="" id="">
{% endhighlight html %}

{% highlight html %}
<input type="number" class="text-input" name="" id="">
{% endhighlight html %}

{% highlight html %}
<input type="tel" class="text-input" name="" id="">
{% endhighlight html %}

{% highlight html %}
<input type="date" class="text-input" name="" id="">
{% endhighlight html %}

<h2 id="input-sizing">Input sizes</h2>

By default inputs will fill the width of their container. If you need smaller inputs use the following classes:

**Half the container width**

<input type="text" class="text-input text-input-half" name="" placeholder="Placeholder">

{% highlight html %}
<input type="text" class="text-input text-input-half" name="" placeholder="Placeholder">
{% endhighlight html %}

**One third the container width**

<input type="text" class="text-input text-input-third" name="" placeholder="Placeholder">

{% highlight html %}
<input type="text" class="text-input text-input-third" name="" placeholder="Placeholder">
{% endhighlight html %}


#### Textarea

<label for="textarea">Textarea</label>
<textarea class="text-input" id="textarea" name=""></textarea>

{% highlight html %}
<label for="textarea">Textarea</label>
<textarea class="text-input" id="textarea" name=""></textarea>
{% endhighlight %}

#### Radio buttons

<div class="input-wrapper">
  <p>
    <input id="radio-1" class="radio-custom" name="radio-group" checked="" type="radio">
    <label for="radio-1" class="radio-custom-label">First Choice</label>
  </p>
  <p>
    <input id="radio-2" class="radio-custom" name="radio-group" type="radio" disabled>
    <label for="radio-2" class="radio-custom-label">Second Choice (disabled)</label>
  </p>
  <p>
    <input id="radio-3" class="radio-custom" name="radio-group" type="radio">
    <label for="radio-3" class="radio-custom-label">Third Choice</label>
  </p>
</div>

{% highlight html%}
<div class="input-wrapper">
  <p>
    <input id="radio-1" class="radio-custom" name="radio-group" type="radio">
    <label for="radio-1" class="radio-custom-label">First Choice</label>
  </p>
  <p>
    <input id="radio-2" class="radio-custom" name="radio-group" type="radio" disabled>
    <label for="radio-2" class="radio-custom-label">Second Choice (disabled)</label>
  </p>
  <p>
    <input id="radio-3" class="radio-custom" name="radio-group" type="radio">
    <label for="radio-3" class="radio-custom-label">Third Choice</label>
  </p>
</div>
{% endhighlight html %}

#### Checkboxes

<div class="input-wrapper">
  <p>
    <input id="checkbox-1" class="checkbox-custom" name="checkbox-1" checked="" type="checkbox">
    <label for="checkbox-1" class="checkbox-custom-label">First Choice</label>
  </p>
  <p>
    <input id="checkbox-2" class="checkbox-custom" name="checkbox-2" type="checkbox" disabled>
    <label for="checkbox-2" class="checkbox-custom-label">Second Choice</label>
  </p>
  <p>
    <input id="checkbox-3" class="checkbox-custom" name="checkbox-3" type="checkbox">
    <label for="checkbox-3" class="checkbox-custom-label">Third Choice</label>
  </p>
</div>

{% highlight html%}
<div class="input-wrapper">
  <p>
    <input id="checkbox-1" class="checkbox-custom" name="checkbox-1" type="checkbox">
    <label for="checkbox-1" class="checkbox-custom-label">First Choice</label>
  </p>
  <p>
    <input id="checkbox-2" class="checkbox-custom" name="checkbox-2" type="checkbox" disabled>
    <label for="checkbox-2" class="checkbox-custom-label">Second Choice</label>
  </p>
  <p>
    <input id="checkbox-3" class="checkbox-custom" name="checkbox-3" type="checkbox">
    <label for="checkbox-3" class="checkbox-custom-label">Third Choice</label>
  </p>
</div>
{% endhighlight html %}

#### Select dropdowns

<label for="" for="filter-event">Select an event</label>
<span class="select-span">
  <select name="" id="filter-event">
    <option value="">All events</option>
    <option value="">Financial planner</option>
  </select>
</span>

{% highlight html%}
<label for="" for="filter-event">Select an event</label>
<span class="select-span" for="filter-event">
  <select name="" id="filter-event">
    <option value="">All events</option>
    <option value="">Financial planner</option>
  </select>
</span>
{% endhighlight html %}

#### Validation

<label for="text-error">Text input</label>
<input type="text" id="text-error" class="text-input error" name="">
<span class="form-message error">Error message here</span>

{% highlight html %}
<label for="text">Text input</label>
<input type="text" id="text" class="text-input error" name="">
<span class="form-message error">Error message here</span>
{% endhighlight %}

<label for="text">Select</label>
<span class="select-span">
  <select name="" id="filter-event" class="error">
    <option value="">All events</option>
    <option value="">Financial planner</option>
  </select>
</span>
<span class="form-message error">Error message here</span>

{% highlight html %}
<label for="text">Select</label>
<span class="select-span">
  <select name="" id="filter-event" class="error">
    <option value="">All events</option>
    <option value="">Financial planner</option>
  </select>
</span>
<span class="form-message error">Error message here</span>
{% endhighlight %}


### Error block

<div class="validation-summary-errors" data-valmsg-summary="true"><span>Login was unsuccessful. Please correct the errors and try again.</span>
<ul>
  <li>The Username field is required.</li>
  <li>The Password field is required.</li>
</ul>
</div>

{% highlight html %}
<div class="validation-summary-errors" data-valmsg-summary="true">
  <span>Login was unsuccessful. Please correct the errors and try again.</span>
  <ul>
    <li>The Username field is required.</li>
    <li>The Password field is required.</li>
  </ul>
</div>
{% endhighlight %}