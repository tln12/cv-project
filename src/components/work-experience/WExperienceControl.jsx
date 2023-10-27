import Collapsible from '../collapsible/Collapsible';
import Register from '../Register';
import './WExperience.css';

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
      <label htmlFor='name'>
        <span>company name</span>
        <input id='name' value={formData.name} onChange={handleChange}></input>
      </label>
      <label htmlFor='title'>
        <span>position title</span>
        <input
          id='title'
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
      <Register
        data={work}
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
