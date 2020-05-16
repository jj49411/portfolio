import React from 'react'
import { shallow, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import Projects from '../ProjectsContent'


configure({ adapter: new Adapter() })


describe('Projects', () => {

  let wrapper

  beforeEach(() => {
    wrapper = shallow(<Projects />)
  })

  it('should render correctly', () => {
    expect(wrapper.exists()).toBe(true)
  })

  it('should have a profile picture', () => {
    expect(wrapper.find(`[data-test='projects']`).length).toBe(1)    
  })

  it('should render about content from props', () => {
    const props = {
      title: "My Projects"
    }
    wrapper = shallow(<Projects {...props}/>)
    expect(wrapper.find('.projectsTitle').text()).toBe('My Projects')  
  })

  it('should show a project title', () => {
    expect(wrapper.find(`[data-test='project-title']`).length).toBe(1)    
  })

  it('should show project description', () => {
    expect(wrapper.find(`[data-test='project-content']`).length).toBe(1)    
  })

  it('should show used tech', () => {
    expect(wrapper.find(`[data-test='project-tech']`).length).toBe(1)    
  })

  
})
