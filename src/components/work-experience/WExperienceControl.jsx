import Collapsible from '../Collapsible';
import Register from '../Register';
import WExperienceForm from './WExperienceForm';

export default function WExperienceControl({
  work,
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
        data={work}
        handleEdit={handleEdit}
        handleCreateEntry={handleCreateEntry}
        handleDeleteEntry={handleDeleteEntry}
        handleToggleVisibility={handleToggleVisibility}
      />
    );
  } else if (formStatus.activeContext == 'work') {
    content = (
      <WExperienceForm
        formData={formStatus.formData}
        handleChange={handleChange}
        handleReturn={handleReturn}
        handleSubmit={handleSubmit}
        mode={formStatus.mode}
      />
    );
  }

  return (
    <section data-type='work'>
      <Collapsible title='Work Experience' content={content} />
    </section>
  );
}
