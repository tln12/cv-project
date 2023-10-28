import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './App.css';
import './styles/style.css';
import PDataControl from './components/personal-data/PDataControl';
import PDataDisplay from './components/personal-data/PDataDisplay';
import EExperienceControl from './components/educational-experience/EExperienceControl';
import EExperienceDisplay from './components/educational-experience/EExperienceDisplay';
import WExperienceControl from './components/work-experience/WExperienceControl.jsx';
import WExperienceDisplay from './components/work-experience/WExperienceDisplay';
import { hyphenToCamelCase } from './helperFunctions';
import * as exampleData from './exampleData.js';

function App() {
  const [personalData, setPersonalData] = useState(exampleData.personal);
  const [education, setEducation] = useState(exampleData.education);
  const [work, setWork] = useState(exampleData.work);
  const [formStatus, setFormStatus] = useState({
    activeContext: null,
    mode: null,
    formData: null,
  });

  /**************************
   *  Personal Data
   *************************/
  function handleChange(e) {
    setPersonalData({
      ...personalData,
      [hyphenToCamelCase(e.target.id)]: e.target.value,
    });
  }

  /************************************
   *  Educational and work experience
   ***********************************/

  /**
   * Handles changes in the input field of the forms. Updates formStatus.formData.
   *
   * @param {*} e
   */
  function handleChangeFormInput(e) {
    setFormStatus({
      ...formStatus,
      formData: {
        ...formStatus.formData,
        [hyphenToCamelCase(e.target.id)]: e.target.value,
      },
    });
  }

  /**
   * Handles click on check icon. Replaces corresponding education entry with values of formData.
   *
   * @param {*} e
   */
  function handleSubmitEducation(e) {
    e.preventDefault();
    let newEducation = '';
    // differentiate between 'create' form data and 'edit' form data
    if (formStatus.mode == 'edit') {
      newEducation = education.map((entry) =>
        entry.id == formStatus.formData.id ? formStatus.formData : entry,
      );
    } else if (formStatus.mode == 'create') {
      newEducation = [...education, formStatus.formData];
    }
    setEducation(newEducation);
    setFormStatus({ activeContext: null, mode: null, formData: null });
  }

  /**
   * Handles click on check icon. Replaces corresponding education entry with values of formData.
   *
   * @param {*} e
   */
  function handleSubmitWork(e) {
    e.preventDefault();
    let newWork = '';
    // differentiate between 'create' form data and 'edit' form data
    if (formStatus.mode == 'edit') {
      newWork = work.map((entry) =>
        entry.id == formStatus.formData.id ? formStatus.formData : entry,
      );
    } else if (formStatus.mode == 'create') {
      newWork = [...work, formStatus.formData];
    }
    setWork(newWork);
    setFormStatus({ activeContext: null, mode: null, formData: null });
  }
  /**
   * Handles click on create entry icon. Renders view for 'create'-form and fills with formData.
   */
  function handleCreateEntry(e) {
    const context = e.target.closest('section').attributes['data-type'].value;
    let newEntry;
    if (context == 'education') {
      newEntry = {
        startingDate: '',
        endDate: '',
        name: '',
        title: '',
        id: uuidv4(),
        hidden: false,
      };
    } else if (context == 'work') {
      newEntry = {
        startingDate: '',
        endDate: '',
        name: '',
        title: '',
        description: '',
        id: uuidv4(),
        hidden: false,
      };
    }
    setFormStatus({
      activeContext: context,
      mode: 'create',
      formData: newEntry,
    });
  }

  /**
   * Handles click on delete icon from list entries. Deletes entry from education.
   *
   * @param {*} e
   */
  function handleDeleteEntry(e) {
    const targetId = e.target.closest('li').attributes['data-id'].value;
    const context = e.target.closest('section').attributes['data-type'].value;
    let newArray;
    if (context == 'education') {
      newArray = education.filter((entry) => entry.id != targetId);
      setEducation(newArray);
    } else if (context == 'work') {
      newArray = work.filter((entry) => entry.id != targetId);
      setWork(newArray);
    }
  }

  /**
   * Handles a click on the edit icon. Opens the 'edit'-form and fills input with formData.
   */
  function handleEdit(e) {
    const context = e.target.closest('section').attributes['data-type'].value;
    let targetObject;
    if (context == 'education') {
      targetObject = education.find(
        (entry) =>
          entry.id == e.target.closest('li').attributes['data-id'].value,
      );
    } else if (context == 'work') {
      targetObject = work.find(
        (entry) =>
          entry.id == e.target.closest('li').attributes['data-id'].value,
      );
    }
    setFormStatus({
      activeContext: context,
      mode: 'edit',
      formData: targetObject,
    });
  }

  /**
   * Handles click on visibility icon from list entries. Toggles 'hidden' property to true or false.
   *
   * @param {*} e
   */
  function handleToggleVisibility(e) {
    const targetId = e.target.closest('li').attributes['data-id'].value;
    const context = e.target.closest('section').attributes['data-type'].value;
    let newData;
    if (context == 'education') {
      newData = education.map((entry) => {
        if (entry.id == targetId) {
          entry.hidden = !entry.hidden;
        }
        return entry;
      });
      setEducation(newData);
    } else if (context == 'work') {
      newData = work.map((entry) => {
        if (entry.id == targetId) {
          entry.hidden = !entry.hidden;
        }
        return entry;
      });
      setWork(newData);
    }
  }

  /**
   * Handles click on return or cancel icon in forms. Lets user return to list view.
   * When changes were made, user has option to discard them and return, or not discard them and stay in form view.
   */
  function handleReturn(e) {
    const context = e.target.closest('section').attributes['data-type'].value;
    if (context == 'education') {
      if (education.includes(formStatus.formData)) {
        setFormStatus({ activeContext: null, mode: null, formData: null });
      } else {
        if (confirm('Discard changes?')) {
          setFormStatus({ activeContext: null, mode: null, formData: null });
        }
      }
    } else if (context == 'work') {
      if (work.includes(formStatus.formData)) {
        setFormStatus({ activeContext: null, mode: null, formData: null });
      } else {
        if (confirm('Discard changes?')) {
          setFormStatus({ activeContext: null, mode: null, formData: null });
        }
      }
    }
  }

  return (
    <>
      <header>
        <h1>CV Creator</h1>
      </header>
      <main>
        <section id='control-panel'>
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
        </section>
        <section className='display'>
          <aside></aside>
          <div className='content'>
            <PDataDisplay personalData={personalData} />
            <EExperienceDisplay education={education} />
            <WExperienceDisplay work={work} />
          </div>
        </section>
      </main>
      <footer>Copyright &#169; Thanh Le Nguyen</footer>
    </>
  );
}

export default App;
