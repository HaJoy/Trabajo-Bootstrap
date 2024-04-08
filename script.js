customElements.define('etiqueta-html',
  class extends HTMLElement {
      constructor() {
          super();
      }
      connectedCallback() {
          fetch(this.getAttribute("src"))
              .then(r => r.text())
              .then(t => {
                  let parser = new DOMParser();
                  let html = parser.parseFromString(t, "text/html");
                  this.innerHTML = html.body.innerHTML;
              }).catch(e => console.error(e));

      }
});
