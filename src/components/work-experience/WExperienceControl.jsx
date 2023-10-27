import Collapsible from '../collapsible/Collapsible';
import Register from '../Register';
import WExperienceForm from './WExperienceForm';

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
