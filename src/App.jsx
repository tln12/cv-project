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
  // PERSONAL DATA
  const [personalData, setPersonalData] = useState({
    firstName : 'Max',
    lastName: 'Mustermann',
    street: 'Musterstr.',
    houseNr: '1',
    postcode: '12345',
    city: 'Leipzig',
    phone: '0123456789',
    email: 'email@example.com',
  });
  // EDUCATIONAL EXPERIENCE
  const [education, setEducation] = useState([
    {
      startingDate: '10/2010',
      endDate: '04/2015',
      schoolName: 'RWTH Aachen University',
      titleOfStudy: 'Mechanical Engineering',
      id: uuidv4(),
      hidden: false
    },
    {
      startingDate: '10/2023',
      endDate: '04/2026',
      schoolName: 'HTW Berlin',
      titleOfStudy: 'Graphic Design',
      id: uuidv4(),
      hidden: false
    }
  ]);
  // helper variable to fill forms with copy of corresponding education entry
  const [formData, setFormData] = useState('empty');  
  const [educationControlStatus, setEducationControlStatus] = useState({render: 'list', mode:''});

  // WORK EXPERIENCE
  const [work, setWork] = useState([
    {
      startingDate: '10/2010',
      endDate: '04/2015',
      companyName: 'Panda Delivery',
      positionTitle: 'Warehouse Support',
      description: 'blablibl and I did this to blasd so thats work yay',
      id: uuidv4(),
      hidden: false
    },
    {
      startingDate: '10/2010',
      endDate: '04/2015',
      companyName: 'Flaschenpost',
      positionTitle: 'Driver',
      description: 'Driving through the city',
      id: uuidv4(),
      hidden: false    
    }
  ]);
  const [workControlStatus, setWorkControlStatus] = useState({ render: 'list', mode: ''});

  /**************************
   *  PERSONAL DATA
   *************************/
  function handleChange(e) {
    let property = e.target.id;
    const regex = /-[a-z]/g;
    const matches = [...new Set(property.match(regex))];
    // replace hyphen separated ids with camel case, e.g. first-name-test -> firstNameTest
    matches.forEach(match =>{
      property = property.replaceAll(match, match[1].toUpperCase());
    });

    setPersonalData({...personalData, [property]: e.target.value});
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
    matches.forEach(match =>{
      property = property.replaceAll(match, match[1].toUpperCase());
    });
    setFormData({...formData, [property]: e.target.value});
  };

  /**
   * Handles click on check icon. Replaces corresponding education entry with values of formData.
   * 
   * @param {*} e 
   */
  function handleSubmitEducation(e) {
    e.preventDefault();
    let newEducation = '';
    // differentiate between 'create' form data and 'edit' form data
    if(educationControlStatus.mode == 'edit') {
      newEducation = education.map(entry => entry.id == formData.id ? formData : entry);
    } else if(educationControlStatus.mode == 'create') {
      newEducation = [...education, formData];
    }
    setEducation(newEducation);
    setFormData('empty');
    setEducationControlStatus({render: 'list', mode:''});
  }

  /**
   * Handles click on create entry icon. Renders view for 'create'-form and fills with formData.
   */
  function handleCreateEntry() {
    const newEntry = { startingDate: '', endDate: '', schoolName: '', titleOfStudy: '', id: uuidv4(), hidden: false };
    setFormData(newEntry);
    setEducationControlStatus({render: 'form', mode:'create'});
  }

  /**
   * Handles click on delete icon from list entries. Deletes entry from education.
   * 
   * @param {*} e 
   */
  function handleDeleteEntry(e) {
    const targetId = e.target.closest('li').attributes['data-id'].value;
    const type = e.target.closest('li').attributes['data-type'].value;
    let newArray;
    if(type == 'education') {
      newArray = education.filter(entry => entry.id != targetId);
      setEducation(newArray);
      setEducationControlStatus({ render: 'list', mode: ''});
    } else if(type == 'work') {
      newArray = work.filter(entry => entry.id != targetId);
      setWork(newArray);
      setWorkControlStatus({ render: 'list', mode: ''});
    }

  }

  /**
   * Handles a click on the edit icon. Opens the 'edit'-form and fills input with formData.
   */
  function handleEditEducation(e) {
    const targetObject = education.find(entry => entry.id == e.target.closest('li').attributes['data-id'].value);
    setFormData(targetObject);
    setEducationControlStatus({render: 'form', mode:'edit'});
  }
  
  /**
   * Handles click on visibility icon from list entries. Toggles 'hidden' property to true or false.
   * 
   * @param {*} e 
   */
  function handleToggleVisibility(e) {
    const targetId = e.target.closest('li').attributes['data-id'].value;
    const newEducation = education.map(entry => {
      if(entry.id == targetId) {
        entry.hidden = !entry.hidden;
      } 
      return entry;
    });
    setEducation(newEducation);  
  }

  /**
   * Handles click on return or cancel icon in forms. Lets user return to list view.
   * When changes were made, user has option to discard them and return, or not discard them and stay in form view.
   */
  function handleReturn() {
    if(education.includes(formData)) {
      setEducationControlStatus({render: 'list', mode:''});
    } else {
      if(confirm('Discard changes?')) {
        setEducationControlStatus({render: 'list', mode:''});
        setFormData('empty');
      }
    }
  }

  return (
    <>
      <header>
        <h1>CV Creator</h1>
      </header>
      <main>
        <section className='form'>
          <PDataControl
            personalData={personalData}
            handleChange={e => handleChange(e)}
          />
          <EExperienceControl 
            education={education}
            formData={formData}
            handleChange={handleChangeEducation}
            handleCreateEntry={() => handleCreateEntry()}
            handleSubmit={e => handleSubmitEducation(e)}
            handleEdit={e => handleEditEducation(e)}
            handleDeleteEntry={e => handleDeleteEntry(e)}
            handleToggleVisibility={e => handleToggleVisibility(e)}
            controlStatus={educationControlStatus}
            handleReturn={handleReturn}
          />
          <WExperienceControl 
            work={work}
            handleChange={handleChangeEducation}
            handleCreateEntry={() => handleCreateEntry()}
            handleSubmit={e => handleSubmitEducation(e)}
            handleEdit={e => handleEditEducation(e)}
            handleDeleteEntry={e => handleDeleteEntry(e)}
            handleToggleVisibility={e => handleToggleVisibility(e)}
            controlStatus={educationControlStatus}
            handleReturn={handleReturn}
          />
        </section>
        <section className='display'>
          <aside></aside>
          <div className='content'> 
            <PDataDisplay personalData={personalData}/>
            <EExperienceDisplay education={education} />
            <WExperienceDisplay work={work}/>
          </div>
        </section>
      </main>
      <footer>Copyright &#169; Thanh Le Nguyen</footer>
    </>
  )
}

export default App
