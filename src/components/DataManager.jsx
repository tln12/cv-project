import EExperienceControl from './educational-experience/EExperienceControl';
import WExperienceControl from './work-experience/WExperienceControl';
import PDataControl from './personal-data/PDataControl';
import styled from 'styled-components';

const Styledheader = styled.div`
  display: flex;
  justify-content: center;
`;
const StyledButton = styled.button`
  flex: 1;
`;
const StyledLeftButton = styled(StyledButton)`
  border-radius: var(--bar-control) 0px 0px var(--bar-control);
  border-right: none;
`;
const StyledRightButton = styled(StyledButton)`
  background-color: var(--required-color);
  opacity: 0.95;
  color: white;
  border-radius: 0px var(--bar-control) var(--bar-control) 0px;
  border: none;
`;

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
  handleLoadExample,
  handleClearCV,
}) {
  return (
    <>
      <Styledheader>
        <StyledLeftButton onClick={handleLoadExample}>
          Load Example
        </StyledLeftButton>
        <StyledRightButton onClick={handleClearCV}>
          <span className='material-symbols-outlined'>delete</span>
          Clear Resume
        </StyledRightButton>
      </Styledheader>
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
