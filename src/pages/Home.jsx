import React from 'react'

function Home() {
  return (
    <>
      <div className="w3-content" style={{maxWidth:"2000px",marginTop:"46px"}}>

<div className="mySlides w3-display-container w3-center">
  <img src="https://images.unsplash.com/photo-1670349148055-e11a0b3be242?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt='' style={{width:"100%"}}/>
  <div className="w3-display-bottommiddle w3-container w3-text-white w3-padding-32 w3-hide-small">
    <h3>Los Angeles</h3>
    <p><b>We had the best time playing at Venice Beach!</b></p>   
  </div>
</div>
<div className="mySlides w3-display-container w3-center">
<img src="https://images.unsplash.com/photo-1526478806334-5fd488fcaabc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1216&q=80" alt="" />
  <div className="w3-display-bottommiddle w3-container w3-text-white w3-padding-32 w3-hide-small">
    <h3>New York</h3>
    <p><b>The atmosphere in New York is lorem ipsum.</b></p>    
  </div>
</div>
<div className="mySlides w3-display-container w3-center">
  <img src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1244&q=80" alt='' style={{width:"100%"}}/>
  <div className="w3-display-bottommiddle w3-container w3-text-white w3-padding-32 w3-hide-small">
    <h3>Chicago</h3>
    <p><b>Thank you, Chicago - A night we won't forget.</b></p>    
  </div>
</div>

<div className="w3-container w3-content w3-center w3-padding-64" style={{maxWidth:"800px"}} id="band">
  <h2 className="w3-wide">THE BAND</h2>
  <p className="w3-opacity"><i>We love music</i></p>
  <p className="w3-justify">We have created a fictional band website. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
    ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur
    adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

</div>

<div className="w3-black" id="tour">
  <div className="w3-container w3-content w3-padding-64" style={{maxWidth:"800px"}}>
    <h2 className="w3-wide w3-center">TOUR DATES</h2>
    <p className="w3-opacity w3-center"><i>Remember to book your tickets!</i></p><br/>

    <ul className="w3-ul w3-border w3-white w3-text-grey">
      <li className="w3-padding">September <span className="w3-tag w3-red w3-margin-left">Sold out</span></li>
      <li className="w3-padding">October <span className="w3-tag w3-red w3-margin-left">Sold out</span></li>
      <li className="w3-padding">November <span className="w3-badge w3-right w3-margin-right">3</span></li>
    </ul>

    <div className="w3-row-padding w3-padding-32" style={{margin:"0 -16px"}}>
      <div className="w3-third w3-margin-bottom">
        <div className="w3-container w3-white">
          <p><b>New York</b></p>
          <p className="w3-opacity">Fri 27 Nov 2016</p>
          <p>Praesent tincidunt sed tellus ut rutrum sed vitae justo.</p>
          <button className="w3-button w3-black w3-margin-bottom" onclick="document.getElementById('ticketModal').style.display='block'">Buy Tickets</button>
        </div>
      </div>
      <div className="w3-third w3-margin-bottom">
        <div className="w3-container w3-white">
          <p><b>Paris</b></p>
          <p className="w3-opacity">Sat 28 Nov 2016</p>
          <p>Praesent tincidunt sed tellus ut rutrum sed vitae justo.</p>
          <button className="w3-button w3-black w3-margin-bottom" onclick="document.getElementById('ticketModal').style.display='block'">Buy Tickets</button>
        </div>
      </div>
      <div className="w3-third w3-margin-bottom">
        <div className="w3-container w3-white">
          <p><b>San Francisco</b></p>
          <p className="w3-opacity">Sun 29 Nov 2016</p>
          <p>Praesent tincidunt sed tellus ut rutrum sed vitae justo.</p>
          <button className="w3-button w3-black w3-margin-bottom" onclick="document.getElementById('ticketModal').style.display='block'">Buy Tickets</button>
        </div>
      </div>
    </div>
    </div>
</div>

<div id="ticketModal" className="w3-modal">
  <div className="w3-modal-content w3-animate-top w3-card-4">
    <header className="w3-container w3-teal w3-center w3-padding-32"> 
      <span onclick="document.getElementById('ticketModal').style.display='none'" 
     className="w3-button w3-teal w3-xlarge w3-display-topright">×</span>
      <h2 className="w3-wide"><i className="fa fa-suitcase w3-margin-right"></i>Tickets</h2>
    </header>
    <div className="w3-container">
      <p><label><i className="fa fa-shopping-cart"></i> Tickets, $15 per person</label></p>
      <input className="w3-input w3-border" type="text" placeholder="How many?"/>
      <p><label><i className="fa fa-user"></i> Send To</label></p>
      <input className="w3-input w3-border" type="text" placeholder="Enter email"/>
      <button className="w3-button w3-block w3-teal w3-padding-16 w3-section w3-right">PAY <i className="fa fa-check"></i></button>
      <button className="w3-button w3-red w3-section" onclick="document.getElementById('ticketModal').style.display='none'">Close <i className="fa fa-remove"></i></button>
      <p className="w3-right">Need <a href="/" className="w3-text-blue">help?</a></p>
    </div>
  </div>
</div>




</div>

    </>
  )
}

export default Home