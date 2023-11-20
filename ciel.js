class Ciel extends HTMLElement {
  connectedCallback() {
    for (let attr of this.attributes) {
      this[attr.name] = attr.value
    }
    this['class'] = this['class'] ? this['class'] : ''
    this.innerHTML = this.html()
  }

  static define() {
    let name = this.tag
    customElements.define(name, this)
  }
}
