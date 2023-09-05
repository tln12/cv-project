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

function EEList( {education, handleEdit} ) {
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

function EEForm({ education, handleReturn }) {
    return(
        <form className="ee-entry">
            <span className="material-symbols-outlined" onClick={handleReturn}>arrow_back</span>
            <div className="ee-date">
                <input id="starting-date" placeholder='starting date' value={education.startingDate}></input>
                <span>-</span>
                <input id="end-date" placeholder='end date' value={education.endDate}></input>
            </div>
            <div className="ee-info">
                <label>School Name</label>
                <input id="school-name" value={education.schoolName}></input>
                <label>Title of Study</label>
                <input id="title-of-study" value={education.titleOfStudy}></input>
            </div>
            <div className="ee-tools">
                <button type="submit">Submit</button>
                <button>Edit</button>
                <button>Save</button>
                <button>Delete</button>
            </div>
            <button type='submit'><span className="material-symbols-outlined" onClick={handleReturn}>check</span></button>
        </form>
    );
}

export default function EducationalExperienceControl( {education} ) {
    const [formShown, setFormShown] = useState(false);
    const [focus, setFocus] = useState('');
    const content = formShown ? <EEForm education={focus} handleReturn={() => handleReturn()}/> : <EEList education={education} handleEdit={(e) => handleEdit(e)}/>;

    const handleEdit = e => {
        const found = education.find(element => element.id == e.target.attributes['data-id'].value);
        setFocus(found);
        setFormShown(true);
    };

    const handleReturn = () => setFormShown(false);

    return(
        <section id="ee-control">
            <h2 >Education</h2>
            {content}
        </section>
    );
}