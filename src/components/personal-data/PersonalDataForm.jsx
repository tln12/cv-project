
export default function PersonalDataForm({ personalData, handleChange, handleEdit, handleSubmit}) {
    return(
        <div id='pd'>
            <h2>Personal Data</h2>
            <form className='pd-entry' onSubmit={handleSubmit}>
                <fieldset>
                    <legend>Name</legend>
                    <label htmlFor='first-name'>First Name</label>
                    <input id='first-name' onChange={handleChange} value={personalData.firstName}></input>
                    <label htmlFor='last-name'>Last Name</label>
                    <input id='last-name' onChange={handleChange} value={personalData.lastName}></input>
                </fieldset>
                <fieldset>
                    <legend htmlFor="address">Address</legend>
                    <label htmlFor='street'>Street</label>
                    <input id="street" onChange={handleChange} value={personalData.street}></input>
                    <label htmlFor='house-nr'>Nr.</label>
                    <input id="house-nr" onChange={handleChange} value={personalData.houseNr}></input>
                    <label htmlFor='postcode'>Postcode</label>
                    <input id='postcode' onChange={handleChange} value={personalData.postcode}></input>
                    <label htmlFor='city'>City</label>
                    <input id='city' onChange={handleChange} value={personalData.city}></input>
                </fieldset>
                <fieldset>
                    <legend>Contact</legend>
                    <label htmlFor='phone'>Phone</label>
                    <input id='phone' onChange={handleChange} value={personalData.phone}></input>
                    <label htmlFor='email'>E-Mail</label>
                    <input id='email' onChange={handleChange} value={personalData.email}></input>
                </fieldset>
                <button id='edit' type="button" onClick={handleEdit} hidden>Edit</button>
                <button id="save" type='submit'>Save</button>
            </form>
        </div>
    );
}