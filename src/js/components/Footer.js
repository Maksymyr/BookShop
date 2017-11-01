import React from 'react'

export default class Footer extends React.Component{
    render(){
        return(
            <footer>
                <div className='footer-block'>
                    <div className='copyrights'> Copyrights &copy; 2017 All Rights Reserved by Canvas Inc.</div>
                    <div className='address-wrapper'>
                        <h3>Headquarters:</h3>
                        <p>795 Folsom Ave, Suite 600</p>
                        <p>San Francisco, CA 94107</p>
                    </div>
                    <div className='contacts-wrapper'>
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
                    <div className='socials-wrapper'>
                        <ul>
                            <li><a className='contacts-item fb' href='https://www.facebook.com/'><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
                            <li><a className='contacts-item tw' href='https://twitter.com/'><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
                            <li><a className='contacts-item goog' href='https://google.com/'><i class="fa fa-google-plus" aria-hidden="true"></i></a></li>
                        </ul>
                    </div>
                    <div className='subscribe-wrapper'>
                        <p>Subscribe to Our Newsletter to get Important News, Amazing Offers & Inside Scoops:</p>
                        <input type='email' className='inpSubscribe' ref='inpSubscribe' />
                        <button onClick={this.handleOnSubscribe}>Subscribe</button>
                    </div>
                    
                </div>
            </footer>
        )
    }
}