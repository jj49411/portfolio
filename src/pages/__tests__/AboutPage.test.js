import React from 'react'
import { shallow, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import AboutPage from '../AboutPage'
import AboutContent from '../../components/AboutContent'


configure({ adapter: new Adapter() })


describe('AboutPage', () => {

  let wrapper

  beforeEach(() => {
    wrapper = shallow(<AboutPage />)
  })

  it('should render correctly', () => {
    expect(wrapper.exists()).toBe(true)
  })

  it('should render the AboutContent component', () => {
    expect(wrapper.containsMatchingElement(<AboutContent/>)).toEqual(true)
  })

})
