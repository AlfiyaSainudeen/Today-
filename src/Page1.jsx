
import React from 'react';
import FormValidationExample from './Password';

const Page1 = () => {
    const handleFormSubmit = (formData) => {
        // Handle form submission logic for Page 1
        console.log('Form data from Page 1:', formData);
    };

    return (
        <div>
            <h1>Page 1</h1>
            <label>Text:
            <input type='text' />
            </label>
            <button>
            <input type="submit"  />
            </button>
            <FormValidationExample onSubmit={handleFormSubmit} />
        </div>
    );
};

export default Page1;