const alphaPattern = '[a-zA-Z0-9:\\s]{1,40}';
const nameSchema = {
    label: 'child\'s schema',
    required: true,
    type: 'text',
    pattern: alphaPattern
};
const ParentLogSchema = {
    'name': {...nameSchema},
    'timeAwake': {
        ...nameSchema,
        label: 'Time Awake'
    },
    'timeOfFeeding': {
        ...nameSchema,
        label: 'Time Of Feeding'
    },
    'date': {
        ...nameSchema,
        label: 'Date'
    },
    'sleepPattern': {
        ...nameSchema,
        label: 'Sleep Pattern (e.g. well | ok | restless)'
    },
    'food': {
        ...nameSchema,
        label: 'Food'
    },
    'timeIn': {
        ...nameSchema,
        label: 'Time In'
    },
    'timeOut': {
        ...nameSchema,
        label: 'Time Out'
    }
};

export default ParentLogSchema;