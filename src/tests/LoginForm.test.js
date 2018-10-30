import React from 'react'
import { shallow, mount } from 'enzyme'
import { mockEmail, mockId } from './testMocks';
import { LoginForm, mapDispatchToProps } from '../containers/LoginForm'
import * as Actions from '../actions'

describe('LoginForm', () => {
  describe('LoginFormComponent', () => {
    let wrapper;
    let mockSetUser;

    beforeEach(() => {
      mockSetUser = jest.fn()
      wrapper = shallow(<LoginForm setUser={mockSetUser}/>);
    })

    it('should match the snapshot', () => {
      expect(wrapper).toMatchSnapshot()
    })

    it('state should match the snapshot', () => {
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
      wrapper.instance().forceUpdate()

      wrapper.find('form').simulate('submit')

      expect(spy).toHaveBeenCalled()
    })

    it('should call toggleSigningUp when sign up button is clicked', () => {
      const spy = spyOn(wrapper.instance(), 'toggleSigningUp')
      wrapper.instance().forceUpdate()

      wrapper.find('.lf-sign-up-btn').simulate('click')

      expect(spy).toHaveBeenCalled()
    })

    it('should update state when toggleSigningUp is called', () => {
      expect(wrapper.state('isSigningUp')).toBeFalsy()
      const mockEvent = { preventDefault: jest.fn() }

      wrapper.instance().toggleSigningUp(mockEvent)

      expect(wrapper.state('isSigningUp')).toBeTruthy()

      wrapper.instance().toggleSigningUp(mockEvent)

      expect(wrapper.state('isSigningUp')).toBeFalsy()
    })

    it('should toggle login view when sign up button is clicked', () => {
      const mockEvent = { preventDefault: jest.fn() }

      wrapper.instance().toggleSigningUp(mockEvent)

      expect(wrapper).toMatchSnapshot()
    })

    it('should call addUser if isSigningUp', async () => {
      const spy = spyOn(wrapper.instance(), "createNewUser")
      const mockEvent = { preventDefault: jest.fn() }

      wrapper.instance().setState({ isSigningUp: true })
      await wrapper.instance().handleSubmit(mockEvent);

      expect(spy).toHaveBeenCalled();
    })

    it('should call loginUser if not isSigningUp', async () => {
      const spy = spyOn(wrapper.instance(), "loginUser")
      const mockEvent = { preventDefault: jest.fn() }

      await wrapper.instance().handleSubmit(mockEvent);

      expect(spy).toHaveBeenCalled();
    })
  })

  describe('mapDispatchToProps', () => {
    it('should call dispatch with the addUser action', () => {
      const mockDispatch = jest.fn()
      const expected = Actions.setUser(mockId)

      const mappedProps = mapDispatchToProps(mockDispatch)
      mappedProps.setUser(mockId)

      expect(mockDispatch).toHaveBeenCalledWith(expected)
    })
  })
})