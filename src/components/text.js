import React from 'react';

import './text.scss';

const EMPTY_FUNC = () => {};

export default function Text(props) {
    const {
        value,
        label,
        type = 'text',
        pattern,
        required,
        className,
        propName,
        handleChange = EMPTY_FUNC,
        handleBlur = EMPTY_FUNC,
        handleKeyDown = EMPTY_FUNC
    } = props;
    return (<div className={'app--input'}>
        <input
            type={type}
            value={value}
            pattern={pattern}
            required={required}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            onBlur={handleBlur}
            data-prop-name={propName}
            className={`app--input-text ${className}`}/>
        <div className={'app--input-label'}>
            <label>{label}</label>
        </div>
    </div>);
}