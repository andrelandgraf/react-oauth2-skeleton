import React from 'react';
import PropTypes from 'prop-types';

// new context
const UserStateContext = React.createContext();

// corresponding provider component
class UserStateProvider extends React.Component {
    constructor( props ) {
        super( props );
        this.state = {
            user: undefined,
        };
    }

  setUser = ( user ) => {
      this.setState( { user } );
  }

  render() {
      const { children } = this.props;
      const { user } = this.state;
      return (
          <UserStateContext.Provider value={{
              user,
              setUser: this.setUser,
          }}
          >
              {children}
          </UserStateContext.Provider>
      );
  }
}

UserStateProvider.propTypes = {
    children: PropTypes.oneOfType( [
        PropTypes.arrayOf( PropTypes.node ),
        PropTypes.node,
    ] ).isRequired,
};

export { UserStateContext, UserStateProvider };
