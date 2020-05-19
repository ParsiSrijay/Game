import React  from 'react';
import { Card,CardImg,CardImgOverlay,CardText,CardBody,CardTitle,Breadcrumb,BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';


	function RenderComments({comments})
	{
		if(comments==null)
		{
			return <div></div>
		}
		const list = comments.map((comment)=>{
			return(
				<div key={comment.id}>
					{comment.comment}
					<br/><br/>
					--{comment.author},{new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(comment.date)))}
					<br/><br/>
				</div>
			);
		})
		return(
			<ul className="list-unstyled">
				{list}
			</ul>
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
			const dish=props.dish
			if(dish==null)
			{
				return(
					<div>
					</div>
				);	
			}
			else{
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
								<RenderDishItem dish={dish}/>				
							</div>
							<div className="col-12 col-md-5 m-1">
								<h4>Comments</h4>
								<RenderComments comments={props.comments}/>
							</div>
						</div>
					</div>
				);	
			}	
		}
		
	
export default DishDetail;