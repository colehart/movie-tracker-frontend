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

  it('should call handleInputChange when email input is changed', () => {
    wrapper = mount(<LoginForm />)

    const spy = spyOn(wrapper.instance(), 'handleInputChange')
    wrapper.instance().forceUpdate()
    const mockEvent = { target: { value: 'something'} }

    wrapper.find('.email-login').simulate('change', mockEvent)

    expect(spy).toHaveBeenCalled()
  })

  it('should call handleInputChange when password input is changed', () => {
    wrapper = mount(<LoginForm />)

    const spy = spyOn(wrapper.instance(), 'handleInputChange')
    wrapper.instance().forceUpdate()
    const mockEvent = { target: { value: 'something'} }

    wrapper.find('.password-login').simulate('change', mockEvent)

    expect(spy).toHaveBeenCalled()
  })

  it('should update state when handleInputChange is called', () => {
    const mockEvent = { target: { name: 'email', value: 'wes@anderson.com'} }

    wrapper.instance().handleInputChange(mockEvent)

    expect(wrapper.state('email')).toBe('wes@anderson.com')
  })

  it('calls handleSubmit onSubmit of the form', () => {
    wrapper = mount(<LoginForm />)
    const spy = spyOn(wrapper.instance(), 'handleSubmit')
    const mockEvent = { preventDefault: jest.fn() }
    wrapper.instance().forceUpdate()

    wrapper.find('form').simulate('submit', mockEvent)

    expect(spy).toHaveBeenCalled()
  })

  it('should call handleSignUp when sign up button is clicked', () => {
    wrapper = mount(<LoginForm />)

    const spy = spyOn(wrapper.instance(), 'handleSignUp')
    const mockEvent = { preventDefault: jest.fn() }
    wrapper.instance().forceUpdate()

    wrapper.find('.sign-up-btn').simulate('click', mockEvent)

    expect(spy).toHaveBeenCalled()
  })

  it('should hide login and display sign up when sign up button is clicked', () => {
    wrapper = mount(<LoginForm />)

    const spy = spyOn
  })
})