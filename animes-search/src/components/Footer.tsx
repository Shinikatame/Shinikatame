import { SiGithub, SiLinkedin, SiAnilist, SiMyanimelist } from "react-icons/si";

import styles from '../styles/components/footer.module.sass'

const medias = [
    {'key': 'github', 'url': 'https://github.com/shinikatame', 'icon': <SiGithub />},
    {'key': 'linkedin', 'url': 'https://www.linkedin.com/in/hudson-farias-9b324a228/', 'icon': <SiLinkedin />},
    {'key': 'anilist', 'url': 'https://anilist.co/user/Shinikatame', 'icon': <SiAnilist />},
    {'key': 'mal', 'url': 'https://myanimelist.net/animelist/Shinikatame', 'icon': <SiMyanimelist />}
]

const Footer = () => {
    return (
    <footer className={styles.footer}>
        <span>by Shinikatame</span>

        <nav>
        {medias.map( (media) => (
            <a key={media.key} href={ media.url } target='_blank' rel='noreferrer'>{ media.icon }</a>
        ))}
        </nav> 

    </footer>
    )
}
  
export default Footer
  