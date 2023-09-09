import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
// import './App.css';
import './styles/style.css';
import PersonalDataForm from './components/personal-data/PersonalDataForm';
import PersonalDataDisplay from './components/personal-data/PersonalDataDisplay';
import EExperienceControl from './components/educational-experience/EExperienceControl';
import EExperienceDisplay from './components/educational-experience/EExperienceDisplay';
import WorkExperienceForm from './components/work-experience/WorkExperienceForm.jsx';

function App() {
  // Personal Data
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
  // Educational Experience
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
  const [formData, setFormData] = useState('empty');
  const [educationControlStatus, setEducationControlStatus] = useState({render: 'list', mode:''});
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

  function handleSubmit(e) {
    e.preventDefault();
    const editBtn = document.getElementById('edit');
    const saveBtn = document.getElementById('save');
    const inputs = document.querySelectorAll('.pd-entry input');
    // disable input fields
    for(const input of inputs) {
        input.setAttribute('disabled', true);
    }
    // show edit button and hide save button
    editBtn.removeAttribute('hidden');
    saveBtn.setAttribute('hidden', true);
  }

  function handleSubmitEducation(e) {
    e.preventDefault();
    const newEducation = education.map(entry => entry.id == formData.id ? formData : entry);
    setEducation(newEducation);
    setFormData('empty');
    setEducationControlStatus({render: 'list', mode:''});
  }

  /**
   * Handles changes in the input field of the forms. Updates the input's values and the education entry data.
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

  function handleCreateEntry() {
    const newEntry = { startingDate: '', endDate: '', schoolName: '', titleOfStudy: '', id: uuidv4() };
    setFormData(newEntry);
    setEducation([...education, newEntry]);
    setEducationControlStatus({render: 'form', mode:'create'});
  }
  function handleDeleteEntry(e) {
    const targetId = e.target.closest('li').attributes['data-id'].value;
    const newEducation = education.filter(entry => entry.id != targetId);
    setEducation(newEducation);
    setEducationControlStatus({ render: 'list', mode: ''});
  }

  /**
   * Handles a click on the edit icon. Opens the form and fills input with corresponding education entry.
   */
  function handleEditEducation(e) {
    const targetObject = education.find(entry => entry.id == e.target.closest('li').attributes['data-id'].value);
    setFormData(targetObject);
    setEducationControlStatus({render: 'form', mode:'edit'});
  }
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

  function handleReturn() {
    setEducationControlStatus({render: 'list', mode:''});
  }

  function handleEdit() {
    const editBtn = document.getElementById('edit');
    const saveBtn = document.getElementById('save');
    const inputs = document.querySelectorAll('.pd-entry input');
    // enable input fields
    for(const input of inputs) {
        input.removeAttribute('disabled');
    }
    // hide edit button and show save button
    editBtn.setAttribute('hidden', true);
    saveBtn.removeAttribute('hidden');
  }

  return (
    <>
      <header>
        <h1>CV Creator</h1>
      </header>
      <main>
        <section className='form'>
          <PersonalDataForm
            personalData={personalData}
            handleChange={e => handleChange(e)}
            handleSubmit={e => handleSubmit(e)}
            handleEdit={() => handleEdit()}
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
          <WorkExperienceForm />
        </section>
        <section className='display'>
          <aside></aside>
          <div className='content'> 
            <PersonalDataDisplay personalData={personalData}/>
            <EExperienceDisplay education={education} />
          </div>
        </section>
      </main>
      <footer>Copyright &#169; Thanh Le Nguyen</footer>
    </>
  )
}

export default App
