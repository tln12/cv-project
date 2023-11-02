import DataManager from './DataManager';
import Customizer from './Customizer';
import DownloadPanel from './DownloadPanel';
import CollapsibleSideNavigation from './CollapsibleSideNavigation';
import styled from 'styled-components';
import { useState } from 'react';

const StyledPanel = styled.section`
  display: flex;
  border: 1px solid black;
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
  cvColor,
}) {
  const [navTab, setNavTab] = useState('data-manager');

  function handleNavigation(e) {
    setNavTab(e.target.attributes['data-nav'].value);
  }

  return (
    <StyledPanel>
      <CollapsibleSideNavigation handleNavigation={(e) => handleNavigation(e)}>
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
            />
          ) : navTab === 'customize' ? (
            <Customizer color={cvColor} setCVColor={setCVColor} />
          ) : (
            <DownloadPanel />
          )}
        </StyledMain>
      </CollapsibleSideNavigation>
    </StyledPanel>
  );
}
