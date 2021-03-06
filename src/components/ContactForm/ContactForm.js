import React from 'react';
import './ContactForm.css';

const ContactForm = props => {
  const first = props.first;
  const last = props.last;
  const email = props.email;
  const reason = props.reason;
  const message = props.comment;

  const timeStyle = {
    fontSize: '25px',
    boxShadow: '1px 2.5px 5px',
    padding: '20px',
    marginBottom: '75px'
  }

  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const currentDate = date.toDateString();

  let timeOfDay;

  if (hours < 12) {
    timeOfDay = 'morning';
    timeStyle.color = '#04756F'
  } else if (hours >= 12 && hours < 17) {
    timeOfDay = 'afternoon';
    timeStyle.color = '#8914A3'
  } else if (hours >= 17 && hours < 20) {
    timeOfDay = 'evening';
    timeStyle.color = '#e2a44a';
  } else {
    timeOfDay = 'night';
    timeStyle.color = '#D90000'
  }



  return (

    <div className="form-container">
      <div style={timeStyle}>{hours % 12}:{minutes} Good {timeOfDay}!
      <p>{currentDate}</p>
      </div>
      <p className="contact-form-info">David, </p>
      <p className="contact-form-info">
        I can be reached at:
        <span className="contact-response">{` ${email}`}</span>
      </p>
      <p className="contact-form-info">
        This message is for: <span className="contact-response">{reason}</span>
      </p>
      <p className="contact-form-info">
        I hope this finds you well:
        <span className="contact-response">{message}</span>
      </p>
      <p className="contact-form-info">Regards,</p>
      <p className="signature">
        <br /> {`${first} ${last}`}
      </p>
    </div>
  );
};

export default ContactForm;
