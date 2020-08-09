module.exports = {
  url: 'https://localhost:3000/login',
  elements: {
    homeButton: 'button[class="home"]',
    username: {
      seletor: '(//input[@class="form"])',
      locateStrategy: 'xpath',
    },
    password: {
      /* ... */
    }
  }
}