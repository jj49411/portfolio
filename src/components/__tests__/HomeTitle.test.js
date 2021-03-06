import React from 'react'
import { shallow, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import HomeTitle from '../HomeTitle'


configure({ adapter: new Adapter() })


describe('HomeTitle', () => {

  let wrapper

  beforeEach(() => {
    wrapper = shallow(<HomeTitle />)
  })

  it('should render correctly', () => {
    expect(wrapper.exists()).toBe(true)
  })

  it('should show the title', () => {
    expect(wrapper.find('.homeTitle').length).toBe(1)    
  })

  it('should render title passing from props', () => {
    const props = {
      title: 'Hello!',
      subTitle: 'Software Engineer'
    }
    wrapper = shallow(<HomeTitle {...props}/>)
    expect(wrapper.find('.smallTitle').text()).toBe('Software Engineer')    
  })

})
