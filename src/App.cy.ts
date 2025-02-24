import App from './App.vue'

describe('<App />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-vue
    cy.mount(App)

    cy.get('h1').should('contain.text', 'Hello World!')
  })
})