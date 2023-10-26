import { useState } from 'react';
import Collapsible from '../collapsible/Collapsible';
import './WExperience.css';

function WEListElement({
  entry,
  handleEdit,
  handleDeleteEntry,
  handleToggleVisibility,
}) {
  return (
    <li className='c-entry' data-id={entry.id}>
      <div className='c-entry-info'>
        <h4>{entry.name}</h4>
        <span>{entry.title}</span>
      </div>
      <div className='c-entry-tools'>
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
      </div>
    </li>
  );
}

function WEList({
  work,
  handleCreateEntry,
  handleDeleteEntry,
  handleEdit,
  handleToggleVisibility,
}) {
  let workEntries = work.map((entry) => {
    return (
      <WEListElement
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
      <ul>{workEntries}</ul>
      <button
        className='add-entry material-symbols-outlined'
        onClick={handleCreateEntry}
      >
        add
      </button>
    </>
  );
}

function WEForm({ formData, handleChange, handleReturn, mode, handleSubmit }) {
  return (
    <form className='we-c-form' data-id={formData.id} onSubmit={handleSubmit}>
      {mode == 'edit' && (
        <button
          className='return-btn material-symbols-outlined'
          onClick={handleReturn}
        >
          arrow_back
        </button>
      )}
      <div className='we-date'>
        <label htmlFor='starting-date'>
          <span>starting date</span>
          <input
            type='date'
            id='starting date'
            value={formData.startingDate}
            onChange={handleChange}
          ></input>
        </label>
        <label htmlFor='end-date'>
          <span>end date</span>
          <input
            type='date'
            id='end-date'
            value={formData.endDate}
            onChange={handleChange}
          ></input>
        </label>
      </div>
      <label>
        <span>company name</span>
        <input
          id='company-name'
          value={formData.name}
          onChange={handleChange}
        ></input>
      </label>
      <label htmlFor='position-title'>
        <span>position title</span>
        <input
          id='position-title'
          value={formData.title}
          onChange={handleChange}
        ></input>
      </label>
      <label htmlFor='description'>
        <span>description</span>
        <textarea
          id='description'
          rows='5'
          value={formData.description}
          onChange={handleChange}
        ></textarea>
      </label>
      <div className='we-c-submit'>
        {mode == 'create' && (
          <button
            className='material-symbols-outlined'
            type='button'
            onClick={handleReturn}
          >
            close
          </button>
        )}
        <button className='material-symbols-outlined' type='submit'>
          check
        </button>
      </div>
    </form>
  );
}

export default function WExperienceControl(props) {
  const {
    work,
    handleEdit,
    handleCreateEntry,
    controlStatus,
    handleChange,
    handleReturn,
    handleSubmit,
    handleDeleteEntry,
    handleToggleVisibility,
    formData,
  } = props;
  let content;
  // render determines whether EEList or EEForm is rendered
  if (controlStatus.render == 'list') {
    content = (
      <WEList
        work={work}
        handleEdit={handleEdit}
        handleCreateEntry={handleCreateEntry}
        handleDeleteEntry={handleDeleteEntry}
        handleToggleVisibility={handleToggleVisibility}
      />
    );
  } else if (controlStatus.render == 'form') {
    content = (
      <WEForm
        formData={formData}
        handleChange={handleChange}
        handleReturn={handleReturn}
        handleSubmit={handleSubmit}
        mode={controlStatus.mode}
      />
    );
  }

  return (
    <section className='control-element' id='we-control' data-type='work'>
      <Collapsible title='Work Experience' content={content} />
    </section>
  );
}
