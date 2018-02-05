/**
 * Main entry point for the client application.
 */

'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import Sticky from 'react-stickynode';

import Menu from './components/Menu.component';
import RSVPForm from './components/RSVPForm.component';
import SecretTooltip from './components/SecretTooltip.component';
import TitleBar from './components/TitleBar.component';
import TopicContainer from './components/TopicContainer.component';

const websiteContent = (
  <div>

    <TitleBar id="titlebar">
    </TitleBar>

    <div style={{ height: '10px' }}></div>

    <Sticky enabled={true}>
      <Menu id="menu"
        items={[{ label: 'THE BRIDE & GROOM', href: 'brideandgroom' },
                { label: 'THE WEDDING', href: 'wedding' },
                { label: 'RSVP', href: 'rsvp' },
                { label: 'LOGISTICS', href: 'logistics' },
                { label: 'GIFTS', href: 'gifts' }]}>
      </Menu>
    </Sticky>

    <TopicContainer id="brideandgroom" name="brideandgroom" title="The Bride and Groom">
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <p>
              <a href="img/fan.jpg"><img className="thumbnail" src="img/fan.jpg" alt="Fan" /></a>
              Fan was born in Shanghai, China and moved to England when she was in high school. She later moved to London to attend Imperial College where she studied Maths. After university, Fan decided to stay in London to begin her career and to eventually meet Raleigh!
            </p>
  <br/>
          </div>

          <div className="one-half column">
            <p>
              <a href="img/raleigh.jpg"><img className="thumbnail" src="img/raleigh.jpg" alt="Raleigh" /></a>
              Although officially American, Raleigh was born in the mountains of South India. He left India when he was 12 for America before moving to England. Raleigh also decided to study Maths at Imperial, and although they must have passed each other in the halls they never met at university. Luckily, Raleigh also decided to settle down in London, only a few miles away from Fan.
            </p>
          </div>
        </div>
      </div>

      <hr />

      <p>
        <img className="large-image" src="img/proposal.jpg" alt="Ral Proposing To Fan" />
      </p>

      <h2>OUR STORY</h2>
      <p>
          Raleigh proposed to Fan on top of the mountain where he was born In Kodaikanal, India. The proposal took place just meters from where he was born, with a backdrop of a 2000 meter cliff-face and the new year's sunrise.
      </p>
    </TopicContainer>

    <TopicContainer id="wedding" title="Wedding">
        <div className="container">
            <h2>ON THE WEDDING DAY</h2>
            <p>The ceremony will start at  TBC at St. John's Wood Church. Please arrive 10 to 15 minutes before so everybody can get
                seated and so we can start on time.
            </p>
            <p>After the ceremony we will raise a glass of champagne and someone will lead you to the reception at Chandos House where drinks and appetizers will
                be served.
            </p>
            <p>The wedding dinner will follow along with the speeches and will be rounded off with entertainment and dancing.
            </p>
            <p>
                Wedding attire is summer formal. Gentlemen, please wear a light suit with which you will be comfortable with the heat. And ladies,
                you look beautiful as you are, in your formal summer dresses.
            </p>
        </div>

        <hr />
      <div className="container">
        <div className="one-half column">
          <h2>CEREMONY</h2>
          <p>TBC @ St. John's Wood Church</p>
          <p>
            <a href="img/stjohnswoodchurch.jpg"><img className="location-image" src="img/stjohnswoodchurch.jpg" alt="St. John's Wood Church" /></a>
          </p>
            <p>Our wedding will be held in our local Church. The ceremony will be quite traditional, and we hope that you enjoy the sense of history and occassion that this venue provides.</p>
            <p>
                <a href="img/churchinterior.jpg"><img className="location-image" src="img/churchinterior.jpg" alt="St. John's Wood Church Interior" /></a>
            </p>
            <p>During the late Middle Ages, St John’s Wood really was a wood, which took its name from the Knights Hospitaller of St John of Jerusalem who owned the land.  </p>
            <p>
                <a href="img/church-1828.jpg"><img className="location-image" src="img/church-1828.jpg" alt="St. John's Wood Church 1828" /></a>
            </p>
            <p>St John’s Wood Church, built in 1814 by Thomas Hardwick, overlooks Lords Roundabout by Regents Park. With its original box pews and fine collection of monuments, the building has been in continuous use as a place of Christian worship since its construction.
          </p>
        </div>
        <div className="one-half column">
          <h2>RECEPTION</h2>
          <p>TBC @ Chandos House</p>
          <p>
            <a href="img/chandoshouse.jpg"><img className="location-image" src="img/chandoshouse.jpg" alt="Chandos House" /></a>
          </p>
            <p>Following the ceremony we will move to Chandos House for the reception.</p>
            <p>
                <a href="img/weddingreception.jpg"><img className="location-image" src="img/weddingreception.jpg" alt="Reception Room" /></a>
            </p>
            <p>Chandos House is a Grade I listed Georgian townhouse, built by the Adam family between 1769 and 1771. The house is located in the heart of London's medical quarter, between Portland Place, Oxford Circus and the fashionable Marylebone Village.</p>
            <p>
                <a href="img/rooms.jpg"><img className="location-image" src="img/rooms.jpg" alt="Chandos Room" /></a>
            </p>
            <p>Over the years Chandos House has been a private residence to various Dukes, Barons and Counts, as well as an Austrian Embassy.  Today the house is owned by the Royal Society of Medicine and offers 6 principal function rooms and 17 guest rooms, each with their own unique character and ambience.</p>
        </div>
      </div>

      <hr />

    </TopicContainer>

    <TopicContainer id="rsvp" title="R.S.V.P.">
      <RSVPForm>
      </RSVPForm>
    </TopicContainer>

    <TopicContainer id="logistics" title="Logistics">
        <div className="container">
        <p>Both venues lie in the heart of London within easy walking disance of tube stations.</p>

      <hr />

        <p>
            <img className="large-image" src="img/stjohnswood.png" alt="St Johns Wood" />
        </p>
      <h2>GETTING TO ST. JOHNS WOOD CHURCH</h2>
        <p>St. Johns Wood Church lies at Lord Roundabout at the end of the high street in St. John's Wood, approximately 10 minutes walk from the tube station.</p>
            <p style={{textAlign: "center"}}>
                <a href="https://goo.gl/maps/fK5CnjBEsiT2">Google Maps</a>
            </p>
            <hr />

      <p>
        <img className="large-image" src="img/chandosreception.jpg" alt="Chandos House Reception" />
      </p>

        <h2>GETTING TO CHANDOS HOUSE</h2>
        <p>Chandos House is in central London and within easy walking distance of three Underground stations. The closest of these is Oxford Circus.
        </p>
            <p style={{textAlign: "center"}}>
                <a href="https://goo.gl/maps/mgJ53HKnB592">Google Maps</a>
            </p>
        <hr />

      <div id="gmap">
          <iframe src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d9928.951999906347!2d-0.16423449766382253!3d51.52719442421343!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x48761abed2f747e3%3A0x457fb7605bb8888b!2sSt+John&#39;s+Wood+Church%2C+Lord%E2%80%99s+Roundabout%2C+London+NW8+7NE!3m2!1d51.530468199999994!2d-0.1682359!4m5!1s0x48761ad46afa77a3%3A0x6a9e33df1324edf1!2sChandos+House%2C+Queen+Anne+Street%2C+London!3m2!1d51.518629399999995!2d-0.1451182!5e0!3m2!1sen!2suk!4v1517775752272" width="600" height="450"/>
      </div>
<h2>TRANSPORT ON THE DAY</h2>
        <p>On the day, transport between the two venues will be organised, however if you would prefer a walk through Regent's park, it will take approximately 30-40 minutes.
        </p>

      <hr />

      <h2>ACCOMMODATION</h2>
        <p>We have reserved all 17 of the rooms in Chandos house so that we have the place to ourselves for the weekend.  If you're not from London and want ot stay either the night before or night of the wedding, please let us know and we can see if there is space in the house.</p>
        <p>If you're staying for longer, there are several other hotels near by, please get in touch if you need any suggestions. 
        </p>
        </div>
    </TopicContainer>

    <TopicContainer id="gifts" title="Gifts">
      <p>Dear family and friends,</p>
      <p>We feel honoured that most of you are most travelling a long way to come and celebrate our special day with us. We look forward to seeing you and sharing our wedding with you and consider your presence gift enough.</p>
        <p>If you would, however, like to contribute a little something extra to our new life together, we've included a few ideas of things we would love below.</p>
      <p>Thank you in advance!
      </p>
        <p style={{textAlign: "center"}}>
            <a href="https://www.amazon.co.uk/hz/wishlist/ls/8UZBHTEBJ45K?&sort=default">Amazon Wishlist</a>
        </p>
    </TopicContainer>

  </div>
);

ReactDOM.render(websiteContent, document.getElementById('content'));
