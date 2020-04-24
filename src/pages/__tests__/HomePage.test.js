import React from 'react'
import { shallow, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import HomePage from '../HomePage'
import HomeTitle from '../../components/HomeTitle'
import HomeAbout from '../../components/HomeAbout'


configure({ adapter: new Adapter() })


describe('HomePage', () => {

  let wrapper

  beforeEach(() => {
    wrapper = shallow(<HomePage />)
  })

  it('should render correctly', () => {
    expect(wrapper.exists()).toBe(true)
  })

  it('should render the HomeTitle component', () => {
    expect(wrapper.containsMatchingElement(<HomeTitle/>)).toEqual(true)
  })

  it('should render the HomeAbout component', () => {
    expect(wrapper.containsMatchingElement(<HomeAbout/>)).toEqual(true)
  })


})







