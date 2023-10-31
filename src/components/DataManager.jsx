import EExperienceControl from './educational-experience/EExperienceControl';
import WExperienceControl from './work-experience/WExperienceControl';
import PDataControl from './personal-data/PDataControl';

export default function ControlPanel({
  personalData,
  education,
  work,
  formStatus,
  handleChange,
  handleChangeFormInput,
  handleCreateEntry,
  handleSubmitEducation,
  handleSubmitWork,
  handleEdit,
  handleDeleteEntry,
  handleReturn,
  handleToggleVisibility,
}) {
  return (
    <>
      <PDataControl
        personalData={personalData}
        handleChange={(e) => handleChange(e)}
      />
      {/* since there are ids shared between education and work forms, only open one */}
      {(formStatus.activeContext == 'education' ||
        formStatus.activeContext == null) && (
        <EExperienceControl
          education={education}
          formStatus={formStatus}
          handleChange={handleChangeFormInput}
          handleCreateEntry={(e) => handleCreateEntry(e)}
          handleSubmit={(e) => handleSubmitEducation(e)}
          handleEdit={(e) => handleEdit(e)}
          handleDeleteEntry={(e) => handleDeleteEntry(e)}
          handleToggleVisibility={(e) => handleToggleVisibility(e)}
          handleReturn={(e) => handleReturn(e)}
        />
      )}
      {/* since there are ids shared between education and work forms, only open one */}
      {(formStatus.activeContext == 'work' ||
        formStatus.activeContext == null) && (
        <WExperienceControl
          work={work}
          formStatus={formStatus}
          handleChange={handleChangeFormInput}
          handleCreateEntry={(e) => handleCreateEntry(e)}
          handleSubmit={(e) => handleSubmitWork(e)}
          handleEdit={(e) => handleEdit(e)}
          handleDeleteEntry={(e) => handleDeleteEntry(e)}
          handleToggleVisibility={(e) => handleToggleVisibility(e)}
          handleReturn={(e) => handleReturn(e)}
        />
      )}
    </>
  );
}
