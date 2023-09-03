
export default function EducationalExperienceFormEntry() {
    return(
        <form className="ee-entry">
            <div className="ee-date">
                <input placeholder='starting date'></input>
                <span>-</span>
                <input placeholder='end date'></input>
            </div>
            <div className="ee-info">
                <label>School Name</label>
                <input></input>
                <label>Title of Study</label>
                <input></input>
            </div>
            <div className="ee-tools">
                <button type="submit">Submit</button>
                <button>Edit</button>
                <button>Save</button>
                <button>Delete</button>
            </div>
        </form>
    );
}