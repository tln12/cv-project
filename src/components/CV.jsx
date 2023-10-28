import WExperienceDisplay from './work-experience/WExperienceDisplay';
import EExperienceDisplay from './educational-experience/EExperienceDisplay';
import PDataDisplay from './personal-data/PDataDisplay';

export default function CV({ personalData, education, work }) {
  return (
    <section className='display'>
      <aside></aside>
      <div className='content'>
        <PDataDisplay personalData={personalData} />
        <EExperienceDisplay education={education} />
        <WExperienceDisplay work={work} />
      </div>
    </section>
  );
}
