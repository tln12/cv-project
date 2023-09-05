import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
// import './App.css';
import './styles/style.css';
import PersonalDataForm from './components/personal-data/PersonalDataForm';
import PersonalDataDisplay from './components/personal-data/PersonalDataDisplay';
import EducationalExperienceControl from './components/educational-experience/EducationalExperienceControl';
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
    email: 'email@example.com',
  });
  // Educational Experience
  const [education, setEducation] = useState([
    {
      startingDate: '10/2010',
      endDate: '04/2015',
      schoolName: 'RWTH Aachen University',
      titleOfStudy: 'Mechanical Engineering',
      id: uuidv4()
    },
    {
      startingDate: '10/2023',
      endDate: '04/2026',
      schoolName: 'HTW Berlin',
      titleOfStudy: 'Graphic Design',
      id: uuidv4()
    }
  ]);
    
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

  function handleChangeEducation(e) {
    const idOfChangedEntry = e.target.closest('form').attributes['data-id'].value;
    let property = e.target.id;
    const regex = /-[a-z]/g;
    const matches = [...new Set(property.match(regex))];
    // replace hyphen separated ids with camel case, e.g. first-name-test -> firstNameTest
    matches.forEach(match =>{
      property = property.replaceAll(match, match[1].toUpperCase());
    });
    const changedEntry = education.find(element => element.id == idOfChangedEntry);
    const newEducation = education.map((entry, index) => {
      if(index == education.indexOf(changedEntry)) {
        return {...changedEntry, [property]: e.target.value};
      } else return entry;
    });
    setEducation(newEducation);
  };

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
          <EducationalExperienceControl 
            education={education}
            handleChange={handleChangeEducation}
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
