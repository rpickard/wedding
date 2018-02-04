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
              Fan - need to populate some info here. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>

          <div className="one-half column">
            <p>
              <a href="img/raleigh.jpg"><img className="thumbnail" src="img/raleigh.jpg" alt="Raleigh" /></a>
              Raleigh - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
      </div>

      <hr />

      <p>
        <img className="large-image" src="img/proposal.jpg" alt="Kal Proposing To Jocelyn" />
      </p>

      <h2>OUR STORY</h2>
      <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
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
                you look pretty as you are, in your formal summer dresses :)
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
            <p>Our wedding will be held in our local Church. The ceremony will be quite traditional, and we hope that you enjoy the sense of history and tradition that this venue provides.</p>
            <p>During the late Middle Ages, St John’s Wood really was a wood, which took its name from the Knights Hospitaller of St John of Jerusalem who owned the land.  </p>
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
          <p>Chandos House is a Grade I listed Georgian townhouse, built by the Adam family between 1769 and 1771. The house is located in the heart of London's medical quarter, between Portland Place, Oxford Circus and the fashionable Marylebone Village.</p>
            <p>Over the years Chandos House has been a private residence to various Dukes, Barons and Counts, an Austrian Embassy.  Today the house is owned by the Royal Society of Medicine offers 6 principal function rooms, each with their own unique character and ambience, as well as a charming outdoor walled Garden Terrace.</p>
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
        <p>St. Johns Wood Church lies at Lord Round-about the end of the high street in St. John's Wood, approximately 10 minutes walk from the tube station.</p>
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
        <p>On the day, transport between the venues will be organised, however if you would prefer a walk through Regent's park, it will take approximately 30-40 minutes.
        </p>

      <hr />

      <h2>ACCOMMODATION</h2>
        <p>We have reserved all of the rooms in the house so that we have the place to ourselves for the weekend.  If you're not from London and want ot stay either the night before or night of the wedding, please let us know and we can see if there is space in the Hotel.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
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
