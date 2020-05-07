import React from 'react'
import { shallow, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import Footer from '../Footer'


configure({ adapter: new Adapter() })


describe('Footer', () => {

  let wrapper

  beforeEach(() => {
    wrapper = shallow(<Footer />)
  })

  it('should render correctly', () => {
    expect(wrapper.exists()).toBe(true)
  })

  it('should show a footer', () => {
    expect(wrapper.find('footer').length).toBe(1)    
  })

  it('should render all rights reserved', () => {
    expect(wrapper.find('Col').text()).toContain('All rights reserved.')   
  })

})
