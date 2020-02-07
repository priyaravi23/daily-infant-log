import React from 'react';

import parentLogSchema from '../schema/parent-log';
import Text from "./text";
import './parent-log-form.scss';

export default function ParentLogForm() {
    const handleFormClick = e => {
        e.preventDefault();
        const form = e.target.parentNode;
        console.log(form.checkValidity());
        form.reportValidity();
        const validations = [...form.querySelectorAll('input')].map(elem => ({
            validity: elem.validity,
            prop: elem.dataset.propName
        }));
        console.log(validations);

    };
    const inputs = Object.entries(parentLogSchema).map(([propName, schema]) => <Text propName={propName} {...schema}/>);
    return (<form className={'form--parent-log'}>
        {inputs}
        <a href={'#'} onClick={handleFormClick}>
            Save
        </a>
    </form>);
}