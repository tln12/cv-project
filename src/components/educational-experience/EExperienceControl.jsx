import { useState } from 'react';
import './EExperience.css';
import Collapsible from '../collapsible/Collapsible';
import Register from '../Register';

function EEForm({ formData, handleChange, handleReturn, mode, handleSubmit }) {
  return (
    <form className='ee-c-form' data-id={formData.id} onSubmit={handleSubmit}>
      {mode == 'edit' && (
        <button
          className='return-btn material-symbols-outlined'
          onClick={handleReturn}
        >
          arrow_back
        </button>
      )}
      <div className='ee-c-date'>
        <label>
          <span>starting date</span>
          <input
            type='date'
            id='starting-date'
            placeholder='starting date'
            value={formData.startingDate}
            onChange={handleChange}
          ></input>
        </label>
        <label>
          <span>end date</span>
          <input
            type='date'
            id='end-date'
            placeholder='end date'
            value={formData.endDate}
            onChange={handleChange}
          ></input>
        </label>
      </div>
      <label>
        <span>school name</span>
        <input
          id='school-name'
          value={formData.schoolName}
          onChange={handleChange}
        ></input>
      </label>
      <label>
        <span>title of study</span>
        <input
          id='title-of-study'
          value={formData.titleOfStudy}
          onChange={handleChange}
        ></input>
      </label>
      <div className='ee-c-submit'>
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

export default function EExperienceControl(props) {
  const {
    education,
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
      <Register
        data={education}
        handleEdit={handleEdit}
        handleCreateEntry={handleCreateEntry}
        handleDeleteEntry={handleDeleteEntry}
        handleToggleVisibility={handleToggleVisibility}
      />
    );
  } else if (controlStatus.render == 'form') {
    content = (
      <EEForm
        formData={formData}
        handleChange={handleChange}
        handleReturn={handleReturn}
        handleSubmit={handleSubmit}
        mode={controlStatus.mode}
      />
    );
  }

  return (
    <section className='control-element' id='ee-control' data-type='education'>
      <Collapsible title='Education' content={content} />
    </section>
  );
}
