import EducationalExperienceFormEntry from "./EducationalExperienceFormEntry";

export default function EducationalExperienceForm({ education, handleChange, handleSubmit, handleEdit}) {
    return(
        <div id="ee">
            <h2>Educational Experience</h2>
            <EducationalExperienceFormEntry />
            <EducationalExperienceFormEntry />
            <button>Add Entry</button>
        </div>
    );
}