# cieljs

### *Easy Custom Elements*



## Getting started

1. Define tag and html (Javascript)

```javascript
(class extends Ciel {
  static tag = 'my-nav'
  html = () => `
    <ul class="${this.class}">
      <template x-for="menu in ${this.menus}">
        <li><a x-bind:href="menu.link" x-text="menu.text"></a></li>
      </template>
    </ul>
  `
}).define() // using alpine.js
```



2. Style (CSS)

```css
my-nav li {
  font-size: 1.5rem;
  list-style: none;
}
```



3. Import and use (HTML)

```html
<script type="module">
  import "./my-nav.js";
</script>

<my-nav class="grid" menus="[{'text':'Menu 1','link':'/link'}, {'text':'Menu 2','link':'/link'}, {'text':'Menu 3','link':'/link'}]"></my-nav>
```

