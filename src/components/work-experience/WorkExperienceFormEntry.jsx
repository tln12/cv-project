
export default function WorkExperienceFormEntry() {
    return(
        <form className="we-entry">
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