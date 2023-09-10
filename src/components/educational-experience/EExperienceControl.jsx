import { useState } from 'react';
import './EExperience.css';
import { v4 as uuidv4 } from 'uuid';

function EEListElement({ entry, handleEdit, handleDeleteEntry, handleToggleVisibility }) {
    return(
        <li className='ee-c-entry' data-id={entry.id}>
            <div className='ee-c-info'>
                <h4>{entry.schoolName}</h4>
                <span>{entry.titleOfStudy}</span>
            </div>
            <div className="ee-c-tools">
                <span className="material-symbols-outlined" onClick={handleDeleteEntry}>delete</span>
                <span className="material-symbols-outlined" onClick={handleEdit}>edit</span>
                <span className="material-symbols-outlined" onClick={handleToggleVisibility}>{entry.hidden? 'visibility_off' : 'visibility'}</span>
                <span className="material-symbols-outlined ">drag_handle</span>
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
            <span className="material-symbols-outlined" onClick={handleCreateEntry}>add</span>
        </>
    );
}

function EEForm({ formData, handleChange, handleReturn, mode, handleSubmit }) {
    return(
        <form className="ee-c-form" data-id={formData.id} onSubmit={handleSubmit}>
            {mode == 'edit' && <span className="material-symbols-outlined" onClick={handleReturn}>arrow_back</span>}
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
            {mode == 'create' && <button type='button' onClick={handleReturn}><span className="material-symbols-outlined">close</span></button>}
            <button type='submit'><span className="material-symbols-outlined">check</span></button>
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
        <section id="ee-control">
            <h2 className='section-title'>
                <span>Education</span>
                <span className="material-symbols-outlined ">arrow_drop_down</span>
            </h2>
            {content}
        </section>
    );
}