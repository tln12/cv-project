export default function WExperienceDisplay({ work }) {
  const workEntries = work.map((entry) => {
    if (!entry.hidden) {
      return (
        <li key={entry.id}>
          <span>
            {entry.startingDate}-{entry.endDate}
          </span>
          <div>
            <h4>{entry.name}</h4>
            <span>{entry.title}</span>
          </div>
          <div>{entry.description}</div>
        </li>
      );
    }
  });
  return (
    <>
      <section id='ee-d-info'>
        <h3>Work Experience</h3>
        <ul>{workEntries}</ul>
      </section>
    </>
  );
}
