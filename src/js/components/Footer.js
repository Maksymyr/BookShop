import React from 'react'

export default class Footer extends React.Component{
    render(){
        return(
            <footer>
                <div className='footer-wrapper'>
                    
                    <div className='footer-block address-wrapper'>
                        <h2>Headquarters:</h2>
                        <p>795 Folsom Ave, Suite 600</p>
                        <p>San Francisco, CA 94107</p>
                    </div>
                    <div className='footer-block contacts-wrapper'>
                        <h2>Contacts</h2>
                        <div className='phone contacts-block'>
                            <h3>Phone:</h3>
                            <span className='contacts-text'>(91) 8547 632521</span>
                        </div>
                        <div className='fax contacts-block'>
                            <h3>Fax:</h3>
                            <span className='contacts-text'>(91) 8547 632521</span>
                        </div>
                        <div className='email contacts-block'>
                            <h3>Email:</h3>
                            <span className='contacts-text'> info@canvas.com</span>
                        </div>
                        
                    </div>
                    <div className='footer-block socials-wrapper'>
                        <h2>Socials</h2>
                        <ul>
                            <li><a className='contacts-item fb' href='https://www.facebook.com/'><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                            <li><a className='contacts-item tw' href='https://twitter.com/'><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                            <li><a className='contacts-item goog' href='https://google.com/'><i className="fa fa-google-plus" aria-hidden="true"></i></a></li>
                        </ul>
                    </div>
                    <div className='footer-block subscribe-wrapper'>
                        <p><span className='bold-text'>Subscribe</span> to Our Newsletter to get Important News, Amazing Offers & Inside Scoops:</p>
                        <input type='email' className='inpSubscribe' ref='inpSubscribe' placeholder='Enter your E-mail' />
                        <button onClick={this.handleOnSubscribe} className='subscribeBtn'>Subscribe</button>
                    </div>

                    
                    
                </div>
                <div className="footer-bottom">
                    <div className='copyrights'> Copyrights &copy; 2017 All Rights Reserved by Canvas Inc.</div>
               </div>  
            </footer>
        )
    }
}