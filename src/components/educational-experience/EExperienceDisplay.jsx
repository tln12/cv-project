
export default function EExperienceDisplay({ education }) {
    const edcuationEntries = education.map(element => {
        if(!element.hidden) {
            return (
                <li key={element.id}>
                    <span>{element.startingDate}-{element.endDate}</span>
                    <div>
                        <h4>{element.schoolName}</h4>
                        <span>{element.titleOfStudy}</span>
                    </div>
                </li>
            );
        }
    });
    return(
        <>
            <section id="ee-d-info">
                <h3>Educational Experience</h3>
                <ul>{edcuationEntries}</ul>
            </section>
        </>
    );
}