import React from 'react'
import './Contact.css'
import contact from '../../assets/contact.jpg'
function Contact() {
    return (
        <div id="contact-us" className="c-wrapper">
            <div className="paddings innerWidth flexCenter c-container">
                <div className="flexColStart c-left">
                    <span className="orangeText">Our Contact Us</span>
                    <span className="primaryText">Easy to contact us</span>
                    <span className="secondaryText">We always ready to help by providijng the best services for you. We beleive a good blace to live can make your life better </span>
                    <div className="flexColStart contactModes">
                        <div className="flexStart row">
                            <div className="flexColCenter mode">
                                <div className="flexStart">
                                    <div className="flexCenter icon">
                                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="25" width="25" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 00-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"></path></svg></div>
                                    <div className="flexColStart detail">
                                        <span className="primaryText">Call</span>
                                        <span className="secondaryText">021 123 145 14</span></div></div>

                                <div className="flexCenter button">Call now</div></div><div className="flexColCenter mode">
                                <div className="flexStart"><div className="flexCenter icon">
                                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="25" width="25" xmlns="http://www.w3.org/2000/svg"><path d="M16 8c0 3.866-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.584.296-1.925.864-4.181 1.234-.2.032-.352-.176-.273-.362.354-.836.674-1.95.77-2.966C.744 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7zM5 8a1 1 0 1 0-2 0 1 1 0 0 0 2 0zm4 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0zm3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"></path></svg></div><div className="flexColStart detail"><span className="primaryText">Chat</span><span className="secondaryText">021 123 145 14</span></div></div>
                                <div className="flexCenter button">Chat now</div></div></div>
                        <div className="flexStart row"><div className="flexColCenter mode">
                            <div className="flexStart"><div className="flexCenter icon"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="25" width="25" xmlns="http://www.w3.org/2000/svg"><path d="M16 8c0 3.866-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.584.296-1.925.864-4.181 1.234-.2.032-.352-.176-.273-.362.354-.836.674-1.95.77-2.966C.744 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7zM5 8a1 1 0 1 0-2 0 1 1 0 0 0 2 0zm4 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0zm3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"></path></svg></div><div className="flexColStart detail"><span className="primaryText">Video Call</span><span className="secondaryText">021 123 145 14</span></div></div><div className="flexCenter button">Video Call now</div></div><div className="flexColCenter mode"><div className="flexStart"><div className="flexCenter icon"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" aria-hidden="true" height="25" width="25" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.848 2.771A49.144 49.144 0 0112 2.25c2.43 0 4.817.178 7.152.52 1.978.292 3.348 2.024 3.348 3.97v6.02c0 1.946-1.37 3.678-3.348 3.97a48.901 48.901 0 01-3.476.383.39.39 0 00-.297.17l-2.755 4.133a.75.75 0 01-1.248 0l-2.755-4.133a.39.39 0 00-.297-.17 48.9 48.9 0 01-3.476-.384c-1.978-.29-3.348-2.024-3.348-3.97V6.741c0-1.946 1.37-3.68 3.348-3.97z" clip-rule="evenodd"></path></svg></div><div className="flexColStart detail"><span className="primaryText">Message</span><span className="secondaryText">021 123 145 14</span></div></div><div className="flexCenter button">Message now</div></div></div></div></div><div className="flexEnd c-right"><div className="image-container">
                                <img src={contact} alt="" /></div></div></div></div>
    )
}

export default Contact