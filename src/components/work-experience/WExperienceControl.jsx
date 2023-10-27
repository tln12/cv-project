import Collapsible from '../Collapsible';
import Register from '../Register';
import WExperienceForm from './WExperienceForm';

export default function WExperienceControl({
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
}) {
  let content;
  // render determines whether Register or Form is rendered
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
      <WExperienceForm
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
