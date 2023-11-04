import styled from 'styled-components';

const Li = styled.li`
  padding: var(--padding-tb-list-control) var(--padding-lr-control);
  border: 1px solid var(--side-font-color);
  margin: -1px;
  display: flex;
  justify-content: space-between;
  gap: 10px;
`;

const AddEntry = styled.button`
  margin: 10px;
  width: 100px;
  align-self: center;
  background-color: var(--shadow-color);

  &:hover {
    border: double white;
    color: white;
  }
`;

const Toolbar = styled.div`
  align-self: center;
  display: flex;
  gap: 10px;
`;

function RegisterEntry({
  entry,
  handleEdit,
  handleDeleteEntry,
  handleToggleVisibility,
}) {
  return (
    <Li data-id={entry.id}>
      <div>
        <h4>{entry.name}</h4>
        <span>{entry.title}</span>
      </div>
      <Toolbar>
        <button
          className='material-symbols-outlined'
          onClick={handleDeleteEntry}
        >
          delete
        </button>
        <button className='material-symbols-outlined' onClick={handleEdit}>
          edit
        </button>
        <button
          className='material-symbols-outlined'
          onClick={handleToggleVisibility}
        >
          {entry.hidden ? 'visibility_off' : 'visibility'}
        </button>
        <button className='material-symbols-outlined '>drag_handle</button>
      </Toolbar>
    </Li>
  );
}

export default function Register({
  data,
  handleCreateEntry,
  handleDeleteEntry,
  handleEdit,
  handleToggleVisibility,
}) {
  let entries = data.map((entry) => {
    return (
      <RegisterEntry
        key={entry.id}
        entry={entry}
        handleEdit={handleEdit}
        handleDeleteEntry={handleDeleteEntry}
        handleToggleVisibility={handleToggleVisibility}
      />
    );
  });
  return (
    <>
      <ul>{entries}</ul>
      <AddEntry
        className='material-symbols-outlined'
        onClick={handleCreateEntry}
      >
        add
      </AddEntry>
    </>
  );
}
