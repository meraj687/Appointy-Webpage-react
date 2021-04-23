import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button'
import { Card, CardDeck, CardGroup, Image } from 'react-bootstrap';
import { ArrowRight, Facebook, Linkedin, Twitter } from 'react-bootstrap-icons';

const logo = "https://images.g2crowd.com/uploads/product/image/social_landscape/social_landscape_204af4585e7c679cdd1bc0842ff6c82b/appointy.png";

export default function test() {
  return (
    <>
      <Navbar bg="light" expand="lg" className="shadb">
  <Navbar.Brand href="#home" ><img src={logo} alt="" srcset="" style={{width:'30%'}} className="container"/></Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav link-item" >
   <Nav.Link href="#home" >Home</Nav.Link>
      <Nav.Link href="#link">Customer</Nav.Link>
      {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown> */}
      <Nav.Link href="#link">Contact Us</Nav.Link>
      <Nav.Link href="#link">Enterprise</Nav.Link>
      <Nav.Link href="#link">Pricing</Nav.Link>
      <Nav.Link href="#link">Login</Nav.Link>
      <Nav.Link href="#link"><button type="submit" className="btn1" >Sign Up</button></Nav.Link>
  </Navbar.Collapse>
</Navbar>
<div className="container" style={{padding:'8rem 0rem'}} >
<div className="row">
  <div className="col-md-6 ">
    <h1>Education scheduling software to reduce admin work, increase efficiency, and deliver better results </h1>
    <p>Save valuable teachinh time with easy online appointments, class scheduling student management,payments,automated reminders and web confering!</p>
    <button className="btn1 front-btn" type="submit" >Get start now</button>
    <p>No credit card required! Our free plan is free forever.</p>
  </div>
  <div className="col-md-6 ">
    <img src="https://www.appointy.com/education-scheduling-software/uploads/2020/12/Happy-educator-using-Educator-scheduling-software.svg" alt="" srcset="" className="w-100"/>
  </div>
</div>
</div>
    
    <div className="container" style={{padding:'5rem 0rem'}}>
      <div className="text">
        <h1>Education scheduling tool fit for all types of educators and academic institutions</h1>
        <p style={{marginLeft:'10%',marginRight:'10%'}}>Appointy can help businesses and institutions in the education, advising and non-profit domain schedule 1:1 sessions, round-robin meetings, and group classes</p>
      </div>
    <div className="container mid-cnt" >
    <CardDeck>
  <Card>
    <Card.Img variant="top" src="https://www.appointy.com/education-scheduling-software/uploads/2020/11/Schools.svg" />
    <Card.Body>
      <Card.Title>Schools</Card.Title>
      <Card.Text>
        Schools can make class time tables, schedule resources, organize staff & parent meetings, career counseling etc.
      </Card.Text>
    </Card.Body>
  </Card>
  <Card>
    <Card.Img variant="top" src="https://www.appointy.com/education-scheduling-software/uploads/2020/11/Universities-and-Colleges.svg" />
    <Card.Body>
      <Card.Title>Universities & Colleges</Card.Title>
      <Card.Text>
Institutions can schedule academic counseling, advising sessions, applicant interviews, campus tours, courses, and more{' '}
      </Card.Text>
    </Card.Body>
  </Card>
  <Card>
    <Card.Img variant="top" src="https://www.appointy.com/education-scheduling-software/uploads/2020/11/Professors-Teachers.svg" />
    <Card.Body>
      <Card.Title>Professors & Teachers</Card.Title>
      <Card.Text>
        Professors can let students book 1:1 classes, doubt clearing sessions, after school activities, project mentoring, and more
      </Card.Text>
    </Card.Body>
  </Card>
   <Card>
    <Card.Img variant="top" src="https://www.appointy.com/education-scheduling-software/uploads/2020/11/Libraries.svg" />
    <Card.Body>
      <Card.Title>Libraries</Card.Title>
      <Card.Text>
       Public, school or university libraries can manage bookings of study rooms, computer systems, hourly reading slots, etc.
      </Card.Text>
    </Card.Body>
  </Card>
</CardDeck>
<CardDeck>
  <Card>
    <Card.Img variant="top" src="https://www.appointy.com/education-scheduling-software/uploads/2020/11/Tutors.svg" />
    <Card.Body>
      <Card.Title>Tutors</Card.Title>
      <Card.Text>
      Tutors can schedule in-person or online classes, market their business, manage students and more
      </Card.Text>
    </Card.Body>
  </Card>
  <Card>
    <Card.Img variant="top" src="https://www.appointy.com/education-scheduling-software/uploads/2020/11/Student-Services.svg" />
    <Card.Body>
      <Card.Title>Student Services</Card.Title>
      <Card.Text>
Students can schedule on campus tech support, repair works, admin enquiries etc. with student services{' '}
      </Card.Text>
    </Card.Body>
  </Card>
  <Card>
    <Card.Img variant="top" src="https://www.appointy.com/education-scheduling-software/uploads/2020/11/Test-Centers.svg" />
    <Card.Body>
      <Card.Title>Test Centers</Card.Title>
      <Card.Text>
        Test centers can schedule seats, computers, test taking time-slots and more
      </Card.Text>
    </Card.Body>
  </Card>
   <Card>
    <Card.Img variant="top" src="https://www.appointy.com/education-scheduling-software/uploads/2020/11/Educational-Events.svg" />
    <Card.Body>
      <Card.Title>Educational Events</Card.Title>
      <Card.Text>
       Institutions can let attendees reserve a seat for science fairs, art exhibitions, seminars, webinars, conferences, etc.
      </Card.Text>
    </Card.Body>
  </Card>
</CardDeck>
</div>
    <div className="container" style={{padding:'6rem 0rem'}}>
      <div className="text">
        <h1>All-in-one education scheduling software that helps you achieve all your academic and business goals</h1>
        <p style={{marginLeft:'10%',marginRight:'10%'}}>Appointy’s education software takes the friction out of your scheduling process and helps you grow your teaching business or institute while keeping students as the top priority</p>
      </div>
    <div className="container-fluid educnt">
      <div className="row rowpat">
        <div className="col-sm-4 p-5">
            <div className="midedu">
              <img src="https://www.appointy.com/education-scheduling-software/uploads//2020/12/Connect-with-students.svg" alt="" srcset=""/>
              <h4>
                  Connect with prospective students easily</h4>
            </div>
            <p>Admission offices can make their services easily accessible and enroll new students</p>
        </div>
        <div className="col-sm-4 p-5">
            <div className="midedu">
              <img src="https://www.appointy.com/education-scheduling-software/uploads//2020/12/Connect-with-students.svg" alt="" srcset=""/>
              <h4>
                  Connect with prospective students easily</h4>
            </div>
            <p>Admission offices can make their services easily accessible and enroll new students</p>
        </div>
        <div className="col-sm-4 p-5">
            <div className="midedu">
              <img src="https://www.appointy.com/education-scheduling-software/uploads//2020/12/Connect-with-students.svg" alt="" srcset=""/>
              <h4>
                  Connect with prospective students easily</h4>
            </div>
        <p>Admission offices can make their services easily accessible and enroll new students</p>
        </div>
      </div>

    </div>
    </div>
    </div>
    <div className="container" style={{padding:'0rem 0rem'}}>
<div className="row">
  <div className="col">
    <h3 className="txtsiz">Make it easier for students to find and book 1:1 career counselling and academic advising sessions</h3>
    <br/>
    <p><strong>Branded online booking system:</strong> Create a professional, multi-lingual booking website for your university or institute. Customize it to match your brand - add a logo, services or classes you offer, staff portfolios, campus maps, etc. to ensure that applicants can schedule with the right staff for them.</p>
    
    <p><strong>Multi-channel bookings:</strong> Share your booking link with students in emails, texts, brochures, etc. or let them book campus tours and interviews directly from your website with Appointy’s website integration.</p>
    <p>Add a ‘book now’ button your institute’s Facebook and Instagram profiles to connect with new students and give them an option to book an admission assistance call instantly.</p>
  </div>
  <div className="col ">
    <img src="https://www.appointy.com/education-scheduling-software/uploads/2020/12/Instagram-profile-with-book-button-and-booking-page-with-various-subjects.svg" alt="" srcset=""/>
  </div>
</div>
</div>
    <div className="container" style={{padding:'5rem 0rem'}}>
<div className="row">
   <div className="col">
    <img src="https://www.appointy.com/education-scheduling-software/uploads/2020/12/Appointment-confirmation-page-and-zoom-meeting-window.svg" alt="" srcset=""/>
  </div>
  <div className="col">
    <h3 className="txtsiz">Eliminate the scheduling back and forth to empower students to reach out whenever they need you</h3>
    <br/>
    <p><strong>24x7 online scheduling: </strong>Students can easily find a time that works for them and book a session or sign-up for recurring classes on their own. Confirmed appointments are added to your calendar so that you’re never double booked!</p>
    <p><strong>Intelligent timezone detection:</strong> Help students & applicants around the globe and ensure that everyone who wants to schedule with you can view your availability in their timezone.</p>
    <p><strong>Web conferencing:</strong> Offer students to schedule virtual courses, classes and admission counselling with Appointy’s Zoom integration. Automatically send a Zoom meeting or class link in scheduling notifications so that students can join your virtual classroom with just a click!</p>
  </div>
</div>
</div>

    <div className="container" style={{padding:'6rem 0rem'}}>
<div className="row">
  <div className="col">
    <h3 className="txtsiz">Personalize sessions based on student’s needs and elevate their experience & satisfaction</h3>
    <br/>
    <p><strong>Dedicated student profiles:</strong>  Collect important student information like contact details, classes attended, payments, etc. under student profiles. Use notes to make quick remarks about weak subjects, career analysis, etc. to communicate progress reports to parents regularly.</p>
    
    <p><strong>Intake forms:</strong> Collect crucial info at the time of enrollment using our intake forms to prepare better lesson plans and consultation notes before your sessions.</p>

  <p><strong>Online Reputation Management:</strong> Automatically request reviews from happy parents and students after a session. Promote these positive reviews on your social media and display them on your booking page with just a click.</p>
  </div>
  <div className="col">
    <img src="https://www.appointy.com/education-scheduling-software/uploads/2020/12/Portal-with-student-database.svg" alt="" srcset=""/>
  </div>
</div>
</div>
 <div className="container" style={{padding:'6rem 0rem'}}>
      <div className="text">
        <h1 style={{marginLeft:'5%',marginRight:'5%'}}>Appointy handles your everyday admin so that you can focus on increasing student success</h1>
        <p style={{marginLeft:'10%',marginRight:'10%'}}>Cost-effective education booking software that streamlines end-to-end operations, reduces no-shows, and ensures that your staff isn’t overwhelmed</p>
      </div>
   
        <div className="container mid-cnt" >
    <CardDeck>
  <Card>
    <Card.Img variant="top" src="https://www.appointy.com/education-scheduling-software/uploads/2020/11/Calendar-Scheduler-2.svg" />
    <Card.Body>
      <Card.Title>Calendar Scheduler</Card.Title>
      <Card.Text>
       See your entire schedule at a glance with Appointy’s easy-to-use calendar with colour-coded tiles for teachers and sessions. Sync schedule with your personal or professional calendars so that you’re never double booked
      </Card.Text>
    </Card.Body>
  </Card>
  <Card>
    <Card.Img variant="top" src="https://www.appointy.com/education-scheduling-software/uploads/2020/11/Class-Reminders.svg" />
    <Card.Body>
      <Card.Title>Class Reminders</Card.Title>
      <Card.Text>
Send automated email and text reminder notifications to students prior to a session, meeting or a class to ensure that they don’t miss it. Customize them to add info like room number, location links, etc.{' '}
      </Card.Text>
    </Card.Body>
  </Card>
  <Card>
    <Card.Img variant="top" src="https://www.appointy.com/education-scheduling-software/uploads/2020/11/Resource-Scheduling-1.svg" />
    <Card.Body>
      <Card.Title>Resource Scheduling</Card.Title>
      <Card.Text>
        Reserve equipments, lab rooms, sports fields, conference halls, etc. automatically when a session is booked. Save time and reduce operational costs that come with manually allocating resources
      </Card.Text>
    </Card.Body>
  </Card>
   <Card>
    <Card.Img variant="top" src="https://www.appointy.com/education-scheduling-software/uploads/2020/11/Booking-Settings-1.svg" />
    <Card.Body>
      <Card.Title>Booking Automation</Card.Title>
      <Card.Text>
      Limit number of meetings and classes you can take in a day/week so that you are not overloaded. Choose how much in advance anyone can book/cancel, set maximum capacity for a class or session, and more
      </Card.Text>
    </Card.Body>
  </Card>
</CardDeck>
<CardDeck>
  <Card>
    <Card.Img variant="top" src="https://www.appointy.com/education-scheduling-software/uploads/2020/11/Team-Management-1.svg" />
    <Card.Body>
      <Card.Title>Staff Management</Card.Title>
      <Card.Text>
      Boost staff productivity and let them view & manage their own schedules and sick leaves using separate staff logins. Distribute sessions across your team automatically with intelligent staff allocation
      </Card.Text>
    </Card.Body>
  </Card>
  <Card>
    <Card.Img variant="top" src="https://www.appointy.com/education-scheduling-software/uploads//2020/11/Online-prepayments-1.svg" />
    <Card.Body>
      <Card.Title>Online Prepayments</Card.Title>
      <Card.Text>
Allow students to pay for your classes/sessions when they book. Require full/partial fee with our payment integrations with Stripe, Square, and Paypal so that you don’t lose out on last-minute cancellations{' '}
      </Card.Text>
    </Card.Body>
  </Card>
  <Card>
    <Card.Img variant="top" src="https://www.appointy.com/education-scheduling-software/uploads//2020/11/Reporting-and-Analytics-2.svg" />
    <Card.Body>
      <Card.Title>Reporting & Analytics</Card.Title>
      <Card.Text>
        Keep a track on the number of classes in a week/month, sales, staff utilization, and more. Powerful reporting tools help you spot and resolve operational inefficiencies and help optimize your processes
      </Card.Text>
    </Card.Body>
  </Card>
   <Card>
    <Card.Img variant="top" src="https://www.appointy.com/education-scheduling-software/uploads/2020/11/Wellness-Scheduling-App-1.svg" />
    <Card.Body>
      <Card.Title>Scheduling Mobile App</Card.Title>
      <Card.Text>
       Stay on top of upcoming appointments and schedule changes with Appointy’s Android & iOS mobile app. You and your staff can manage scheduling, payments, and reminders even when you are away from the desk
      </Card.Text>
    </Card.Body>
  </Card>
</CardDeck>
 </div>
</div>
<div className="" style={{backgroundColor:'#FCFDFF'}}>
 <div className="container" style={{padding:'6rem 0rem'}}>
      <div className="text">
        <h1 style={{marginLeft:'5%',marginRight:'5%'}}>Appointy integrates with the apps you already use</h1>
        <p style={{marginLeft:'10%',marginRight:'10%'}}>Education scheduling software that integrates with popular payments apps, social media, video conferencing tools, and personal/ work calendars</p>
      </div>
    
      <div className="container">
        <div className="row">
          <div className="col">
            <button type="submit" className="btn2" >Multiple Payment App</button>
          </div>
           <div className="col">
            <button type="submit" className="btn2" >Personal and Work Calender</button>
          </div>
           <div className="col">
            <button type="submit" className="btn2" >Video Conferencing Apps</button>
          </div>
        </div>
        <br/><br/>
      </div>
      </div>
      </div>
      <div className="container-fluid">
        <div className="row">
        <Image src="https://www.appointy.com/education-scheduling-software/uploads/2020/11/Appointy-integrations-with-different-apps-Education.png" className="w-100" />
        </div>
      </div>

      <div className="container" style={{padding:'6rem 0rem'}}>
      <div className="text">
        <h1 style={{marginLeft:'2%',marginRight:'2%'}}>Custom online scheduling software to fit the unique needs of universities, schools and tutoring centers</h1>
        <p style={{marginLeft:'10%',marginRight:'10%'}}>We have designed tailor made scheduling software solutions for various educational institutes to help streamline their complex booking process</p>
      </div>
     <div className="container mid-cnt" >
    <CardDeck>
  <Card>
    <Card.Img variant="top" src="https://www.appointy.com/education-scheduling-software/uploads/2020/11/Third-party-integration.svg" />
    <Card.Body>
      <Card.Title>Third-Party Integrations</Card.Title>
      <Card.Text>
       We build integrations with core systems that you work with every day to give you an all-in-one solution
      </Card.Text>
    </Card.Body>
  </Card>
  <Card>
    <Card.Img variant="top" src="https://www.appointy.com/education-scheduling-software/uploads//2020/11/End-to-end-branding.svg" />
    <Card.Body>
      <Card.Title>End-to-End Branding</Card.Title>
      <Card.Text>
We offer custom-branded and white labelled solutions that match your brand image{' '}
      </Card.Text>
    </Card.Body>
  </Card>
  <Card>
    <Card.Img variant="top" src="https://www.appointy.com/education-scheduling-software/uploads/2020/11/Custom-workflows.svg" />
    <Card.Body>
      <Card.Title>Custom Workflows</Card.Title>
      <Card.Text>
Our solution can be customized to cater to any specific scheduling needs of your company{' '}
      </Card.Text>
    </Card.Body>
  </Card>
   <Card>
    <Card.Img variant="top" src="https://www.appointy.com/education-scheduling-software/uploads/2020/11/Dedicated-support-team.svg" />
    <Card.Body>
      <Card.Title>Dedicated Support</Card.Title>
      <Card.Text>
      Our support team will help on board and train your team, implement new features, troubleshoot, etc.
      </Card.Text>
    </Card.Body>
  </Card>
</CardDeck>
</div>
</div>

<div className="text-center ">
    <button type="submit" className="btn3" >Learn More</button>
</div>

<div className="container" style={{padding:'6rem 0rem'}}>
      <div className="text">
        <h1 style={{marginLeft:'1%',marginRight:'1%'}}>23,000+ educators and institutes use Appointy worldwide</h1>
      </div>
    
      <div className="container">
        <div className="row">
          <div className="col">
            <img src="https://www.appointy.com/education-scheduling-software/uploads//2020/11/Path-19-1.svg" alt="" srcset=""/>
            <div className="educab">
            <p>Appointy gives our students a fast and efficient way to book their sessions. It has completely eliminated missed appointments, human typos, back-and-forth emails and more issues like these for us. We can now control almost every single aspect of the booking process and our admin team has more time available to talk to students and for other tasks. This has improved our customer satisfaction rate. We’ve got so many new students with a positive word of mouth about our business!</p>
            <button type="submit" className="btn2" >Owner, BeMo Academic Consulting</button>
            </div>
          </div>
          <div className="col">
            <img src="https://www.appointy.com/education-scheduling-software/uploads//2020/11/Path-19-1.svg" alt="" srcset=""></img>
             <div className="educab">
            <p>Appointy gives our students a fast and efficient way to book their sessions. It has completely eliminated missed appointments, human typos, back-and-forth emails and more issues like these for us. We can now control almost every single aspect of the booking process and our admin team has more time available to talk to students and for other tasks. This has improved our customer satisfaction rate. We’ve got so many new students with a positive word of mouth about our business!</p>
            <button type="submit" className="btn2" >- Chyntia P., Counselor, Education Management</button>
          </div>
          </div>
          
        </div>
      </div>
      </div>

    <div className="container mid-cnt" style={{padding:'6rem 0rem'}} >
    <CardDeck>
  <Card>
    <Card.Img variant="top" src="https://www.appointy.com/education-scheduling-software/uploads/2020/05/Artboard-1-copy-1-min.png" />
  </Card>
  <Card>
    <Card.Img variant="top" src="https://www.appointy.com/education-scheduling-software/uploads/2020/05/Artboard-1-copy-2-1-min.png" />
  </Card>
  <Card>
    <Card.Img variant="top" src="https://www.appointy.com/education-scheduling-software/uploads/2020/05/Apointy-G2-300x100-1-1-min.png" />
  </Card>
   <Card>
    <Card.Img variant="top" src="https://www.appointy.com/education-scheduling-software/uploads/2020/05/Appointy-Google-review-min.png" />
  </Card>
</CardDeck>
</div>
 <section className="botsec">   
    <div className="container">
      <div className="text pt-5 pb-5">
      <h2>Your peace of mind is our top priority!</h2>
      </div>
      <div className="row">
        <div className="col-sm-6 ">
          <div className="bottomdiv">
        <div className="adjimgs">
          <img src="https://www.appointy.com/education-scheduling-software/uploads//2020/11/Super-Support-2.svg" alt="" srcset=""/>
        </div>
        <div className="txtadj">
          <h3>Super Support</h3>
          <p>Appointy is supported by a team of dedicated professionals who are always available via email, chat and phone.</p>
        </div>
        </div>
        </div>
         <div className="col-sm-6 ">
           <div className="bottomdiv">
        <div className="adjimgs">
          <img src="https://www.appointy.com/education-scheduling-software/uploads//2020/11/Multi-Location-Management-2.svg" alt="" srcset=""/>
        </div>
        <div className="txtadj">
          <h3>Multi-Location Management
</h3>
          <p>Our education software caters to all types of education institutions. If you have multiple centers and campuses, Appointy allows easy management of all your locations from a centralized admin portal</p>
        </div>
        </div>
        </div>
         <div className="col-sm-6 ">
          <div className="bottomdiv">
        <div className="adjimgs">
          <img src="https://www.appointy.com/education-scheduling-software/uploads//2020/11/Free-setup-assistance-and-Easy-Migration-2.svg" alt="" srcset=""/>
        </div>
        <div className="txtadj">
          <h3>
Free Setup Assistance & Easy Migration</h3>
          <p>With a quick onboarding and free personalized setup assistance from product experts who have onboarded several educators, you get started with Appointy in no time. Need to shift from your existing system? Just let us know. We take care of everything!</p>
        </div>
        </div>
        </div>
         <div className="col-sm-6 ">
          <div className="bottomdiv">
        <div className="adjimgs">
          <img src="https://www.appointy.com/education-scheduling-software/uploads//2020/11/Security-2.svg" alt="" srcset=""/>
        </div>
        <div className="txtadj">
          <h3>Support</h3>
          <p>We take customer data security very seriously. Your data is safe, backed-up on cloud, and you retain its complete ownership. Our application is hosted on Google Cloud which adheres to the highest standards of reliability and data security.</p>
        </div>
        </div>
        </div>
      </div>
    </div>
    
    </section>
 <section >   
    <div className=" botsecimg ">
      <div className="text">
      <h2>Try Appointy’s education scheduling software. Get your free account now!</h2>
      </div>
      <div className="text pt-5 pb-5">
      <button type="submit" className="btn4">Sign up now! →</button>
      <p>No credit card required! Our free plan is free forever.</p>
      </div>
      </div>
      </section>
      <footer>
        <Image src="https://www.appointy.com/education-scheduling-software/uploads/2020/03/Footer-Element-2048x339.png" className="w-100" />
        <div className="container" style={{padding:'5rem 0rem'}}>
        <div className="row ">
          <div className="col">
            <h6>PRODUCT</h6>
            <ul className="foli">
              <li>Home</li>
              <li>Customers</li>
              <li>Contact Us</li>
              <li>Blog</li>
              <li>Pricing</li>
              <li>Sign Up</li>

            </ul>
          </div>
           <div className="col">
            <h6>FEATURES</h6>
             <ul className="foli">
              <li>Schedule online</li>
              <li>Increase productivity</li>
              <li>Attract customers</li>
              <li>Retain customers</li>
             

            </ul>
          </div>
           <div className="col">
            <h6>SUPPORT</h6>
             <ul className="foli">
              <li>Help</li>
              <li>Screen sharing</li>
              <li>Affiliate Program</li>

            </ul>
            <div className="icnadj">
              <ul>
            <li>CONNECT WITH US</li>
              </ul>
              <div className="icadjust">
            <div className="row">
              <div className="col iconawe"><Facebook /></div>
              <div className="col iconawe"><Twitter /></div>
              <div className="col iconawe"><Linkedin /></div>
              </div>
              </div>
            </div>
          </div>
           <div className="col">
            <h6>CONTACT US</h6>
             <ul className="foli">
              <li><strong>Appointy Software Inc.</strong>, 16 Corning Ave, Suite 136, Milpitas, CA 95035</li>
              <li>contact@appointy.com</li>
              <li>Privacy policy</li>
              <li>Terms of use</li>
              <li>GDPR</li>

            </ul>
          </div>
        </div>
        </div>
      </footer>
      <div className="botton-footer position-relative">
        <p>Copyright 2020 © Appointy. All rights reserved</p>
        <img src="/images/image.jpg"/>
      </div>
      <div className="text-center">

      </div>

      </>
  )
}
