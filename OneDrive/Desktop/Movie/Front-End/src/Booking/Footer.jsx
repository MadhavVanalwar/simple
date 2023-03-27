import React from "react";
import './index.css';

function Footer(){
    return(
        <>
        <div className="footer_div">
            <h1>There’s even more to watch.</h1>
            <p>NewShow has an extensive library of feature films, documentaries, anime, award-winning NewShow originals and more. Watch as much as you want, anytime you want.</p>
            <a href="#">JOIN NOW</a>
        </div>
        <div className="footer_div1">
            <div className="ancher"><a href="#">Questions? Contact us.</a></div>
            <div className="footer_flex">
            <div>
                <a href="#">FAQ</a>
                <a href="#">Investor Relations</a>
                <a href="#">Privacy</a>
                <a href="#">Speed Test</a>
            </div>
            <div>
                <a href="https://help.netflix.com/">Help Centre</a>
                <a href="https://jobs.netflix.com/jobs">Jobs</a>
                <a href="https://www.netflix.com/in/browse/genre/1191605#">Cookie Preferences</a>
                <a href="https://help.netflix.com/legal/notices">Legal Notices</a>
            </div>
            <div>
                <a href="https://www.netflix.com/youraccount">Account</a>
                <a href="https://www.netflix.com/watch">Ways to Watch</a>
                <a href="https://help.netflix.com/legal/corpinfo">Corporate Information</a>
                <a href="https://www.netflix.com/in/browse/genre/839338">Only on Netflix</a>
            </div>
            <div>
                <a href="https://media.netflix.com/">Media Centre</a>
                <a href="https://help.netflix.com/legal/termsofuse">Terms of Use</a>
                <a href="https://help.netflix.com/contactus">Contact Us</a>
            </div>
            </div>
        </div>
        </>
    )
}
export default Footer;