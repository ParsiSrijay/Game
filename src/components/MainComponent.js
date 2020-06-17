import React, { Component } from "react";
import { postUser,postQuestion } from '../redux/ActionCreators';
import Header from './HeaderComponent';
import QuestionForm from './QuestionComponent';
import { Switch,Route,Redirect,withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { actions } from 'react-redux-form';
import { TransitionGroup, CSSTransition } from 'react-transition-group';


const mapDispatchToProps = (dispatch) => ({
    postUser:(firstname,lastname,username,password) =>{dispatch(postUser(firstname,lastname,username,password))},
    postQuestion: (category, question, comment) => dispatch(postQuestion(category, question, comment))
});

class Main extends Component {
  
  render() {
    return (
      <div>
        <TransitionGroup>
          <CSSTransition key={this.props.location.key} classNames="page" timeout={300}> 
            <Switch>
              <Route exact path="/" component={()=><Header postUser={this.props.postUser} postQuestion={this.props.postQuestion}/>}/>		
              <Route exact path="/questions" component={() => <QuestionForm postQuestion={this.props.postQuestion}/>}/>
              <Redirect to="/"/>
            </Switch>
          </CSSTransition>
        </TransitionGroup>
      </div>
    );
  }
}

export default withRouter((connect(null,mapDispatchToProps)(Main)));

