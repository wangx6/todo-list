import React, { useState, useEffect } from 'react'

export default function FullForm({formRecord}) {
    const [record, setRecord] = useState(formRecord.inputs);
    const [errors, setErrors] = useState(formRecord.errors);

    console.log(record);

    useEffect(() => {
        setRecord(formRecord);
        setErrors(errors);
    }, [formRecord, errors]);

    return (
        <div>
            <h3>Full Form</h3>
            <input className="form-control" defaultValue={record.firstName}  placeholder="first name" />
            <input className="form-control" defaultValue={record.lastName}  placeholder="last name" />
            <input className="form-control" defaultValue={record.age}  placeholder="last name" />
            <input className="form-control" defaultValue={record.dob}  placeholder="last name" />
        </div>
    )
}
