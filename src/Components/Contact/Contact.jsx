import React from 'react'
import './Contact.css'

const Contact = () => {
    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "5563e3ac-16da-4865-bda2-acfde407ad28");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
          alert(res.message)
        }
      };
    
  return (
    <div id='contact' className='contact'>
        <div className="contactTitle">
            <h1>Contact Me!</h1>
        </div>
        <div className="contactSection">
            <div className="contactLeft">
                <h1>Let's Talk</h1>
                <p>I'm now available to take on new projects, so feel free to contact me about anything. You can contact me at any moment.</p>
                <div className="contactDetails">
                    <div className="contactDetail">
                        <span class="material-symbols-outlined">
                        mail
                        </span>
                        <p>adanwu30@gmail.com</p>
                    </div>
                    <div className="contactDetail">
                        <span class="material-symbols-outlined">
                        phone_in_talk
                        </span>
                        <p>647-537-3205</p>
                    </div>
                    <div className="contactDetail">
                        <span class="material-symbols-outlined">
                        location_on
                        </span>
                        <p>Ontario, Canada</p>
                    </div>
                </div>
            </div>
            <form onSubmit={onSubmit} className="contactRight">
                    <label htmlFor="">Your Name</label>
                    <input type="text"placeholder='Enter your name' name='name'/>
                    <label htmlFor="">Your Email</label>
                    <input type="email" placeholder='Enter your email' name='email'/>
                    <label htmlFor="">Write your message here</label>
                    <textarea name="message" rows="8" placeholder='Enter your message'></textarea>
                    <button type='submit' className="contactSubmit">Submit</button>
            </form>
        </div>
    </div>
  )
}

export default Contact