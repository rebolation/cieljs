(class extends Ciel {
  static tag = 'my-form'
  html = () => `

    <form>
      <div class="${this.class}">
        <label for="name">
          Name
          <input type="text" id="name" name="name" value="${this.name}" required/>
        </label>
        <label for="phone">
          Phone
          <input type="text" id="phone" name="phone" value="${this.phone}" required>
        </label>
      </div>
      <label for="email">
        E-mail
        <input type="email" id="email" name="email" value="${this.email}" required>
      </label>
      <button type="submit">Submit</button>
    </form>

  `
}).define()