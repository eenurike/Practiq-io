import React from "react";
import "./PromoCard.css";

const PromoCard = props => {

	const cardBodyDelay = props.cardBodyAnimation.delay ? props.cardBodyAnimation.delay : null;
	const cardBodyAosName = props.cardBodyAnimation.name ? props.cardBodyAnimation.name : null;
	const cardBodyDuration = props.cardBodyAnimation.duration ? props.cardBodyAnimation.duration : null;
	const cardAnimationTrigger = props.cardAnimationTrigger ? props.cardAnimationTrigger : null;

	const cardLogoDelay = props.cardLogoAnimation.delay ? props.cardLogoAnimation.delay : null;
	const cardLogoAosName = props.cardLogoAnimation.name ? props.cardLogoAnimation.name : null;
	const cardLogoDuration = props.cardLogoAnimation.duration ? props.cardLogoAnimation.duration : null;

	const cardTitleDelay = props.cardTitleAnimation.delay ? props.cardTitleAnimation.delay : null;
	const cardTitleAosName = props.cardTitleAnimation.name ? props.cardTitleAnimation.name : null;
	const cardTitleDuration = props.cardTitleAnimation.duration ? props.cardTitleAnimation.duration : null;

	const cardTextDelay = props.cardTextAnimation.delay ? props.cardTextAnimation.delay : null;
	const cardTextAosName = props.cardTextAnimation.name ? props.cardTextAnimation.name : null;
	const cardTextDuration = props.cardTextAnimation.duration ? props.cardTextAnimation.duration : null;
	

	let title = null;
	if (props.title) {
		title = (
			<div
				data-aos={cardTitleAosName}
				data-aos-duration={cardTitleDuration}
				data-aos-delay={cardTitleDelay}
				data-aos-anchor={cardAnimationTrigger}
				className="pc-title"
			>
				<p>{props.title}</p>
			</div>
		);
	}

	let subTitle = null;
	if (props.subTitle) {
		subTitle = (
			<div
				data-aos={cardTitleAosName}
				data-aos-duration={cardTitleDuration}
				data-aos-delay={cardTitleDelay} 
				data-aos-anchor={cardAnimationTrigger}
				className="pc-subtitle"
			>
				<p>{props.subTitle}</p>
			</div>
		);
	}

	let textBody = null;
	if (props.textBody) {
		textBody = (
			<div 
				data-aos={cardTextAosName}
				data-aos-duration={cardTextDuration}
				data-aos-delay={cardTextDelay} 
				data-aos-anchor={cardAnimationTrigger}
				className="pc-text-body"
			>
				<p>{props.textBody}</p>
			</div>
		);
	}

	return (
		<div
			data-aos-anchor={cardAnimationTrigger}
			data-aos={cardBodyAosName}
			data-aos-duration={cardBodyDuration}
			data-aos-delay={cardBodyDelay}
			className="promo-card-body"
		>
			<div className="promo-card-img-box">
				<div 
					data-aos={cardLogoAosName}
					data-aos-duration={cardLogoDuration}
					data-aos-delay={cardLogoDelay}
					data-aos-anchor={cardAnimationTrigger}
					className="pc-img"
				>
					<img src={props.imgPath} alt=""/>
				</div>
			</div>

			<div className="promo-card-text-box">
				{title}
				{subTitle}
				{textBody}
			</div>
		</div>
	);
};

export default PromoCard;
