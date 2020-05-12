import React from 'react'
import { shallow, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import PhotographyContent from '../PhotographyContent'


configure({ adapter: new Adapter() })


describe('PhotographyContent', () => {

  let wrapper

  beforeEach(() => {
    wrapper = shallow(<PhotographyContent />)
  })

  it('should render correctly', () => {
    expect(wrapper.exists()).toBe(true)
  })

  it('should show the title', () => {
    expect(wrapper.find(`[data-test='photography']`).length).toBe(1)    
  })

})
