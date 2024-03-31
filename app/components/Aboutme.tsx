import React from 'react'

const Aboutme = () => {

  return (
    <section className='aboutme' id='aboutme'>
      <div className="aboutme_content">
        <div className="aboutme_content-rightbox" data-aos="fade-right" >
          <h2 className="aboutme_content-rightbox_heading">O mnie</h2>
          <h3 className="aboutme_content-rightbox_welcome">Cześć! Jestem Kamil, miło mi Cię poznać. Zapraszam do przejrzenia moich umiejętności!
          </h3>
        </div>
        <div className="aboutme_content-leftbox" data-aos="zoom-in-up">
          <p className="aboutme_content-leftbox_description">Jestem 17 letnim Frontend developerem, który skupia się na poszerzaniu swoich horyzontów oraz umiejętności. Chcę tworzyć innowacyjne rozwiązania, które usprawnią życie i przyczynią się do rozwoju społeczeństwa. Słowa Colina Powella: &quot;Ciężka praca jest fundamentem sukcesu.&quot; motywują mnie do ciężkiej, systematycznej pracy nad sobą. Wierzę, że połączenie wiedzy, pasji i cięzkiej pracy może zmienić marzenia w rzeczywistość</p>
        </div>
      </div>
    </section>
  )
}

export default Aboutme