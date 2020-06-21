import { register } from 'riot'
const globalComponents = require('./components/global/**/*.riot')

export default () => {
  Object.entries(globalComponents).map(([name, component]) => {
    register(name, component[name].default)

    return {
      name,
      component
    }
  })
}