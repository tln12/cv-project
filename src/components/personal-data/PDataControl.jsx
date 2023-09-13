import Collapsible from '../collapsible/Collapsible';

function PDataForm({ personalData, handleChange }) {
    return(
    <form id='pd-c-form'>
        <div>
            <label htmlFor='first-name'>
                <span>first name</span>
                <input id='first-name' onChange={handleChange} value={personalData.firstName}></input>
            </label>
            <label htmlFor='last-name'>
                <span>last name</span>
                <input id='last-name' onChange={handleChange} value={personalData.lastName}></input>
            </label>
        </div>
        <div>
            <label htmlFor='street'>
                <span>street</span>
                <input id="street" onChange={handleChange} value={personalData.street}></input>
            </label>
            <label htmlFor='house-nr'>
                <span>house no.</span>
                <input id="house-nr" onChange={handleChange} value={personalData.houseNr}></input>
            </label>
        </div>
        <div>
            <label htmlFor='postcode'>
                <span>postcode</span>
                <input id='postcode' onChange={handleChange} value={personalData.postcode}></input>
            </label>
            <label htmlFor='city'>
                <span>city</span>
                <input id='city' onChange={handleChange} value={personalData.city}></input>
            </label>
        </div>
        <div>
            <label htmlFor='phone'>
                <span>phone</span>
                <input id='phone' onChange={handleChange} value={personalData.phone}></input>
            </label>
            <label htmlFor='email'>
                <span>e-mail</span>
                <input id='email' onChange={handleChange} value={personalData.email}></input>
            </label>
        </div>
    </form>
    );
}

export default function PDataControl({ personalData, handleChange }) {
    return(
        <section className='control-element' id='pd-control'>
            <Collapsible 
                title='Personal Data' 
                content={<PDataForm personalData={personalData} handleChange={handleChange}/>}
                collapsed={false}
            />
        </section>
    );
}