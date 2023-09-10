export default function WExperienceDisplay({ work }) {
    const workEntries = work.map(entry => {
        if(!entry.hidden) {
            return (
                <li key={entry.id}>
                    <span>{entry.startingDate}-{entry.endDate}</span>
                    <div>
                        <h4>{entry.companyName}</h4>
                        <span>{entry.positionTitle}</span>
                    </div>
                    <div>{entry.description}</div>
                </li>
            );
        }
    });
    return(
        <>
            <section id="ee-d-info">
                <h3>Work Experience</h3>
                <ul>{workEntries}</ul>
            </section>
        </>
    );
}