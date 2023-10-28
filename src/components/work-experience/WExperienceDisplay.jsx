export default function WExperienceDisplay({ work }) {
  const workEntries = work.map((entry) => {
    if (!entry.hidden) {
      return (
        <li key={entry.id}>
          <span>
            {entry.startingDate.slice(2, 4) +
              '/' +
              entry.startingDate.slice(0, 4)}
          </span>
          &ndash;
          <span>
            {entry.endDate == new Date().toISOString().slice(0, 10)
              ? 'present'
              : entry.endDate.slice(2, 4) + '/' + entry.endDate.slice(0, 4)}
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
