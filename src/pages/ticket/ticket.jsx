import React from 'react'
import './ticket.css'
import logo from '../../assets/logo-full.svg'
import bgsvg from '../../assets/pattern-lines.svg'
import circle from '../../assets/pattern-circle.svg'
import desktopT from '../../assets/pattern-squiggly-line-top.svg'
import desktopB from '../../assets/pattern-squiggly-line-bottom-desktop.svg'
import avatar from '../../assets/image-avatar.jpg'
import github from '../../assets/icon-github.svg'

const Ticket = () => {
  return (
    <main>
 
       <img className='lines' src={bgsvg} alt="" />

       <img className='top-desktop' src={desktopT} alt="" />
       
       <img className='bottom-desktop' src={desktopB} alt="" />

        <header>
                <img src={logo} alt="" />
        </header>

        <caption>
            <h1>Congrats, <span className='name'>Jonatan Kristof!</span> <br /> Your Ticket is ready.</h1>
            <p>We've emailed your ticket to <br /> <span className='name'>jonatan@email.com</span> and will send updates in <br /> the run  up to the event.</p>
        </caption>
        
        


          
        <div className="ticket-card">


            <img className='circles' src={circle} alt="" />

                <div className="logo">
                  <img src={logo} alt="" />
                  <p>Jan 31, 2025 / Austin, TX</p>
                </div>
                
                <div className="card-name-img">
                  <div className="card-img"><img src={avatar} alt="" /></div>
                  <div className="card-name"><h3>Jonatan Kristof</h3> <p><img src={github} alt="" /> @jonatankrisof0101</p></div>
                </div>

        </div>
    </main>
  )
}

export default Ticket