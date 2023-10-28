import Collapsible from '../Collapsible';
import Register from '../Register';
import EExperienceForm from './EExperienceForm';

export default function EExperienceControl({
  education,
  handleEdit,
  handleCreateEntry,
  handleChange,
  handleReturn,
  handleSubmit,
  handleDeleteEntry,
  handleToggleVisibility,
  formStatus,
}) {
  let content;
  // render determines whether Register or Form is rendered
  if (formStatus.activeContext == null) {
    content = (
      <Register
        data={education}
        handleEdit={handleEdit}
        handleCreateEntry={handleCreateEntry}
        handleDeleteEntry={handleDeleteEntry}
        handleToggleVisibility={handleToggleVisibility}
      />
    );
  } else if (formStatus.activeContext == 'education') {
    content = (
      <EExperienceForm
        formData={formStatus.formData}
        handleChange={handleChange}
        handleReturn={handleReturn}
        handleSubmit={handleSubmit}
        mode={formStatus.mode}
      />
    );
  }

  return (
    <section className='control-element' id='ee-control' data-type='education'>
      <Collapsible title='Education' content={content} />
    </section>
  );
}
