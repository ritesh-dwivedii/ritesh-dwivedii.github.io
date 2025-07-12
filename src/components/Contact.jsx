import React from 'react';

const Contact = () => {
  const contactInfo = [
    {
      icon: "💼",
      label: "LinkedIn",
      link: "https://www.linkedin.com/in/ritesh-dwivedi-66a337256/",
      type: "link"
    },
    {
      icon: "🐙",
      label: "GitHub",
      link: "https://github.com/ritesh-dwivedii",
      type: "link"
    },
    {
      icon: "📧",
      label: "Email",
      link: "mailto:riteshs2902@gmail.com",
      type: "email"
    },
    {
      icon: "📞",
      label: "Phone",
      link: "tel:+919770046658",
      type: "phone"
    }
  ];

  return (
    <section id="contact" className="section contact">
      <h2>Get In Touch</h2>
      <p style={{ textAlign: 'center', marginBottom: '2rem', fontSize: '1.1rem', color: '#4a5568' }}>
        I'm always interested in new opportunities and collaborations. Let's connect!
      </p>
      <ul>
        {contactInfo.map((contact, index) => (
          <li key={index}>
            <a href={contact.link} target={contact.type === "email" || contact.type === "phone" ? "_self" : "_blank"} rel="noopener noreferrer">
              {contact.icon} {contact.label}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Contact; 