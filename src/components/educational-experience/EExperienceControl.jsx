import { useState } from 'react';
import './EExperience.css';
import Collapsible from '../collapsible/Collapsible';

function EEListElement({ entry, handleEdit, handleDeleteEntry, handleToggleVisibility }) {
    return(
        <li className='ee-c-entry' data-id={entry.id}>
            <div className='ee-c-info'>
                <h4>{entry.schoolName}</h4>
                <span>{entry.titleOfStudy}</span>
            </div>
            <div className="ee-c-tools">
                <button className="material-symbols-outlined" onClick={handleDeleteEntry}>delete</button>
                <button className="material-symbols-outlined" onClick={handleEdit} >edit</button>
                <button className="material-symbols-outlined" onClick={handleToggleVisibility}>{entry.hidden? 'visibility_off' : 'visibility'}</button>
                <button className="material-symbols-outlined ">drag_handle</button>
            </div>
        </li>
    );
}

function EEList({ education, handleCreateEntry, handleDeleteEntry, handleEdit, handleToggleVisibility }) {
    let educationEntries = education.map(entry => {
        return(
            <EEListElement 
                key={entry.id} 
                entry={entry}
                handleEdit={handleEdit}
                handleDeleteEntry={handleDeleteEntry}
                handleToggleVisibility={handleToggleVisibility}
            />
        );
    });
    return (
        <>
            <ul>{educationEntries}</ul>
            <button className='ee-c-add material-symbols-outlined' onClick={handleCreateEntry} >add</button>
        </>
    );
}

function EEForm({ formData, handleChange, handleReturn, mode, handleSubmit }) {
    return(
        <form className="ee-c-form" data-id={formData.id} onSubmit={handleSubmit}>
            {mode == 'edit' && <button className="ee-c-return material-symbols-outlined" onClick={handleReturn}>arrow_back</button>}
            <div className="ee-c-date">
                <label>
                    <span>starting date</span>
                    <input type="date" id="starting-date" placeholder='starting date' value={formData.startingDate} onChange={handleChange}></input>
                </label>
                <label>
                    <span>end date</span>
                    <input type="date" id="end-date" placeholder='end date' value={formData.endDate} onChange={handleChange}></input>
                </label>
            </div>
            <label>
                <span>school name</span>
                <input id="school-name" value={formData.schoolName} onChange={handleChange}></input>
            </label>
            <label>
                <span>title of study</span>
                <input id="title-of-study" value={formData.titleOfStudy} onChange={handleChange}></input>
            </label>
            <div className='ee-c-submit'>
                {mode == 'create' && <button className="material-symbols-outlined" type='button' onClick={handleReturn}>close</button>}
                <button className="material-symbols-outlined" type='submit'>check</button>
            </div>
        </form>
    );
}

export default function EExperienceControl(props) {
    const { education, handleEdit, handleCreateEntry, 
            controlStatus, handleChange, handleReturn,
            handleSubmit, handleDeleteEntry, handleToggleVisibility, formData } = props;
    let content;
    
    // render determines whether EEList or EEForm is rendered
    if(controlStatus.render == 'list') {
        content = <EEList
                    education={education}
                    handleEdit={handleEdit} 
                    handleCreateEntry={handleCreateEntry}
                    handleDeleteEntry={handleDeleteEntry}
                    handleToggleVisibility={handleToggleVisibility}
                    />;
    } else if (controlStatus.render == 'form') {
        content = <EEForm 
                    formData={formData} 
                    handleChange={handleChange}
                    handleReturn={handleReturn}
                    handleSubmit={handleSubmit}
                    mode={controlStatus.mode}
                    />;
    }

    return(
        <section className='control' id='ee-control'>
            <Collapsible title='Education' content={content}/>
        </section>
    );
}