import React from 'react'
import { shallow, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import ProjectsPage from '../ProjectsPage'
import Projects from '../../components/ProjectsContent'


configure({ adapter: new Adapter() })


describe('ProjectsPage', () => {

  let wrapper

  beforeEach(() => {
    wrapper = shallow(<ProjectsPage />)
  })

  it('should render correctly', () => {
    expect(wrapper.exists()).toBe(true)
  })

  it('should render the Projects component', () => {
    expect(wrapper.containsMatchingElement(<Projects/>)).toEqual(true)
  })

})
