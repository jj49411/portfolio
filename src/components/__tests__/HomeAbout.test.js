import React from 'react'
import { shallow, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import HomeAbout from '../HomeAbout'


configure({ adapter: new Adapter() })


describe('HomeAbout', () => {

  let wrapper

  beforeEach(() => {
    wrapper = shallow(<HomeAbout />)
  })

  it('should render correctly', () => {
    expect(wrapper.exists()).toBe(true)
  })

  it('should have a profile picture', () => {
    expect(wrapper.find(`[data-test='profile-img']`).length).toBe(1)    
  })

})
