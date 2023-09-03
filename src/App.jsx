import { useState } from 'react';
// import './App.css';
import './styles/style.css';
import PersonalDataForm from './components/personal-data/PersonalDataForm';
import PersonalDataDisplay from './components/personal-data/PersonalDataDisplay';
import EducationalExperienceForm from './components/educational-experience/EducationalExperienceFOrm';
import EducationalExperienceDisplay from './components/educational-experience/EducationalExperienceDisplay';
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
    email: 'email@example.com'
  });
  // Educational Experience
  const [education, setEducation] = useState({ 
    0: {
      startingData: 'ed1',
      endDate: 'ed1',
      schoolName: 'ed1',
      titleOfStudy: 'ed1'
    },
    1: {
      startingData: 'ed2',
      endDate: 'ed2',
      schoolName: 'ed2',
      titleOfStudy: 'ed2'
    }
   });
    
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
          <EducationalExperienceForm 
            education={education}
            handleChange={e => handleChange(e)}
            handleSubmit={e => handleSubmit(e)}
            handleEdit={() => handleEdit()}
          />
          <WorkExperienceForm />
        </section>
        <section className='display'>
          <aside></aside>
          <div className='content'> 
            <PersonalDataDisplay personalData={personalData}/>
            <EducationalExperienceDisplay education={education} />
          </div>
        </section>
      </main>
      <footer>Copyright &#169; Thanh Le Nguyen</footer>
    </>
  )
}

export default App
