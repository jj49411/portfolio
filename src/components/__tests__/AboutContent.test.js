import React from 'react'
import { shallow, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import AboutContent from '../AboutContent'


configure({ adapter: new Adapter() })


describe('AboutContent', () => {

  let wrapper

  beforeEach(() => {
    wrapper = shallow(<AboutContent />)
  })

  it('should render correctly', () => {
    expect(wrapper.exists()).toBe(true)
  })

  it('should have a profile picture', () => {
    expect(wrapper.find(`[data-test='profile-img']`).length).toBe(1)    
  })

  it('should render about content from props', () => {
    const props = {
      title: 'About Me',
      text1: 'The reason I love coding...',
    }
    wrapper = shallow(<AboutContent {...props}/>)
    expect(wrapper.find('.homeAbout').text()).toBe('About Me')  
  })

  it('should have a link to projects page', () => {
    expect(wrapper.find('.projectsLink').length).toBe(1)    
  })

  it('should show Linkedin link', () => {
    expect(wrapper.find('.icon').length).toBe(1)    
  })

  it('should show Github link', () => {
    expect(wrapper.find('.icon2').length).toBe(1)    
  })
})
