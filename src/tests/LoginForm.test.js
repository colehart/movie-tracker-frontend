import React from 'react'
import { shallow, mount } from 'enzyme'
import { mockEmail, mockPassword, mockId } from './testMocks';
import { LoginForm, mapDispatchToProps } from '../containers/LoginForm'
import * as Actions from '../actions'

describe('LoginForm', () => {
  describe('LoginFormComponent', () => {
    let wrapper;
    let mockAddUser;
    beforeEach(() => {
      mockAddUser = jest.fn()
      wrapper = mount(<LoginForm addUser={mockAddUser}/>);
    })

    it('should match the snapshot', () => {
      wrapper = shallow(<LoginForm addUser={mockAddUser}/>)

      expect(wrapper).toMatchSnapshot()
    })

    it('state should match the snapshot', () => {
      wrapper = shallow(<LoginForm addUser={mockAddUser}/>)

      expect(wrapper.state()).toMatchSnapshot()
    })

    it('should call handleInputChange when email input is changed', () => {
      const spy = spyOn(wrapper.instance(), 'handleInputChange')
      wrapper.instance().forceUpdate()
      const mockEvent = { target: { value: 'something'} }

      wrapper.find('.email-login').simulate('change', mockEvent)

      expect(spy).toHaveBeenCalled()
    })

    it('should call handleInputChange when password input is changed', () => {
      const spy = spyOn(wrapper.instance(), 'handleInputChange')
      wrapper.instance().forceUpdate()
      const mockEvent = { target: { value: 'something'} }

      wrapper.find('.password-login').simulate('change', mockEvent)

      expect(spy).toHaveBeenCalled()
    })

    it('should update state when handleInputChange is called', () => {
      const mockEvent = { target: { name: 'email', value: mockEmail} }

      wrapper.instance().handleInputChange(mockEvent)

      expect(wrapper.state('email')).toBe(mockEmail)
    })

    it('calls handleSubmit onSubmit of the form', () => {
      const spy = spyOn(wrapper.instance(), 'handleSubmit')
      const mockEvent = { preventDefault: jest.fn() }
      wrapper.instance().forceUpdate()

      wrapper.find('form').simulate('submit', mockEvent)

      expect(spy).toHaveBeenCalled()
    })

    it('should call toggleSigningUp when sign up button is clicked', () => {
      const spy = spyOn(wrapper.instance(), 'toggleSigningUp')
      wrapper.instance().forceUpdate()

      wrapper.find('.sign-up-btn').simulate('click')

      expect(spy).toHaveBeenCalled()
    })

    it('should update state when toggleSigningUp is called', () => {
      expect(wrapper.state('isSigningUp')).toBeFalsy()

      wrapper.instance().toggleSigningUp()

      expect(wrapper.state('isSigningUp')).toBeTruthy()

      wrapper.instance().toggleSigningUp()

      expect(wrapper.state('isSigningUp')).toBeFalsy()
    })

    it('should toggle login when sign up button is clicked', () => {
      wrapper.instance().toggleSigningUp()

      expect(wrapper).toMatchSnapshot()
    })
  })

  describe('mapDispatchToProps', () => {
    it('should call dispatch with the addUser action', () => {
      const mockDispatch = jest.fn()
      const expected = Actions.addUser(mockEmail, mockPassword, mockId)

      const mappedProps = mapDispatchToProps(mockDispatch)
      mappedProps.addUser(mockEmail, mockPassword, mockId)

      expect(mockDispatch).toHaveBeenCalledWith(expected)
    })
  })
})