import React, {useState, useEffect} from 'react';

export default function QuickForm({formRecord}) {
    // const [record, setRecord] = useState(formRecord.inputs);
    // const [errors, setErrors] = useState(formRecord.errors);

    // useEffect(() => {
    //     setRecord(formRecord);
    //     setErrors(errors);
    // }, [formRecord, errors]);

    return (
        <div> 
            <h3>Quick form</h3>
            <input className="form-control"  placeholder="first name" />
            <input className="form-control"   placeholder="last name" />
        </div>
    )
}