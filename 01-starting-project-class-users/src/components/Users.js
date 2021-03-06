import { Component } from 'react';
import User from './User';

import classes from './Users.module.css';

// cannot use hooks in a class-based component

// class needs a render() method
// in class-based components, state is always an object
// and it is always called "state", this.state
class Users extends Component {
  constructor() {
    super();
    this.state = {
      showUsers: true,
      more: 'Test'
    };
  }

  componentDidUpdate() {
    // try {
    //   someCodeWhichMightFail()
    // } catch (err) {
    //   handleError()
    // }

    if (this.props.users.length === 0) {
      // bubbles up the stack across components.
      throw new Error('No users provided!');
    }
  }

  toggleUsersHandler() {
    // this.state.showUsers = false; // NOT!
    // return an object because it is a class
    this.setState((curState) => {
      return { showUsers: !curState.showUsers };
    });
  }

  render() {
    // can define a helper method in the render object
    const usersList = (
      <ul>
        {this.props.users.map((user) => (
          <User key={user.id} name={user.name} />
        ))}
      </ul>
    );
    // this points to the class
    // must bind methods to 'this'
    // 'this' is a keyword referring to the class
    return (
      <div className={classes.users}>
        <button onClick={this.toggleUsersHandler.bind(this)}>
          {this.state.showUsers ? 'Hide' : 'Show'} Users
        </button>
        {this.state.showUsers && usersList}
      </div>
    );
  }
}

export default Users;

// FUNCTIONAL METHOD WITH THE USESTATE HOOK
// const Users = () => {
//   const [showUsers, setShowUsers] = useState(true);

//   const toggleUsersHandler = () => {
//     setShowUsers((curState) => !curState);
//   };

//   const usersList = (
//     <ul>
//       {DUMMY_USERS.map((user) => (
//         <User key={user.id} name={user.name} />
//       ))}
//     </ul>
//   );

//   return (
//     <div className={classes.users}>
//       <button onClick={toggleUsersHandler}>
//         {showUsers ? 'Hide' : 'Show'} Users
//       </button>
//       {showUsers && usersList}
//     </div>
//   );
// };

// export default Users;
