import React, {useState} from 'react'


function Loginmail() {
  const [email, setEmail] = useState(" ");
  const [password, setpassword] = useState(" ");

  const [allEntry, setAllEntry] = useState([ ]);

  const submitForm = (e) => {
    e.preventDefault();

    if (email && password) {
      const newEntry = {id: new Date().getTime().toString(), email, password };
      setAllEntry([...allEntry, newEntry]);
      console.log(allEntry); 
      
    setEmail("");
    setpassword("");
    } else {
      alert ("please fill the correct data");
    }


  }


  return (
    <>
   <form action=" " onSubmit={submitForm}>
     <div>
       <label htmlFor="email">Email</label>
       <input type="text" name="email" id="email" autoComplete="off"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
       />   
     </div>

                 
     <div>
       <label htmlFor="password">password</label>
       <input type="password" name="password" id="password" autoComplete="off"
       value={password}
           onChange={(e) => setpassword(e.target.value)}
       />   
     </div>

     <button type="submit">Login</button>
   </form>


   <div>
                {
                         allEntry.map((curElem) => {
                           const { id, email, password } = curElem;
                           return (
                             <div className="show" key={id}>
                               <p>{email}</p>
                               <p>{password}</p>

                             </div>
                           )
                         })
                }
   </div>
    </>   
  );
}

export default Loginmail;
