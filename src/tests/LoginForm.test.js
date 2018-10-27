import React from 'react'
import { shallow, mount } from 'enzyme'
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

  it('should update state with change to inputs', () => {
    wrapper = mount(<LoginForm />)

    const spy = spyOn(wrapper.instance(), 'handleInputChange')
      wrapper.instance().forceUpdate()
      const mockEvent = { target: { value: 'something'} }

      wrapper.find('.email-login').simulate('change', mockEvent)

      expect(spy).toHaveBeenCalled()
  })
})