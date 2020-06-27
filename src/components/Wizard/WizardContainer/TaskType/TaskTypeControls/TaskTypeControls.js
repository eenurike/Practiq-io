import React, { Component } from 'react'
import './TaskTypeControls.css';
import ControlsBackend from './ControlsBackend/ControlsBackend';
import ControlsFrontend from './ControlsFrontend/ControlsFrontend';

export default class TaskTypeControls extends Component {


    render() {

        const {programming, taskType, selectTask} = this.props;
        
        let controlsOutput
        if(programming === "backend"){
            controlsOutput = <ControlsBackend selectTask={selectTask} taskType={taskType}/>
        } else if (programming === "frontend"){
            controlsOutput = <ControlsFrontend selectTask={selectTask} taskType={taskType}/>
        }

        return (
            <div className="task-type-controls_frame">
                
                {controlsOutput}

            </div>
        )
    }
}