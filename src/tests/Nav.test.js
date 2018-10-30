import React from 'react';
import { shallow } from 'enzyme';
import { Nav, mapDispatchToProps, mapStateToProps } from '../containers/Nav';
import * as Actions from '../actions'

describe('Nav', () => {
  describe('Nav Component', () => {
    let wrapper;
    let removeUser;

    beforeEach(() => {
      removeUser = jest.fn()
      wrapper = shallow(<Nav
                          userLoggedIn={undefined}
                          removeUser={removeUser}
                        />);
    })

    it('should match the snapshot', () => {
      expect(wrapper).toMatchSnapshot()
    })

    it('should toggle login text depending on user login status', () => {
      wrapper = shallow(<Nav
                          userLoggedIn={1}
                          removeUser={removeUser}
                        />)

      expect(wrapper).toMatchSnapshot()
    })

    // it('should match snapshot while hovering over login', () => {
    // // wrapper.find('.login-btn').simulate('mouseover')
    // const mockEvent = {
    //   target: {
    //     classList: ['login-text']
    //   }
    // }
    // wrapper.instance().handleHover(mockEvent)


    // expect(wrapper).toMatchSnapshot()
    // })

    // it('should call handleHover on hover', () => {

    //   const spy = spyOn(wrapper.instance(), 'handleHover')
    //   wrapper.instance().forceUpdate()
    //   const mockEvent = {
    //     target: {mouseover: true}
    //   }

    //   wrapper.find('.login-btn').simulate('mouseover', mockEvent)
    //   expect(spy).toHaveBeenCalled()

    // })
  })
  describe('mapDispatchToProps', () => {
    it('should call dispatch with the removeUser action', () => {
      const mockDispatch = jest.fn()
      const expected = Actions.removeUser()

      const mappedProps = mapDispatchToProps(mockDispatch)
      mappedProps.removeUser()

      expect(mockDispatch).toHaveBeenCalledWith(expected)
    })
  })

  describe('mapStateToProps', () => {
    it('should parse the userLoggedIn from state', () => {
      const mockState = {
        user: {
          id: 1
        }
      }

      const expected = 1

      const mappedProps = mapStateToProps(mockState)
      expect(mappedProps.userLoggedIn).toEqual(expected)
    })
  })
})