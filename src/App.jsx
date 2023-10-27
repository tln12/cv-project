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

function App() {
  // data: personal, education and work
  const [personalData, setPersonalData] = useState({
    firstName: 'Max',
    lastName: 'Mustermann',
    street: 'Musterstr.',
    houseNr: '1',
    postcode: '12345',
    city: 'Leipzig',
    phone: '0123456789',
    email: 'email@example.com',
  });
  const [education, setEducation] = useState([
    {
      startingDate: '10/2010',
      endDate: '04/2015',
      name: 'RWTH Aachen University',
      title: 'Mechanical Engineering',
      description: '',
      id: uuidv4(),
      hidden: false,
    },
    {
      startingDate: '10/2023',
      endDate: '04/2026',
      name: 'HTW Berlin',
      title: 'Graphic Design',
      description: '',
      id: uuidv4(),
      hidden: false,
    },
  ]);
  const [work, setWork] = useState([
    {
      startingDate: '10/2010',
      endDate: '04/2015',
      name: 'Panda Delivery',
      title: 'Warehouse Support',
      description: 'blablibl and I did this to blasd so thats work yay',
      id: uuidv4(),
      hidden: false,
    },
    {
      startingDate: '10/2010',
      endDate: '04/2015',
      name: 'Flaschenpost',
      title: 'Driver',
      description: 'Driving through the city',
      id: uuidv4(),
      hidden: false,
    },
  ]);
  // control variables to control render
  const [educationControlStatus, setEducationControlStatus] = useState({
    render: 'list',
    mode: '',
  });
  const [workControlStatus, setWorkControlStatus] = useState({
    render: 'list',
    mode: '',
  });

  // helper variable to fill forms with copy of corresponding education entry
  const [formData, setFormData] = useState('empty');

  /**************************
   *  PERSONAL DATA
   *************************/
  function handleChange(e) {
    let property = e.target.id;
    const regex = /-[a-z]/g;
    const matches = [...new Set(property.match(regex))];
    // replace hyphen separated ids with camel case, e.g. first-name-test -> firstNameTest
    matches.forEach((match) => {
      property = property.replaceAll(match, match[1].toUpperCase());
    });

    setPersonalData({ ...personalData, [property]: e.target.value });
  }

  /**************************
   *  EDUCATIONAL EXPERIENCE
   *************************/

  /**
   * Handles changes in the input field of the forms. Updates formData.
   *
   * @param {*} e
   */
  function handleChangeEducation(e) {
    let property = e.target.id;
    const regex = /-[a-z]/g;
    const matches = [...new Set(property.match(regex))];
    // replace hyphen separated ids with camel case, e.g. first-name-test -> firstNameTest
    matches.forEach((match) => {
      property = property.replaceAll(match, match[1].toUpperCase());
    });
    setFormData({ ...formData, [property]: e.target.value });
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
    if (educationControlStatus.mode == 'edit') {
      newEducation = education.map((entry) =>
        entry.id == formData.id ? formData : entry,
      );
    } else if (educationControlStatus.mode == 'create') {
      newEducation = [...education, formData];
    }
    setEducation(newEducation);
    setFormData('empty');
    setEducationControlStatus({ render: 'list', mode: '' });
  }

  /**
   * Handles click on create entry icon. Renders view for 'create'-form and fills with formData.
   */
  function handleCreateEntry(e) {
    const type = e.target.closest('section').attributes['data-type'].value;
    let newEntry;
    if (type == 'education') {
      newEntry = {
        startingDate: '',
        endDate: '',
        name: '',
        title: '',
        id: uuidv4(),
        hidden: false,
      };
      setEducationControlStatus({ render: 'form', mode: 'create' });
    } else if (type == 'work') {
      newEntry = {
        startingDate: '',
        endDate: '',
        name: '',
        title: '',
        description: '',
        id: uuidv4(),
        hidden: false,
      };
      setWorkControlStatus({ render: 'form', mode: 'create' });
    }
    setFormData(newEntry);
  }

  /**
   * Handles click on delete icon from list entries. Deletes entry from education.
   *
   * @param {*} e
   */
  function handleDeleteEntry(e) {
    const targetId = e.target.closest('li').attributes['data-id'].value;
    const type = e.target.closest('section').attributes['data-type'].value;
    let newArray;
    if (type == 'education') {
      newArray = education.filter((entry) => entry.id != targetId);
      setEducation(newArray);
      setEducationControlStatus({ render: 'list', mode: '' });
    } else if (type == 'work') {
      newArray = work.filter((entry) => entry.id != targetId);
      setWork(newArray);
      setWorkControlStatus({ render: 'list', mode: '' });
    }
  }

  /**
   * Handles a click on the edit icon. Opens the 'edit'-form and fills input with formData.
   */
  function handleEditEducation(e) {
    const type = e.target.closest('section').attributes['data-type'].value;
    let targetObject;
    if (type == 'education') {
      targetObject = education.find(
        (entry) =>
          entry.id == e.target.closest('li').attributes['data-id'].value,
      );
      setEducationControlStatus({ render: 'form', mode: 'edit' });
    } else if (type == 'work') {
      targetObject = work.find(
        (entry) =>
          entry.id == e.target.closest('li').attributes['data-id'].value,
      );
      setWorkControlStatus({ render: 'form', mode: 'edit' });
    }
    setFormData(targetObject);
  }

  /**
   * Handles click on visibility icon from list entries. Toggles 'hidden' property to true or false.
   *
   * @param {*} e
   */
  function handleToggleVisibility(e) {
    const targetId = e.target.closest('li').attributes['data-id'].value;
    const type = e.target.closest('section').attributes['data-type'].value;
    let newData;
    if (type == 'education') {
      newData = education.map((entry) => {
        if (entry.id == targetId) {
          entry.hidden = !entry.hidden;
        }
        return entry;
      });
      setEducation(newData);
    } else if (type == 'work') {
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
    const type = e.target.closest('section').attributes['data-type'].value;
    if (type == 'education') {
      if (education.includes(formData)) {
        setEducationControlStatus({ render: 'list', mode: '' });
      } else {
        if (confirm('Discard changes?')) {
          setEducationControlStatus({ render: 'list', mode: '' });
          setFormData('empty');
        }
      }
    } else if (type == 'work') {
      if (work.includes(formData)) {
        setWorkControlStatus({ render: 'list', mode: '' });
      } else {
        if (confirm('Discard changes?')) {
          setWorkControlStatus({ render: 'list', mode: '' });
          setFormData('empty');
        }
      }
    }
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
    if (workControlStatus.mode == 'edit') {
      newWork = work.map((entry) =>
        entry.id == formData.id ? formData : entry,
      );
    } else if (workControlStatus.mode == 'create') {
      newWork = [...work, formData];
    }
    setWork(newWork);
    setFormData('empty');
    setWorkControlStatus({ render: 'list', mode: '' });
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
          {workControlStatus.render != 'form' && (
            <EExperienceControl
              education={education}
              formData={formData}
              handleChange={handleChangeEducation}
              handleCreateEntry={(e) => handleCreateEntry(e)}
              handleSubmit={(e) => handleSubmitEducation(e)}
              handleEdit={(e) => handleEditEducation(e)}
              handleDeleteEntry={(e) => handleDeleteEntry(e)}
              handleToggleVisibility={(e) => handleToggleVisibility(e)}
              controlStatus={educationControlStatus}
              handleReturn={(e) => handleReturn(e)}
            />
          )}
          {/* since there are ids shared between education and work forms, only open one */}
          {educationControlStatus.render != 'form' && (
            <WExperienceControl
              work={work}
              formData={formData}
              handleChange={handleChangeEducation}
              handleCreateEntry={(e) => handleCreateEntry(e)}
              handleSubmit={(e) => handleSubmitWork(e)}
              handleEdit={(e) => handleEditEducation(e)}
              handleDeleteEntry={(e) => handleDeleteEntry(e)}
              handleToggleVisibility={(e) => handleToggleVisibility(e)}
              controlStatus={workControlStatus}
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
