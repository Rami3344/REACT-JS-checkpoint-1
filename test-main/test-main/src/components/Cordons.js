import React from 'react';
import '../App.css';
import './Cordons.css';
const Cordons = () => {
    const sub = () =>{ 
        alert("YOU ARE ALREADY PERFECT BRO COME ON !")
    }
  return (
    <div className="cordons col-lg-12 col-md-6">
        <div class="form-floating mb-3">
        <label for="floatingInput" className="text">Email address</label>
  <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"/>
</div>
<div class="form-floating">
<label for="floatingPassword">Password</label>
  <input type="password" className="form-control" id="floatingPassword" placeholder="Password"/>
</div>
<h3>Click Submit!</h3>
<button type="button" class="btn btn-primary" onClick={sub}>Submit</button>
    </div>
  );
}

export default Cordons;
