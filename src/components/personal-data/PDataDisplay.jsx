

export default function PDataDisplay({ personalData }) {
    const {firstName, lastName, street, houseNr, postcode, city, phone , email} = personalData;
    return(
        <>
        <div id="pd-d-header">
            <h2>
                <span>{firstName}&nbsp;</span>
                <span>{lastName}</span>
            </h2>
        </div>
        <section id="pd-d-info">
            <h3>PERSONAL DETAILS</h3>
            <ul>
                <li>
                    <span>Address</span>
                    <span>{street} {houseNr}, {postcode} {city}</span>
                </li>
                <li>
                    <span>Tel.</span>
                    <span>{phone}</span>
                </li>
                <li>
                    <span>Email</span>
                    <span>{email}</span>
                </li>
            </ul>
        </section>
        </>

    );
}