
export default function my_name(){
    return(
        <main>
            <div className="cv">
             <div className="left">
                <h1>Hy! I am</h1>
                <h1 className="name">Hafsa Omar</h1>
                <p>I am a Master’s student holding a Bachelor’s degree in Computer Systems, passionate about digital technology and web development. Skilled in managing and animating social media pages as well as technical expertise in frontend development (HTML, CSS, JavaScript, React…). Creative, organized, and results-oriented, I combine digital communication and technical know-how to design attractive solutions and optimize online visibility.</p>
                <button>About me</button>
                <div className="icons">
                  <a href="https://github.com/OmarHafsa">
                  <img src="images/github.png" alt="git" ></img></a>
                  <a  href="https://www.linkedin.com/in/hafsa-omar-037ba5265/">
                  <img src="images/linkedin.png" alt="in"></img></a>
                  <img src="images/instagram.png" alt="instagram"></img>
                </div>
             </div>
             <div className="right">
                <img src="images/glassesimoji.png" alt="glasses"></img>
                <div className="crown">
                    <img src="images/crown.png" alt="crownn" ></img>
                    <p>Web Developer</p>
                 </div>
                <div className="crown" id="crown2">
                   <img src="images/thumbup.png"alt="jaime"></img>
                   <p>Best Design Award</p>
                </div>
             </div>
            </div> 
          <div className="services">
               <div className="left2">
                <h1>My awsome</h1>
                <h1 className="name" id="service">Services</h1>
                <p>From captivating UI designs to seamless functionality, my diverse skill set in HTML, CSS, JavaScript, React, Flutter, and Node.js enables me to deliver exceptional digital experiences tailored to your needs</p>
                <button>Download Cv</button>
               </div>
               <div className="right2">
                  <div className="cart" id="firstcart">
                      <img src="images/glasses.png"></img>
                      <h3>Developer</h3>
                      <p>Html, Css, JavaScript, React, NodeJs, Express</p>
                      <button>Learn More</button>
                  </div>
                  <div className="cart" id="secondcart">
                      <img src="images/heartemoji.png"></img>
                      <h3>Mobile</h3>
                      <p>Using Flutter</p>
                      <button>Learn More</button>
                  </div>
                  <div className="cart" id="thirdcart">
                      <img src="images/humble.png"></img>
                      <h3>Ui/Ux</h3>
                      <p>i have the ability to create Ui and i knew a few about Ux</p>
                      <button>Learn More</button>
                  </div>
               </div>
             </div>
             <div className="certficate">
                <img src="images/introduction.png"></img>
                <img src="images/html.jpg"></img>
             </div>
        </main>
    )
}
