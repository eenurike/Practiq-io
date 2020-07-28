import React, { Component } from "react";
import "./WizardContainer.css";
import AboutCompany from "./AboutCompany/AboutCompany";
import Languages from "./Languages/Languages";
import TaskType from "./TaskType/TaskType";
import Deliverables from "./Deliverables/Deliverables";
import General from "./General/General";
import Timeline from "./Timeline/Timeline";
import Success from "./Success/Success";
import { Animated } from "react-animated-css";

export class WizardContainer extends Component {
	state = {
		data: {}
	};

	prepareObject = () => {
		
		let data = {...this.state.data};
		let taxonomy = data.taxonomy.selectedTags.map(item => {
			return {skill: item[0], level: item[1]}
		})
		let specification = {}
		let taskData = Object.values(data.specification.taskData)[0]
		if(taskData.designLink){
			specification.links = [taskData.designLink]
		}
		let backendData = {
			user: {
				email: data.aboutCompany.email,
				companyName: data.aboutCompany.companyName,
				website: data.aboutCompany.website
			},
			description: data.generalInformation.generalInformation,
			type: data.specification.taskType,
			requirements:{
				taxonomy: taxonomy
			},
			deliverables : {}
		}

	}

	componentWillUnmount() {
		let data = { ...this.state.data };
		data = {};
		this.setState({ data });
	}

	setWizardProperties = (properties) => {
		const key = Object.keys(properties);
		const value = Object.values(properties);
		let data = { ...this.state.data };
		data[[key[0]]] = value[0];
		this.setState({ data });

		if(this.props.step === 7){
			this.prepareObject()
		}
	};

	render() {
		const containerState = this.state;
		const { back, next, step, toggleWizard } = this.props;
		
		return (
			<>
				{step === 1 ? (
					<Animated
						animationIn="fadeIn"
						animationOut="fadeOut"
						isVisible={step === 1}
					>
						<AboutCompany
							nextStep={next}
							toggleWizard={toggleWizard}
							setWizardProperties={this.setWizardProperties}
							containerState={containerState.data.aboutCompany}
						/>
					</Animated>
				) : null}

				{step === 2 ? (
					<Animated
						animationIn="fadeIn"
						animationOut="fadeOut"
						isVisible={step === 2}
					>
						<Languages
							prevStep={back}
							nextStep={next}
							setWizardProperties={this.setWizardProperties}
							containerState={containerState.data.taxonomy}
						/>
					</Animated>
				) : null}

				{step === 3 ? (
					<Animated
						animationIn="fadeIn"
						animationOut="fadeOut"
						isVisible={step === 3}
					>
						<TaskType
							prevStep={back}
							nextStep={next}
							setWizardProperties={this.setWizardProperties}
							containerState={containerState.data.specification}
						/>
					</Animated>
				) : null}

				{step === 4 ? (
					<Animated
						animationIn="fadeIn"
						animationOut="fadeOut"
						isVisible={step === 4}
					>
						<Deliverables
							prevStep={back}
							nextStep={next}
							setWizardProperties={this.setWizardProperties}
							containerState={containerState.data.taxonomy}
						/>
					</Animated>
				) : null}

				{step === 5 ? (
					<Animated
						animationIn="fadeIn"
						animationOut="fadeOut"
						isVisible={step === 5}
					>
						<General
							prevStep={back}
							nextStep={next}
							setWizardProperties={this.setWizardProperties}
							containerState={containerState.data.generalInformation}
						/>
					</Animated>
				) : null}

				{step === 6 ? (
					<Animated
						animationIn="fadeIn"
						animationOut="fadeOut"
						isVisible={step === 6}
					>
						<Timeline
							prevStep={back}
							nextStep={next}
							setWizardProperties={this.setWizardProperties}
							containerState={containerState.data.projectTimelines}
						/>
					</Animated>
				) : null}

				{step === 7 ? (
					<Animated
						animationIn="fadeIn"
						animationOut="fadeOut"
						isVisible={step === 7}
					>
						<Success
							toggleWizard={toggleWizard}
							containerState={containerState.data}
						/>
					</Animated>
				) : null}
			</>
		);
	}
}

export default WizardContainer;