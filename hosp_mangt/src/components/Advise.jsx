    import React from 'react'
    import { useState } from 'react'

    function Advise() {{
    const [services, setServises]= useState([
      { service:''},
    ]);

    const handleServiceAdd = () => { setServises([...services,{ service:'' } ] )
  };

  const handleServiceRemove = (index) => {
    const list = [...services];
    List.splice(index, 1);
    setServices(List);
  };

  //  const handleServiceChange = (e, index) => {
  // const {name, value} = e.target
  // const list = [...services];
  // list [index][name] = value;
  // setServises(list)
  }

      return (
        <div>
          <form className='Advise' autoComplete='off'>
            <div className='form-field'>
              <label htmlFor='services'>Service</label>
          {services.map((singleService, index) => (
            <div key={index} className ='dervices'>
              <div className='first-division'>
                <input name='service' type='text' id='service' required 
                value={singleServices.services}
                onChange={(e) => handleServiceChange(e, index) }
                />
                {services.length - 1 === index && services.length < 4 &&  
                <button type="button" class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 " onClick={handleServiceAdd}>Add the Services
                </button>
                  }
    </div>
            
              <div classame='second-division'>
            {services.length > 1 && 
            <button type="submit" class="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            onClick ={() => handleServicesRemove(index)} >Remove
            </button>}

            </div>
          </div> ))} 
                
          </div> 
            <div className='output'>
              Output
            
            </div>   
          </form>
        
        </div>
      )
    }

    export default Advise
