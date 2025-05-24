import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { countries } from "./data";
import "./FormPage.css";

const initialState = {
  firstName: "", lastName: "", username: "", email: "", password: "",
  phoneCode: "+91", phoneNumber: "", country: "", city: "",
  pan: "", aadhar: ""
};

const FormPage = () => {
  const [form, setForm] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const validate = (name, value) => {
    let error = "";
    if (!value) error = "This field is required";
    else {
      if (name === "email" && !/^\S+@\S+\.\S+$/.test(value)) error = "Invalid email";
      if (name === "password" && value.length < 6) error = "Min 6 characters";
      if (name === "phoneNumber" && !/^\d{10}$/.test(value)) error = "Must be 10 digits";
      if (name === "pan" && !/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/.test(value)) error = "Invalid PAN";
      if (name === "aadhar" && !/^\d{12}$/.test(value)) error = "12-digit Aadhar required";
    }
    return error;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
    setErrors(prev => ({ ...prev, [name]: validate(name, value) }));
  };

  const isFormValid = Object.values(form).every(f => f) && Object.values(errors).every(e => !e);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormValid) navigate("/details", { state: form });
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <h2>Registration Form</h2>

      {["firstName", "lastName", "username", "email", "phoneNumber", "pan", "aadhar"].map(field => (
        <div key={field} className="form-group">
          <label>{field}</label>
          <input
            name={field}
            value={form[field]}
            onChange={handleChange}
            className="input"
          />
          {errors[field] && <div className="error">{errors[field]}</div>}
        </div>
      ))}

      <div className="form-group">
        <label>Password</label>
        <div className="password-wrapper">
          <input
            name="password"
            type={showPassword ? "text" : "password"}
            value={form.password}
            onChange={handleChange}
            className="input"
          />
          <button type="button" onClick={() => setShowPassword(p => !p)} className="toggle-button">
            {showPassword ? "Hide" : "Show"}
          </button>
        </div>
        {errors.password && <div className="error">{errors.password}</div>}
      </div>

      <div className="form-group">
        <label>Country</label>
        <select name="country" value={form.country} onChange={handleChange} className="input">
          <option value="">Select country</option>
          {Object.keys(countries).map(c => <option key={c}>{c}</option>)}
        </select>
      </div>

      {form.country && (
        <div className="form-group">
          <label>City</label>
          <select name="city" value={form.city} onChange={handleChange} className="input">
            <option value="">Select city</option>
            {countries[form.country].map(city => <option key={city}>{city}</option>)}
          </select>
        </div>
      )}

      <div className="form-group">
        <label>Phone Code</label>
        <input
          name="phoneCode"
          value={form.phoneCode}
          onChange={handleChange}
          className="input"
        />
      </div>

      <button type="submit" disabled={!isFormValid} className="submit-button" title={!isFormValid ? "Fill all fields correctly" : ""}>
        Submit
      </button>
    </form>
  );
};

export default FormPage;
