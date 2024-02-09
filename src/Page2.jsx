import React from 'react';
import FormValidationExample from './Password';


const Page2 = () => {
    const handleFormSubmit = (formData) => {
        // Handle form submission logic for Page 2
        console.log('Form data from Page 2:', formData);
    };

    return (
        <div>
            <h1>Page 2</h1>
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

export default Page2;