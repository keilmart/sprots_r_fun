
import React from 'react';
import './links.scss';

const Links = () => {
    return (
        <main>
            <ul class="linkContainer">
                <a href="https://www.playline.com/about/">
                    <li>about</li>
                </a>
                    <span>|</span>
                <a href="https://www.playline.com/how-it-works/">
                    <li>plb bonus</li>
                </a>
                    <span>|</span>
                <a href="https://www.playline.com/how-it-works/">
                    <li>contact</li>
                </a>
                    <span>|</span>
                <a href="https://www.playline.com/security/">
                    <li>security</li>
                </a>
                    <span>|</span>
                <a href="https://www.playline.com/responsible-play/">
                    <li>responsibility</li>
                </a>
                    <span>|</span>
                <a href="https://www.playline.com/privacy-policy-2/">
                    <li>privacy</li>
                </a>
                    <span>|</span>
                <a href="https://www.playline.com/terms-of-use/">
                    <li>terms</li>
                </a>
            </ul>
        </main>
    )
}

export default Links;