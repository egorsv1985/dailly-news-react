import './Headliner.css';
import img1 from './../../assets/images/headliner-img-1.jpg';

function Headliner() {
return (

<article className="headliner">
	<img className="thumbnail-img" src={img1} alt="" />
	<div className="info">
		<h1 className="title">Hate speech vs free speech</h1>
		<div className="rating">
			<div className="like">
				<img src="" alt="" className="like-icon" />
				<span className="text"></span>
			</div>
			<div className="dialike">
				<img src="" alt="" className="dislike-icon" />
				<span className="text"></span>
			</div>
		</div>
		<div className="wrapper">
			<span className="label"></span>
			<div className="time">
				<img src="" alt="" className="time-icon" />
				<span className="time-text"></span>
			</div>
		</div>
	</div>
</article>

);
}

export default Headliner;