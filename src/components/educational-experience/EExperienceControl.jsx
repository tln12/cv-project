import Collapsible from '../collapsible/Collapsible';
import Register from '../Register';
import EExperienceForm from './EExperienceForm';

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
      <EExperienceForm
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
