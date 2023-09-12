import { useState } from 'react';
import Collapsible from '../collapsible/Collapsible';

function WExperienceForm() {
    return(
        <form className="we-c-form">
            <div className="we-date">
                <input placeholder='starting date'></input>
                <span>-</span>
                <input placeholder='end date'></input>
            </div>
            <div>
                <div className="we-info">
                    <label>Company Name</label>
                    <input></input>
                    <label>Position title</label>
                    <input></input>
                    <label>Description</label>
                    <input></input>
                </div>
                <div className="we-tools">
                    <button>Edit</button>
                    <button>Save</button>
                    <button type="submit">Submit</button>
                    <button>Delete</button>
                </div>
            </div>
        </form>
    );
}

export default function WExperienceControl() {
    return(
        <section className='control' id='we-control'>
            <Collapsible title='Work Experience' content={<WExperienceForm />} />
            <button>Add Entry</button>
        </section>
    );
}