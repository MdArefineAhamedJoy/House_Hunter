import React, { useState } from 'react';

const SingUp = () => {

    const [fullName, setFullName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [selectedRole, setSelectedRole] = useState('owner');
    const [error, setError] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (!selectedRole) {
        setError('Please select a role.');
        return;
      }
      const userInfo = {fullName , phoneNumber , email ,  password , selectedRole }

      fetch(`http://localhost:5000/user/register` , {
        method: "POST",
        headers: {
            "Content-Type" : "application/json"
        },
        body : JSON.stringify(userInfo)
      })
    };
  

  return (
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form className="card-body" onSubmit={handleSubmit}>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Full Name</span>
        </label>
        <input
          type="text"
          placeholder="Name"
          className="input input-bordered"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        />
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Phone Number</span>
        </label>
        <input
          type="text"
          placeholder="+880"
          className="input input-bordered"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Email</span>
        </label>
        <input
          type="text"
          placeholder="email"
          className="input input-bordered"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Password</span>
        </label>
        <input
          type="password"
          placeholder="password"
          className="input input-bordered"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div>
        <label className="label">
          <span className="label-text">Select Role</span>
        </label>
        <select
          className="block w-full px-4 py-2 border rounded bg-white text-gray-800"
          value={selectedRole}
          onChange={(e) => {
            setSelectedRole(e.target.value);
            setError('');
          }}
        >
          <option value="owner">owner</option>
          <option value="renter">renter</option>
        </select>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </div>
      <div className="form-control mt-6">
        <button type="submit" className="btn btn-primary">
          Login
        </button>
      </div>
    </form>
            </div>
          </div>
        </div>


  );
};

export default SingUp;
