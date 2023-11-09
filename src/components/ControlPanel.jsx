import DataManager from './DataManager';
import Customizer from './Customizer';
import DownloadPanel from './DownloadPanel';
import styled from 'styled-components';

const StyledPanel = styled.section`
  display: flex;
  border-right: 2px double var(--side-nav-color);
  box-shadow: 0 0 10px var(--side-nav-color);
`;
const StyledScrollContainer = styled.div`
  overflow: scroll;
`;
const StyledMain = styled.div`
  margin: var(--section-padding);
  width: 500px;
  display: flex;
  flex-direction: column;
  gap: 20px;
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
  setCVColor,
  setCVFont,
  setCVPattern,
  cvColor,
  cvFont,
  cvPattern,
  handleLoadExample,
  handleClearCV,
  navTab,
}) {
  return (
    <StyledPanel>
      <StyledScrollContainer>
        <StyledMain>
          {navTab === 'data-manager' ? (
            <DataManager
              personalData={personalData}
              education={education}
              work={work}
              formStatus={formStatus}
              handleChange={handleChange}
              handleChangeFormInput={handleChangeFormInput}
              handleCreateEntry={handleCreateEntry}
              handleSubmitEducation={handleSubmitEducation}
              handleSubmitWork={handleSubmitWork}
              handleEdit={handleEdit}
              handleDeleteEntry={handleDeleteEntry}
              handleReturn={handleReturn}
              handleToggleVisibility={handleToggleVisibility}
              handleLoadExample={handleLoadExample}
              handleClearCV={handleClearCV}
            />
          ) : navTab === 'customize' ? (
            <Customizer
              cvColor={cvColor}
              cvFont={cvFont}
              cvPattern={cvPattern}
              setCVColor={setCVColor}
              setCVFont={setCVFont}
              setCVPattern={setCVPattern}
            />
          ) : (
            <DownloadPanel fontFamily={cvFont} />
          )}
        </StyledMain>
      </StyledScrollContainer>
    </StyledPanel>
  );
}
