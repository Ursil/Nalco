import React, { useState } from 'react';
import TableP from './Table';

export default function Diagnosis() {

  const [formData, setFormData] = useState({
    firstName: '',
    middleInitial: '',
    lastName: '',
    birthDate: {
      month: '',
      day: '',
      year: '',
    },
    Age: '',
  
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
 
};
  const handleBirthDateChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      birthDate: {
        ...prevState.birthDate,
        [name]: value,
      },
    }));
  };



  return (
    <div className="admission-form">
    <h2 class="text-xl text-center font-semibold text-gray-900 dark:text-white sm:text-2xl ">Prescription Issue</h2>

    <form>
      <div className='registrationumber py-2 px-2'>
      <label htmlFor="registrationumber ">Registration Number:</label>
        <input p
          type="number"
          value={formData.number}
          onChange={handleChange}
        />
      <button type="submit" class=" text-black hover:bg-gradient-to-br from-green-400  border border-spacing-1 focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-4 py-2.5 text-center me-2 mb-2 "> Submit </button> 
      <TableP/>
      </div>
      
      {/* <div className="name">
        <div className='Name py-2 px-2'>
        <label htmlFor="firstName">Name:</label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
        />
        </div>
        
      
      </div> */}
      <div className="birth-date-section py-5 px-4">
        {/* <label htmlFor="birthDate">Birth Date:</label>
        <select id="month" name="month" value={formData.birthDate.month} onChange={handleBirthDateChange}>
          <option value="">Please select a month</option>
          <option value="January">January</option>
          <option value="February">February</option>
          <option value="March">March</option>
          <option value="April">April</option>
          <option value="May">May</option>
          <option value="June">June</option>
          <option value="July">July</option>
          <option value="August">August</option>
          <option value="September">September</option>
          <option value="Octorber">Octorber</option>
          <option value="November">November</option>
          <option value="December">December</option>
        </select> */}
        {/* <select id="day" name="day" value={formData.birthDate.day} onChange={handleBirthDateChange}>
          
        </select> */}
        {/* <select id="year" name="year" value={formData.birthDate.year} onChange={handleBirthDateChange}>
          <option value="">Please select a year</option>
          
        </select> */}
      </div>
      {/* <div className="gender-section py-5 px-4">
        <label>Gender:</label>
      
          <label htmlFor="male">Male</label>
          <input type="radio" id="male" name="gender" value="male" onChange={handleChange} />
          <label htmlFor="female">Female</label>
          <input type="radio" id="female" name="gender" value="female" onChange={handleChange} />
        
     </div> */}
      
      {/* <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button> */}
    </form>
    
  </div>
  )
}
