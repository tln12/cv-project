import Collapsible from '../Collapsible';
import PDataForm from './PDataForm';

export default function PDataControl({ personalData, handleChange }) {
  const content = (
    <PDataForm personalData={personalData} handleChange={handleChange} />
  );
  return (
    <section data-typeof='personal-data'>
      <Collapsible title='Personal Data' content={content} collapsed={false} />
    </section>
  );
}
