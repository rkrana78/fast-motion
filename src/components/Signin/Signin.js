import React from 'react';

const Signin = () => {
  
    return (
       <form>
           <h2>Log In</h2>
           
           <h4><label for="email">Email</label></h4>
           <input type="text" id="email"/>
           <h4><label for="pass">Password</label></h4>
           <input type="password" id="pass"/>
           <input type="submit" className="btn btn-danger d-block mt-3" value="Log in"/>
       </form>
    );
};

export default Signin;