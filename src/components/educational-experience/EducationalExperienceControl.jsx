import { useState } from 'react';
import './EExperience.css';

function EEListElement({ entry, handleEdit }) {
    return(
        <li className='ee-c-entry'>
            <div className='ee-c-info'>
                <span>{entry.schoolName}</span>
                <span>{entry.titleOfStudy}</span>
            </div>
            <div className="ee-c-tools">
                <span className="material-symbols-outlined">delete</span>
                <span className="material-symbols-outlined" data-id={entry.id} onClick={handleEdit}>edit</span>
                <span className="material-symbols-outlined">visibility</span>
                <span className="material-symbols-outlined ">drag_handle</span>
            </div>
        </li>
    );
}

function EEList({ education, handleEdit }) {
    let educationEntries = education.map(entry => {
        return(
            <EEListElement 
                key={entry.id} 
                entry={entry}
                handleEdit={handleEdit}
            />
        );
    });
    return <ul>{educationEntries}</ul>;
}

function EEForm({ education, handleChange, handleReturn }) {
    return(
        <form className="ee-entry" data-id={education.id}>
            <span className="material-symbols-outlined" onClick={handleReturn}>arrow_back</span>
            <div className="ee-date">
                <input id="starting-date" placeholder='starting date' value={education.startingDate} onChange={handleChange}></input>
                <span>-</span>
                <input id="end-date" placeholder='end date' value={education.endDate} onChange={handleChange}></input>
            </div>
            <div className="ee-info">
                <label>School Name</label>
                <input id="school-name" value={education.schoolName} onChange={handleChange}></input>
                <label>Title of Study</label>
                <input id="title-of-study" value={education.titleOfStudy} onChange={handleChange}></input>
            </div>
            <button type='submit'><span className="material-symbols-outlined" onClick={handleReturn}>check</span></button>
        </form>
    );
}

export default function EducationalExperienceControl({ education, handleChange }) {
    const [editForm, setEditForm] = useState(false);
    const [editId, setEditId] = useState('');
    let content = <EEList education={education} handleEdit={(e) => handleEdit(e)}/>;

    if(editForm) {
        content = <EEForm 
                    education={education.find(element => element.id == editId)} 
                    handleChange={handleChange}
                    handleReturn={() => handleReturn()}
                    />;
    }

    const handleEdit = e => {
        const found = education.find(element => element.id == e.target.attributes['data-id'].value);
        setEditId(found.id);
        setEditForm(true);
    };

    const handleReturn = () => {
        setEditForm(false);
        setEditId('');
    };

    return(
        <section id="ee-control">
            <h2 >Education</h2>
            {content}
        </section>
    );
}