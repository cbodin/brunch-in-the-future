export default class App {
  constructor(config) {
    this.config = config;
    document.addEventListener('DOMContentLoaded', this.onDocumentReady.bind(this));
    window.addEventListener('load', this.onWindowLoad.bind(this));
    console.log('App', 'Hello from App!'); // eslint-disable-line
  }

  onDocumentReady() {
    console.log('App.onDocumentReady', this.config); // eslint-disable-line
  }

  onWindowLoad() {
    console.log('App.onWindowLoad', this.config); // eslint-disable-line
  }
}
