import React from 'react'
import "../style/contact.css"

function Contact() {
  return (
    <>
      <div className="container">
  <div style={{textAlign:"center"}}>
    <h2>Contact Us</h2>
    <p>Swing by for a cup of coffee, or leave us a message:</p>
  </div>
  <div className="row">
    <div className="column">
      <img src="https://static.vecteezy.com/system/resources/previews/004/283/797/original/hb-logo-monogram-emblem-style-with-crown-shape-design-template-free-vector.jpg" alt="logo" style={{width:"100%"}}/>
    </div>
    <div className="column">
      <form action="/action_page.php">
        <label for="fname">First Name</label>
        <input type="text" id="fname" name="firstname" placeholder="Your name.."/>
        <label for="lname">Last Name</label>
        <input type="text" id="lname" name="lastname" placeholder="Your last name.."/>
        <label for="country">Country</label>
        <select id="country" name="country">
          <option value="australia">Australia</option>
          <option value="canada">Canada</option>
          <option value="usa">USA</option>
        </select>
        <label for="subject">Subject</label>
        <textarea id="subject" name="subject" placeholder="Write something.." style={{height:"170px"}}></textarea>
        <input type="submit" value="Submit"/>
      </form>
    </div>
  </div>
</div>
    </>
  )
}

export default Contact