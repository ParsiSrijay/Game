import React  from 'react';
import { Card,CardImg,CardImgOverlay,CardText,CardBody,CardTitle } from 'reactstrap';



	function RenderComments({dish})
	{
		if(dish.comments==null)
		{
			return <div></div>
		}
		const list = dish.comments.map((comment)=>{
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
							<div className="col-12 col-md-5 m-1">
								<RenderDishItem dish={dish}/>				
							</div>
							<div className="col-12 col-md-5 m-1">
								<h4>Comments</h4>
								<RenderComments dish={dish}/>
							</div>
						</div>
					</div>
				);	
			}	
		}
		
	
export default DishDetail;