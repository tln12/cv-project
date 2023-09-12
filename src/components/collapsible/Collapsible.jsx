import { useState } from "react";
import './Collapsible.css';
/** Collapsible Button */

export default function Collapsible({ title, content, collapsed = true }) {
    const [open, setOpen] = useState(!collapsed);

    function handleCollapse() {
        setOpen(!open);
    }

    return(
        <>
            <h2 className='collapsible-title collapsible'>
                <span>{title}</span>
                <button className="material-symbols-outlined" onClick={handleCollapse}>{open ? 'arrow_drop_down': 'arrow_right'}</button>
            </h2>
            <div className={'content ' + (open ? '': 'collapsed')}>{content}</div>
        </>
    );
}