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