import Collapsible from '../collapsible/Collapsible';
import PDataForm from './PDataForm';

export default function PDataControl({ personalData, handleChange }) {
  return (
    <section className='control-element' id='pd-control'>
      <Collapsible
        title='Personal Data'
        content={
          <PDataForm personalData={personalData} handleChange={handleChange} />
        }
        collapsed={false}
      />
    </section>
  );
}
