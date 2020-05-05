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

  it('should show the title', () => {
    expect(wrapper.find('footer').length).toBe(1)    
  })

})
