import { useState } from 'react';
import WorkExperienceFormEntry from './WorkExperienceFormEntry';

export default function WorkExperience() {
    return(
        <div id='we'>
            <h2>Work Experience</h2>
            <WorkExperienceFormEntry />
            <WorkExperienceFormEntry />
            <button>Add Entry</button>
        </div>
    );
}