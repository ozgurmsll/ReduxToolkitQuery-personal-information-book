export const AdressForm = ({ street, city, country, setAddress }) => {
  const handleChange = (event) => {
    const { name, value } = event.target;
  
   
    setAddress((address) => ({
      ...address,
      [name]: value,
    }));
    
  };
  

  return (
    <form>
      <div>
        <label htmlFor="street">Street:</label>
        <input type="text" id="street" name="street" value={street} onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="city">City:</label>
        <input type="text" id="city" name="city" value={city} onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="country">Country:</label>
        <input type="text" id="country" name="country" value={country} onChange={handleChange} />
      </div>
    </form>
  );
};
