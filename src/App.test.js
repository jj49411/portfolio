import React from 'react'
import { shallow, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import App from './App'

configure({ adapter: new Adapter() })


describe('App', () => {

  let wrapper

  beforeEach(() => {
    wrapper = shallow(<App />)
  })

  it('should render correctly', () => {
    expect(wrapper.exists()).toBe(true)
  })

  it('should render correctly', () => {
    expect(wrapper.find('Router')).toBeDefined()
  })

  it('should show a nav title', () => {
    expect(wrapper.find(`[data-test='nav-title']`).length).toBe(1)
  })

  it('nav title renders correctly', () => {
    expect(wrapper.find(`[data-test='nav-title']`).text()).toContain('Julie')
  })
})