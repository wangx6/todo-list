import { useState } from 'react'

function FullFormRecord() {
    const id = Math.random().toString(32);
    const inputs = {
        firstName: '', 
        lastName: '',
        dob: '',
    }
    
    const validate = () => {
        console.log(`validate ${id}}`);
    };
    return {
        id,
        inputs,
        validate
    };
}

function QuickFormRecord() {
    const id = Math.random().toString(32);
    const inputs  = {
        firstName: '', 
        lastName: '',
    };

    const validate = () => {
        console.log(`validate ${id}}`);
    };

    return {
        id,
        inputs,
        validate
    };
}

/**
 * Form service
 * param {  }
 * return {  }
 */
function FormService() {
    const [fullForms, setFullForms]  = useState([FullFormRecord()]);
    const [quickForms, setQuickFroms] = useState([QuickFormRecord()]);
    const addForm = (type) => {
        let form;
        if(type === 'quickForm') {
            setQuickFroms([...quickForms, QuickFormRecord()]);
        }
        else if(type === 'fullForm') {
            setFullForms([...fullForms, FullFormRecord()]);
        }
    }

    const validate = () => {
        const rs = [];
        [...fullForms, ...quickForms].forEach(f => {
            let rrs = f.validate();
            // if(rrs.ok) rs.push(rrs);
        });

        return rs;
    }

    return {
        validate,
        addForm,
        fullForms,
        quickForms,
    }
}

export default FormService;
