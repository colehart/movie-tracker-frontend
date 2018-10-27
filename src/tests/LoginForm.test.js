import React from 'react'
import { shallow } from 'enzyme'
import { LoginForm } from '../containers/LoginForm'

describe('LoginForm', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<LoginForm />);
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('state should match the snapshot', () => {
    expect(wrapper.state()).toMatchSnapshot()
  })
})