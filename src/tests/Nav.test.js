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