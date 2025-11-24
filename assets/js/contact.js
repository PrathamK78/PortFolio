/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById('contact-form'),
      contactMessage = document.getElementById('contact-message') 

const sendEmail = (e) => {
  e.preventDefault();
  
  //serviceID - templateID - #form - publicKey
  emailjs.sendForm('service_hpjt2at', 'template_1xhnamd', '#contact-form', 'yeOe4Jgk6aDgqZbgN')
    .then(() => {
      //show sent message
      contactMessage.textContent = 'Message sent successfully ✅'
      
      //remove message after 5 secs
      setTimeout(() => {
        contactMessage.textContent = ''
      }, 5000)
      
      //Clear input fields
      contactForm.reset()
  
    },()=>{
      //show error message
      contactMessage.textContent = 'Message not sent (Error in service)❌'
    })
}

contactForm.addEventListener('submit',sendEmail)
