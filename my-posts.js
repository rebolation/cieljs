(class extends Ciel {
  static tag = 'my-posts'
  html = () => `

    <ul class="${this.class}">
      <template x-for="post in ${this.posts}">
        <li x-text="post.title"></li>
      </template>
    </ul>

  `
}).define()