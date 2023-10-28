export default function EExperienceDisplay({ education }) {
  const edcuationEntries = education.map((element) => {
    if (!element.hidden) {
      return (
        <li key={element.id}>
          <span>
            {element.startingDate.slice(2, 4) +
              '/' +
              element.startingDate.slice(0, 4)}
          </span>
          &ndash;
          <span>
            {element.endDate == new Date().toISOString().slice(0, 10)
              ? 'present'
              : element.endDate.slice(2, 4) + '/' + element.endDate.slice(0, 4)}
          </span>
          <div>
            <h4>{element.name}</h4>
            <span>{element.title}</span>
          </div>
        </li>
      );
    }
  });
  return (
    <>
      <section id='ee-d-info'>
        <h3>Educational Experience</h3>
        <ul>{edcuationEntries}</ul>
      </section>
    </>
  );
}
