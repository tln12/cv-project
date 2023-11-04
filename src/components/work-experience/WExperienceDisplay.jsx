export default function WExperienceDisplay({
  work,
  StyledEntry,
  StyledTitle,
  StyledLine,
}) {
  const workEntries = work.map((entry) => {
    if (!entry.hidden) {
      return (
        <StyledEntry key={entry.id}>
          <StyledTitle>{entry.title}</StyledTitle>
          <div>
            <span>{entry.name + ' | '}</span>
            <span>
              {entry.startingDate.slice(5, 7) +
                '/' +
                entry.startingDate.slice(0, 4)}
            </span>
            &ndash;
            <span>
              {entry.endDate == new Date().toISOString().slice(0, 10)
                ? 'present'
                : entry.endDate.slice(5, 7) + '/' + entry.endDate.slice(0, 4)}
            </span>
          </div>
          <div>{entry.description}</div>
        </StyledEntry>
      );
    }
  });
  return (
    <>
      <section>
        <h3>WORK EXPERIENCE</h3>
        <StyledLine />
        <ul>{workEntries}</ul>
      </section>
    </>
  );
}
