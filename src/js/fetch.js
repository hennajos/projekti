/**
 * Fetches JSON data from APIs
 *
 * @param {string} url - api endpoint url
<<<<<<< HEAD
 * @param {Object} options - request options, metodit GET default, POST, DELTE
=======
<<<<<<< HEAD
 * @param {Object} options - request options
=======
 * @param {Object} options - request options, metodit GET default, POST, DELTE
>>>>>>> 55de2b2 (vite-projektin runko)
>>>>>>> e6e0991 (dist)
 *
 * @returns {Object} response json data
 */
const fetchData = async (url, options = {}) => {
<<<<<<< HEAD
  try {
    const response = await fetch(url, options);

    if (!response.ok) {
      const errorData = await response.json();
      return {error: errorData.message || 'An error occurred'};
    }
=======
<<<<<<< HEAD
    try {
      const response = await fetch(url, options);
  
      if (!response.ok) {
        const errorData = await response.json();
        return {error: errorData.message || 'An error occurred'};
      }
      return await response.json(); 
    } catch (error) {
      console.error('fetchData() error:', error.message);
      return {error: error.message};
    }
  };
  
  export {fetchData};
=======
  try {
    const response = await fetch(url, options);

    if (!response.ok) {
      const errorData = await response.json();
      return {error: errorData.message || 'An error occurred'};
    }
>>>>>>> e6e0991 (dist)
    return await response.json(); // Return successful response data
  } catch (error) {
    console.error('fetchData() error:', error.message);
    return {error: error.message};
  }
};

export {fetchData};
<<<<<<< HEAD
=======
>>>>>>> 55de2b2 (vite-projektin runko)
>>>>>>> e6e0991 (dist)
