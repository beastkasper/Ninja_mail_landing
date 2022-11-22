import { Button, Flex, Header } from './components';
import Work from './assets/office.svg'
import Slash from './assets/slash_black.svg'
import People from './assets/people.png'
import Slanted from './assets/Slanted.svg'
import Logo from './assets/Logo.svg'
import Logo1 from './assets/Logo1.svg'
import Logo2 from './assets/Logo2.svg'
import Logo3 from './assets/Logo3.svg'
import Logo4 from './assets/Logo4.svg'
import Logo5 from './assets/Logo5.svg'
import Img1 from './assets/Img1.png'
import Img2 from './assets/Img2.png'
import Img3 from './assets/Img3.png'
import Img4 from './assets/Img4.png'
import Img5 from './assets/Img5.png'
import './NinjaMail.css';

const NinjaMail = () => {
  return (
    <Flex autoWidth flex  justifyCenter>
      <div className='container'>

        <Header/>

        <div className='first_section'>
          <h1 className='main_title'>Create Stunning Email Campaigns</h1>
          <img src={Work} width='721px' height='481px' alt="work" className='image_work' />
          <p className='main_desc'>Create and launch email campaigns that captivate
              your customers in just a few clicks.</p>
          <Flex flex autoWidth gap={45}>
            <Button className='add_width' text='TRY NOW' primary/>
            <Button className='add_width' text='GET A DEMO' outLine/>
          </Flex>
        </div>

        <div className='second_section'>
          <div className='second_section_btn_block'>
            <h2 className='title_in_image'>Reach More Customers</h2>
            <Button className='border_none' text='LEARN HOW' outLine/>
          </div>
          <img 
            className='image_slash'
            src={Slash} 
            width='1024px' 
            height='1024px' 
            alt="slash" 
          />
          <img 
            src={People} 
            alt="people"
            width='944px'
            height='628px'
            className='image_peple'
          />
        </div>

        <div className='third_section'>
          <img 
            className='image_slanted'
            src={Slanted} 
            alt="slanted"
            width='1440px'
            height='1060px' 
          />
          <div className='card_block'>
            <div className='card_item'>
              <img width='324px' height='282px' src={Img1} alt="img1" className='image_card' />
              <span className='card_text'>Launch campaigns but also find new customers. Our unique platform handles campaigns from start to end.</span>
            </div>
            <div className='up card_item'>
              <img src={Img2} alt="img1" className='image_card' />
              <span className='card_text'>Start building and sharing with your team today. NinjaMail is renowned for its industry leading team collaboration tools.</span>
            </div>
            <div className='down'>
              <h2 className='card_title'>The source for proven, engaging email campaigns</h2>
              <p className='card_desc'>
                 Whether you’re a startup, small business, e-commerce store, 
                 or want to promote your app, NinjaMail has the feature set tailored for your business.
              </p>
            </div>
          </div>
        </div>

      <div className='fourth_section'>
        <Flex width='auto' flex gap={32}>
          <div className='fourth_sec_image_block'>
            <img src={Img3} width='342px' height='239px' alt="img3" />
            <div className='fourth_sec_text_block'>
              <h3 className='fourth_sec_text_title'>Frankie</h3>
              <p className='fourth_sec_text_desc'>Member since 2016</p>
            </div>
          </div>
          <div className='fourth_sec_image_block'>
            <img src={Img4} width='342px' height='239px' alt="img3" />
            <div className='fourth_sec_text_block'>
              <h3 className='fourth_sec_text_title'>Camile</h3>
              <p className='fourth_sec_text_desc'>Member since 2012</p>
            </div>
          </div>
          <div className='fourth_sec_image_block'>
            <img src={Img5} width='342px' height='239px' alt="img5" />
            <div className='fourth_sec_text_block'>
              <h3 className='fourth_sec_text_title'>Elayne</h3>
              <p className='fourth_sec_text_desc'>Member since 2018</p>
            </div>
          </div>
        </Flex>
        <h2 className='fourth_sec_title'>Learn how others are reaching their audience easier than ever before.</h2>
        <Flex className='fourth_sec_margin' flex justifyCenter gap={27}>
          <input className='fourth_sec_input' type="text" placeholder='Enter your email' />
          <Button text='JOIN OUR LIST' primary/>
        </Flex>
      </div>

      <div className='fifth_section'>
        <h2 className='fifth_sec_title'>
          All the best brands <br />
            already use us.</h2>    
        <Flex flex justifyCenter gap={65} >
          <img src={Logo1} alt="logo1" />
          <img src={Logo2} alt="logo2" />
          <img src={Logo3} alt="logo3" />
          <img src={Logo4} alt="logo4" />
          <img src={Logo5} alt="logo5" />
        </Flex>
      </div>

      <div className='get_start_block'>
        <h2 className='get_start_title'>Get started today!</h2>
        <Button text='PICK A PLAN' outLine/>
      </div>

      <div className='footer'>
        <Flex flex justifyCenter gap={70}>
          <Flex flex alignCenter width='auto'>
            <img src={Logo} alt="logo" />
            <span className='footer_logo_text' >NinjaMail</span>
          </Flex>
          <Flex width='auto' flex colmn gap={10}>
              <p className='footer_item'>Features</p>
              <p className='footer_item'>Pricing</p>
              <p className='footer_item'>Services</p>
              <p className='footer_item'>Partners</p>
          </Flex>
          <Flex width='auto' flex colmn gap={10}>
              <p className='footer_item'>About Us</p>
              <p className='footer_item'>Tutorials</p>
              <p className='footer_item'>Resources</p>
              <p className='footer_item'>Help Center</p>
              <p className='footer_item'>Templates</p>
              <p className='footer_item'>Case Studies</p>
          </Flex>
          <Flex width='auto' flex colmn gap={10}>
              <p className='footer_item'>Medium</p>
              <p className='footer_item'>Twitter</p>
              <p className='footer_item'>Facebook</p>
              <p className='footer_item'>Instagram</p>
              <p className='footer_item'>LinkedIn</p>
          </Flex>
          <Flex width='auto' flex colmn gap={10}>
              <p className='footer_item'>Contact Us</p>
              <p className='footer_item'>Slack  </p>
              <p className='footer_item'>Jobs</p>
          </Flex>
        </Flex>
        <hr className='footer_hr' />
        <Flex flex justifyAround width='80%' className='footer_under_block'>
          <p className='footer_under_text'>NinjaMail is a sample project for Quest AI. © 2019 Quest AI, All rights reserved.</p>
          <p className='footer_under_text'>Terms & Conditions</p>
          <p className='footer_under_text'>Privacy Policy</p>
        </Flex>
      </div>
      </div>
    </Flex>
  );
}

export default NinjaMail;