import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Aydin Jamshidi - آیدین جمشیدی</title>
        <meta
          name="description"
          content="Official Aydin Jamshidi site (آیدین جمشیدی, Aidin/Aiden): Access his Instagram, Facebook, music, and direct contact options."
        />
        <meta property="og:title" content="Aydin Jamshidi - آیدین جمشیدی" />
        <meta
          property="og:description"
          content="Official Aydin Jamshidi site (آیدین جمشیدی, Aidin/Aiden): Access his Instagram, Facebook, music, and direct contact options."
        />
      </Helmet>
      <div data-role="Header" className="home-navbar-container">
        <div className="home-navbar">
          <div className="home-logo">
            <img alt="image" src="/logo-200h.png" className="home-image" />
          </div>
          <div className="home-links-container">
            <span className="home-link">
              <span className="Anchor">AYDIN JAMSHIDI</span>
              <br></br>
            </span>
            <a href="#contact" className="home-link01 Anchor">
              contact
            </a>
          </div>
          <div className="home-cta-container">
            <div data-role="BurgerMenu" className="home-burger-menu">
              <svg viewBox="0 0 1024 1024" className="home-icon">
                <path d="M128 256h768v86h-768v-86zM128 554v-84h768v84h-768zM128 768v-86h768v86h-768z"></path>
              </svg>
            </div>
          </div>
          <div data-role="MobileMenu" className="home-mobile-menu">
            <div className="home-top">
              <img alt="image" src="/default-img.svg" className="home-image1" />
              <div data-role="CloseMobileMenu" className="home-container1">
                <svg viewBox="0 0 1024 1024" className="home-icon02">
                  <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                </svg>
              </div>
            </div>
            <div className="home-mid">
              <div className="home-links-container1">
                <span className="home-link02 Anchor">features</span>
                <span className="home-link03 Anchor">services</span>
                <span className="home-link04 Anchor">About Us</span>
                <a href="#contact" className="home-link05 Anchor">
                  contact
                </a>
              </div>
              <button className="home-cta-btn Anchor button">
                sTART BUILDING
              </button>
            </div>
            <div className="home-bot">
              <div className="home-social-links-container">
                <svg
                  viewBox="0 0 950.8571428571428 1024"
                  className="home-icon04"
                >
                  <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                </svg>
                <svg
                  viewBox="0 0 877.7142857142857 1024"
                  className="home-icon06"
                >
                  <path d="M713.143 73.143c90.857 0 164.571 73.714 164.571 164.571v548.571c0 90.857-73.714 164.571-164.571 164.571h-107.429v-340h113.714l17.143-132.571h-130.857v-84.571c0-38.286 10.286-64 65.714-64l69.714-0.571v-118.286c-12-1.714-53.714-5.143-101.714-5.143-101.143 0-170.857 61.714-170.857 174.857v97.714h-114.286v132.571h114.286v340h-304c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571z"></path>
                </svg>
                <svg
                  viewBox="0 0 877.7142857142857 1024"
                  className="home-icon08"
                >
                  <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="home-aydin-jamshidi-website">
        <div className="home-aydins-biography">
          <h1 className="home-heading">Aydin Jamshidi</h1>
          <span className="home-text02">
            <span>
              Aydin Jamshidi is an Iranian researcher and foreign policy
              analyst. He is also known as a singer, songwriter, actor, and
              producer. He studied journalism, political science, and
              international relations at the Shahid Beheshti University in
              Tehran, Iran. He is an expert in Game Theory. He has completed
              filmmaking, screenwriting, improvisation, speech, voice, and
              movement courses for film and musical theater at the Karnameh
              Institute of Arts and Culture, one of Iran&apos;s most well-known
              act schools in Iran.
            </span>
            <br className="Section-Text"></br>
            <span>
              Born and raised in Tehran, Aydin cherished his yearning for music
              in 2011 when he acted as a singer in a play.
            </span>
            <br className="Section-Text"></br>
            <span>
              His first single, Fenjoone Bi Chayi, was released in 2012. Also,
              he published his first book, &quot;A Game Theory Approach to
              Iran&apos;s Nuclear Deal,&quot; in 2018.
            </span>
            <br></br>
            <br></br>
            <br></br>
          </span>
        </div>
        <img alt="image" src="/aydin3-1500w.png" className="home-image2" />
      </div>
      <div className="home-section-separator"></div>
      <div id="contact" className="home-contact">
        <div className="home-content-container">
          <h2 className="home-text11 Section-Heading">Contact:</h2>
          <img alt="image" src="/vaats-200w.png" className="home-image3" />
          <div className="home-locations-container">
            <div className="home-location-1">
              <div className="home-container2">
                <div className="home-email">
                  <svg viewBox="0 0 1024 1024" className="home-icon10">
                    <path d="M854 342v-86l-342 214-342-214v86l342 212zM854 170q34 0 59 26t25 60v512q0 34-25 60t-59 26h-684q-34 0-59-26t-25-60v-512q0-34 25-60t59-26h684z"></path>
                  </svg>
                </div>
                <img
                  alt="image"
                  src="/naame-200h.png"
                  className="home-image4"
                />
              </div>
              <div className="home-phone">
                <svg
                  viewBox="0 0 804.5714285714286 1024"
                  className="home-icon12"
                >
                  <path d="M804.571 708.571c0 20.571-9.143 60.571-17.714 79.429-12 28-44 46.286-69.714 60.571-33.714 18.286-68 29.143-106.286 29.143-53.143 0-101.143-21.714-149.714-39.429-34.857-12.571-68.571-28-100-47.429-97.143-60-214.286-177.143-274.286-274.286-19.429-31.429-34.857-65.143-47.429-100-17.714-48.571-39.429-96.571-39.429-149.714 0-38.286 10.857-72.571 29.143-106.286 14.286-25.714 32.571-57.714 60.571-69.714 18.857-8.571 58.857-17.714 79.429-17.714 4 0 8 0 12 1.714 12 4 24.571 32 30.286 43.429 18.286 32.571 36 65.714 54.857 97.714 9.143 14.857 26.286 33.143 26.286 50.857 0 34.857-103.429 85.714-103.429 116.571 0 15.429 14.286 35.429 22.286 49.143 57.714 104 129.714 176 233.714 233.714 13.714 8 33.714 22.286 49.143 22.286 30.857 0 81.714-103.429 116.571-103.429 17.714 0 36 17.143 50.857 26.286 32 18.857 65.143 36.571 97.714 54.857 11.429 5.714 39.429 18.286 43.429 30.286 1.714 4 1.714 8 1.714 12z"></path>
                </svg>
                <img
                  alt="image"
                  src="/shomare-200h.png"
                  className="home-image5"
                />
              </div>
            </div>
          </div>
          <div className="home-container3">
            <div className="home-social-links-container1">
              <a
                href="https://www.facebook.com/aydin.jamshidi"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link06"
              >
                <svg
                  viewBox="0 0 877.7142857142857 1024"
                  className="home-icon14"
                >
                  <path d="M713.143 73.143c90.857 0 164.571 73.714 164.571 164.571v548.571c0 90.857-73.714 164.571-164.571 164.571h-107.429v-340h113.714l17.143-132.571h-130.857v-84.571c0-38.286 10.286-64 65.714-64l69.714-0.571v-118.286c-12-1.714-53.714-5.143-101.714-5.143-101.143 0-170.857 61.714-170.857 174.857v97.714h-114.286v132.571h114.286v340h-304c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571z"></path>
                </svg>
              </a>
              <a
                href="https://open.spotify.com/artist/6uI3oOhZ7GaRt5XWNFxxIe"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link07"
              >
                <img
                  alt="image"
                  src="/1298766_spotify_music_sound_icon-200h.png"
                  className="home-image6"
                />
              </a>
              <a
                href="https://music.apple.com/us/artist/aydin-jamshidi/1092987795"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link08"
              >
                <img
                  alt="image"
                  src="/itunes-music-app-icon-200h.png"
                  className="home-image7"
                />
              </a>
              <a
                href="https://www.instagram.com/aydin.jamshidi"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link09"
              >
                <svg
                  viewBox="0 0 877.7142857142857 1024"
                  className="home-icon16"
                >
                  <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
      <footer className="home-footer">
        <div className="home-separator"></div>
        <div className="home-container4">
          <span className="home-text12">
            <span>
              Alternate Spellings:
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <a
              href="https://www.ketabcity.com/BookList.aspx?Type=Authorid&amp;Code=718280"
              target="_blank"
              rel="noreferrer noopener"
              className="home-link10"
            >
              آیدین جمشیدی
            </a>
            <span>
              ,
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <a
              href="https://aidinjamshidi.com"
              target="_blank"
              rel="noreferrer noopener"
              className="home-link11"
            >
              Aidin Jamshidi
            </a>
            <span>, Aiden Jamshidi</span>
            <br></br>
            <span>© 2023, All Rights Reserved.</span>
            <br></br>
          </span>
        </div>
      </footer>
    </div>
  )
}

export default Home
