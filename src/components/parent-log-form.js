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

        const inputs = [...form.querySelectorAll('input')];
        const validations = inputs.map(elem => ({
            validity: elem.validity,
            prop: elem.dataset.propName
        }));

        console.log(validations);

        // todo: print out the form data
        const data = Object.fromEntries(inputs.map(inp => ([inp.dataset.propName, inp.value])));
        console.log(data);
    };

    const inputs = Object.entries(parentLogSchema).map(([propName, schema]) => <Text propName={propName} {...schema}/>);
    return (<form className={'form--parent-log'}>
        {inputs}
        <a href={'#'} onClick={handleFormClick}>
            Save
        </a>
    </form>);
}