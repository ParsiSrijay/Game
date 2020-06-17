import React,{ Component } from 'react';
import { Navbar, NavbarBrand,Jumbotron,Nav,NavbarToggler,Collapse,NavItem,Modal,Button,ModalHeader,ModalBody,Form,FormGroup,Input,Label,Row,Col } from 'reactstrap';
import {NavLink} from 'react-router-dom';
import { Control,LocalForm } from 'react-redux-form';
import  QuestionForm  from './QuestionComponent';
import { Link,Redirect,withRouter } from 'react-router-dom';

class Header extends Component{
	constructor(props){
		super(props);
		this.state={
			isNavOpen:false,
			isLoginModalOpen:false,
			isSignUpModalOpen:false,
			isRedirect:false,
		}
		this.toggleNav = this.toggleNav.bind(this);
		this.toggleLoginModal = this.toggleLoginModal.bind(this);
		this.toggleSignUpModal = this.toggleSignUpModal.bind(this);
		this.handleSignUp = this.handleSignUp.bind(this);
		
	}

	
	toggleNav(){
		this.setState({
			isNavOpen:!this.state.isNavOpen
		});
	}

	toggleLoginModal(){
		this.setState({
			isLoginModalOpen:!this.state.isLoginModalOpen
		})
	}

	toggleSignUpModal(){
		this.setState({
			isSignUpModalOpen:!this.state.isSignUpModalOpen
		})
	}

	handleLogin(event){
		this.toggleLoginModal();
		this.props.history.push('/questions');
	}


	handleSignUp(values){
		this.toggleSignUpModal();
		this.props.postUser(values.firstname,values.lastname,values.username,values.password);
	}	


	render(){
		return(
			<React.Fragment>
				<Navbar expand="md">
	          		<div className="container">
	          			<NavbarToggler onClick={this.toggleNav} />
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav className="ml-auto" navbar>
                            	<NavItem>
                            		<Button outline onClick={this.toggleLoginModal}>
                            			<span className="fa fa-sign-in fa-lg">Login</span>
                            		</Button>
                            	</NavItem>
                            	<NavItem>
                            		<Button outline onClick={this.toggleSignUpModal}>
                            			<span className="fa fa-user fa-lg">Sign Up</span>
                            		</Button>
                            	</NavItem>
                            </Nav>
                        </Collapse>
	          		</div>
	        	</Navbar>
	        	<Modal isOpen={this.state.isLoginModalOpen} toggle={this.toggleLoginModal}>
	        		<ModalHeader toggle={this.toggleLoginModal}>Login</ModalHeader>
	        		<ModalBody>
	        			<LocalForm onSubmit={this.handleLogin.bind(this)}>
	        				<Row className="form-group">
	        					<Label htmlFor=".username" md={12}>Username</Label>
                                <Col md={12}>
                                    <Control.text model=".username" id="username" 
                                    name="username" placeholder="Userame" 
                                    className="form-control"
                                    />
                                </Col>
	        				</Row>
	        				<Row className="form-group">
	        					<Label htmlFor=".password" md={12}>Password</Label>
                                <Col md={12}>
                                    <Control.text model=".password" id="password" 
                                    name="password" placeholder="Password" 
                                    className="form-control"
                                    />
                                </Col>
	        				</Row>
	        				<Button type="submit" value="submit" className="bg-primary">Login</Button>
	        			</LocalForm>
	        		</ModalBody>
	        	</Modal>
	        	<Modal isOpen={this.state.isSignUpModalOpen} toggle={this.toggleSignUpModal}>
	        		<ModalHeader toggle={this.toggleSignUpModal}>Sign Up</ModalHeader>
	        		<ModalBody>
	        			<LocalForm onSubmit={(values)=>this.handleSignUp(values)}>
	        				<Row className="form-group">
	        					<Label htmlFor=".firstname" md={12}>First Name</Label>
                                <Col md={12}>
                                    <Control.text model=".firstname" id="firstname" 
                                    name="firstname" placeholder="First Name" 
                                    className="form-control"
                                    />
                                </Col>
	        				</Row>
	        				<Row className="form-group">
	        					<Label htmlFor=".lastname" md={12}>Last Name</Label>
                                <Col md={12}>
                                    <Control.text model=".lastname" id="lastname" 
                                    name="lastname" placeholder="Last Name" 
                                    className="form-control"
                                    />
                                </Col>
	        				</Row>
	        				<Row className="form-group">
	        					<Label htmlFor=".username" md={12}>Username</Label>
                                <Col md={12}>
                                    <Control.text model=".username" id="username" 
                                    name="username" placeholder="Userame" 
                                    className="form-control"
                                    />
                                </Col>
	        				</Row>
	        				<Row className="form-group">
	        					<Label htmlFor=".password" md={12}>Password</Label>
                                <Col md={12}>
                                    <Control.text model=".password" id="password" 
                                    name="password" placeholder="Password" 
                                    className="form-control"
                                    />
                                </Col>
	        				</Row>
	        				<Button type="submit" value="submit" className="bg-primary" >Register</Button>
	        			</LocalForm>
	        		</ModalBody>
	        	</Modal>
			</React.Fragment>
		);
	}
} 
export default withRouter(Header);