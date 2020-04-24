import React from 'react'
import { shallow, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import PhotographyPage from '../PhotographyPage'
import PhotographyContent from '../../components/PhotographyContent'


configure({ adapter: new Adapter() })


describe('PhotographyPage', () => {

  let wrapper

  beforeEach(() => {
    wrapper = shallow(<PhotographyPage />)
  })

  it('should render correctly', () => {
    expect(wrapper.exists()).toBe(true)
  })

  it('should render the PhotographyContent component', () => {
    expect(wrapper.containsMatchingElement(<PhotographyContent/>)).toEqual(true)
  })

})
