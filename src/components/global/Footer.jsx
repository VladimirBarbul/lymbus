import React from 'react'
import Radium from 'radium'
import { footer as styles } from 'styles/global'

const Footer = () => (
    <footer style={styles.container}>
        <div style={styles.wrapper}>
            <a 
                style={styles.anchor} 
                key='repo'
                href='https://github.com/bbstilson/lymbus'>
                View on Github
            </a>
            <a 
                href='http://www.musixmatch.com/resources'
                style={styles.anchor}
                key='musixmatch'>
                Powered By <img style={styles.logo} src="public/images/musixmatch-logo.png"/>
            </a>
            <p>By <a 
                    style={styles.anchor} 
                    key='portfolio'
                    href='http://brandonstilson.com'>
                    Brandon
                </a>
            </p>
        </div>
    </footer>
)

export default Radium(Footer)