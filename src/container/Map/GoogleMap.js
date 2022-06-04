import React from 'react';

const GoogleMap = () => {
  return (
    <div className="google-map-area section text-center section-padding-bottom">
      <div className="container">
        <div className="contact-map-area" data-aos="fade-up">
          <iframe
            className="contact-map"
            src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Abu%20Dhabi+(Your%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            aria-hidden="false"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default GoogleMap;
