import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Homepage from './components/pages/homepage/homepage.component';
import ShopPage from './components/pages/shop/shop.component.jsx';
import SignInAndSignUp from './components/pages/sign-in-sign-up/sign-in-sign-up.component.jsx';
import { auth, createUserProfileDocument } from './components/firebase/firebase.utils';
import Header from './components/header/header.component';
import './App.css';


class App extends React.Component {
  constructor(){
    super();

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged( async userAuth => {
      if (userAuth) {

        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          }, 
          
          () => {
            console.log(this.state);
          })
          
        });
      }
      else {
        this.setState({currentUser: userAuth});
      }
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();  
  }

  render(){
    return (
      <div>
        <Header currentUser={this.state.currentUser}/>
        <Switch>
          <Route exact path='/' component={Homepage}/>
          <Route path ='/shop' component={ShopPage}/>
          <Route path='/signin' component={SignInAndSignUp}/>
        </Switch>
      </div>
    );
  }
}

export default App;