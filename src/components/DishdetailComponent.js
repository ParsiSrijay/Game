import React,{ Component }  from 'react';
import { Card,CardImg,CardImgOverlay,CardText,CardBody,CardTitle,Breadcrumb,BreadcrumbItem,Button,Label,Col,Row,Modal,ModalHeader,ModalBody } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Control,LocalForm,Errors } from 'react-redux-form';
import { Loading } from './LoadingComponent';

	function RenderComments({comments,addComment,dishId})
	{
		if(comments==null)
		{
			return <div></div>
		}
		const list = comments.map((comment)=>{
			return(
				<div key={comment.id}>
					{comment.comment}
					<br/>
					--{comment.author},{new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(comment.date)))}
					<br/><br/>
				</div>
			);
		})
		return(
			<>
				<ul className="list-unstyled">
					{list}
				</ul>
				<CommentForm dishId={dishId} addComment={addComment} />
			</>
		);
	}

	function RenderDishItem({dish}){
		return(
			<Card>
				<CardImg width="100%" src={dish.image} alt={dish.name}/>
				<CardBody>
					<CardTitle>{dish.name}</CardTitle>
					<CardText>{dish.description}</CardText>
				</CardBody>
			</Card>
		);
	}
	
		const DishDetail = (props) =>{
			if(props.isLoading){
				return(
					<div className="container">
						<div className="row">
							<Loading/>
						</div>
					</div>
				);
			}
			else if(props.errMess){
				return(
					<div className="container">
						<div className="row">
							<h4>{props.errMess}</h4>
						</div>
					</div>
				);
			}
			else if(props.dish!=null){
				return(
					<div className="container">
						<div className="row">
	                    	<Breadcrumb>
								<BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
	                        	<BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
	                    	</Breadcrumb>
	                    	<div className="col-12">
	                        	<h3>{props.dish.name}</h3>
	                        	<hr />
	                    	</div>                
	                	</div>
						<div className="row">
							<div className="col-12 col-md-5 m-1">
								<RenderDishItem dish={props.dish}/>				
							</div>
							<div className="col-12 col-md-5 m-1">
								<h4>Comments</h4>
								<RenderComments comments={props.comments}
									addComment={props.addComment}
									dishId={props.dish.id}
								/>
							</div>
						</div>
					</div>
				);	
			}	
		}
		
const required = (val) => val && val.length;
const maxLength = (len) => (val) =>!(val) || (val.length <= len);
const minLength = (len) => (val) =>(val) && (val.length >= len);

class CommentForm extends Component{
	constructor(props){
		super(props);
		this.state={
			isModalOpen:false
		}
		this.toggleModal = this.toggleModal.bind(this);
	}

	toggleModal(){
		this.setState({
			isModalOpen:!this.state.isModalOpen
		})
	}

	handleComment(values){
		this.toggleModal();
		this.props.addComment(this.props.dishId,values.rating,values.author,values.message);
	}


	render(){
		return(
			<>
			<button type="button" class="btn btn-outline-secondary" onClick={this.toggleModal}>
				<i className="fas fa-pen"></i>Submit Comment
			</button>
			<Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
	        		<ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
	        		<ModalBody>
	        			<LocalForm onSubmit={(values) => this.handleComment(values)}>
	        				<Row className="form-group">
	        					<Col md={{size:12}}>
                                    <Control.select model=".rating" 
                                    name="rating" 
                                    className="form-control">
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </Control.select>
                                </Col>
							</Row>
	        				<Row className="form-group">
	        					<Label htmlFor=".author" md={12}>Your Name</Label>
                                <Col md={12}>
                                    <Control.text model=".author" id="name" 
                                    name="name" placeholder="Your Name" 
                                    className="form-control"
                                    validators={{required,
                                    	minLength:minLength(2),
                                    	maxLength:maxLength(15)}}
                                    />
                                    <Errors 
                                    className="text-danger"
                                    model=".author"
                                    show="touched"
                                    messages={{
                                        required: 'Required ',
                                        minLength: 'Must be greater than 2 characters ',
                                        maxLength: 'Must be 15 characters or less '
                                    }}/>
                                </Col>
	        				</Row>
	        				<Row className="form-group">
                                <Label htmlFor=".message" md={12}>Feedback</Label>
                                <Col md={12}>
                                    <Control.textarea model=".message" 
                                    id="message" name="message" 
                                    rows="6" 
                                    className="form-control"/>
                                </Col>
                            </Row>
	        				<Button type="submit" value="submit" className="bg-primary" >Submit</Button>
	        			</LocalForm>
	        		</ModalBody>
	        	</Modal>
	        	</>
		);
	}
}

export default DishDetail;