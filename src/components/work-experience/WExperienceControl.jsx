import { useState } from 'react';
import Collapsible from '../collapsible/Collapsible';
import './WExperience.css';

function WEListElement({ entry, handleEdit, handleDeleteEntry, handleToggleVisibility }) {
    return(
        <li className='we-c-entry' data-id={entry.id} data-type='work'>
            <div className='we-c-info'>
                <h4>{entry.companyName}</h4>
                <span>{entry.positionTitle}</span>
            </div>
            <div className="we-c-tools">
                <button className="material-symbols-outlined" onClick={handleDeleteEntry}>delete</button>
                <button className="material-symbols-outlined" onClick={handleEdit} >edit</button>
                <button className="material-symbols-outlined" onClick={handleToggleVisibility}>{entry.hidden? 'visibility_off' : 'visibility'}</button>
                <button className="material-symbols-outlined ">drag_handle</button>
            </div>
        </li>
    );
}

function WEList({ work, handleCreateEntry, handleDeleteEntry, handleEdit, handleToggleVisibility }) {
    let workEntries = work.map(entry => {
        return(
            <WEListElement 
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
            <ul>{workEntries}</ul>
            <button className='add-entry material-symbols-outlined' onClick={handleCreateEntry} >add</button>
        </>
    );
}

function WEForm({handleReturn, mode } ) {
    return(
        <form className="we-c-form">
            {mode == 'edit' && <button className="we-c-return material-symbols-outlined" onClick={handleReturn}>arrow_back</button>}
            <div className="we-date">
                <label htmlFor="starting-date">
                    <span>starting date</span>
                    <input type='date' id='starting date'></input>
                </label>
                <label htmlFor="end-date">
                    <span>end date</span>
                    <input type='date' id='end-date'></input>
                </label>
            </div>
            <label>
                <span>company name</span>
                <input id='company-name'></input>
            </label>
            <label htmlFor='position-title'>
                <span>position title</span>
                <input id='position-title'></input>
            </label>
            <label htmlFor='description'>
                <span>description</span>
                <textarea id='description' rows='5'></textarea>
            </label>
            <div className='we-c-submit'>
                {mode == 'create' && <button className="material-symbols-outlined" type='button' onClick={handleReturn}>close</button>}
                <button className="material-symbols-outlined" type='submit'>check</button>
            </div>
        </form>
    );
}

export default function WExperienceControl(props) {
    const { work, handleDeleteEntry } = props;
    let content;
    content = <WEList
                work={work}
                handleDeleteEntry={handleDeleteEntry}
                 />

    return(
        <section className='control' id='we-control'>
            <Collapsible title='Work Experience' content={content}/>
        </section>
    );
}