import SectionLayout from "../SectionLayout";
import Image from "next/image";

const Venue = () => {
  return (
    <SectionLayout Title="DESTINATION" Classname={"venue-section-container"}>
      <div className="venue-section">
        <div className="venue-wrapper">
          <div className="venue">
            <h2>Venue</h2>
            <p>
              Thadomal Shahani Engineering College, Mumbai
              <br />
              Maharashtra
            </p>
          </div>
          <div className="date">
            <h2>Date and Time</h2>
            <p>
              15 - 16 September 2023
              <br />
              10 AM Onwards
            </p>
          </div>
          <div className="extra-info">
            <h2>Extra information</h2>
            <p>
              Amidst the celestial expanse, the chosen venue for our epic event awaits. Embark on a journey through hyperspace and navigate to the Galactic Gathering Point. Let the Force guide your path as you join us in the cosmic celebration of innovation and inspiration. May the stars be your guide! 🌌✨
            </p>
          </div>
        </div>
        <div className="divider"></div>

        <div className="map-wrapper">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.9833477464294!2d72.83328527438155!3d19.064469752336024!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c91130392c07%3A0x3c47bf391c8de931!2sThadomal%20Shahani%20Engineering%20College!5e0!3m2!1sen!2sin!4v1690826754277!5m2!1sen!2sin"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          {/* <iframe src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d60335.707543379765!2d72.79466019636043!3d19.064541252477227!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m5!1s0x3be7c91130392c07%3A0x3c47bf391c8de931!2sThadomal%20Shahani%20Engineering%20College%2C%20W%2C%20Off%20Linking%20Road%2C%20TPS%20III%2C%20Bandra%20West%2C%20Mumbai%2C%20Maharashtra!3m2!1d19.0644647!2d72.8358602!4m0!5e0!3m2!1sen!2sin!4v1690826532101!5m2!1sen!2sin" 
          width="600" 
          height="450" 
          style="border:0;" 
          allowFullscreen="" 
          loading="lazy" 
          referrerpolicy="no-referrer-when-downgrade"></iframe> */}
        </div>
      </div>
      <div className="aconst6">
        <Image
          src="/images/aconst6.svg"
          alt="hack the space const"
          className="opaque8"
          width={300}
          height={300}
        />
      </div>
    </SectionLayout>
  );
};

export default Venue;
