// import {MailIcon} from '@heroicons/react/solid';

import {
  Twitter,
  // Linkedin,
  Github,
  // Facebook,
  Instagram,
} from '@icons-pack/react-simple-icons';

// import TransitionColor from '@app/components/Transitions/TransitionColor';
// import SocialIcon from './SocialIcon';
import AnimatedLinkIcon from '../../AnimatedLinkIcon';

// const Container = styled.footer`
//   transition-property: background, color;
//   transition-duration: 300ms;
//   transition-timing-function: ease-in-out;
//   will-change: background, color;
// `;

// const IconContainer = styled(FontAwesomeIcon)`
//   transition-property: background, color;
//   transition-duration: 300ms;
//   transition-timing-function: ease-in-out;
//   will-change: background, color;
// `;

type FooterProps = {
  className?: string;
}

export default function Footer({ className }: FooterProps) {
  return (
    <div className={`bg-app-bg w-full flex flex-row justify-center items-center ${className ? className : ''}`}>
      {/* <div className="mx-3">
        <AnimatedLinkIcon href="mailto:benjamin@bensthoughts.dev" aria-label="email me at benjamin@bensthoughts.dev">
          <MailIcon className="w-6 h-6 text-icon-primary" />
        </AnimatedLinkIcon>
      </div> */}
      <div className="mx-3">
        <AnimatedLinkIcon href="https://github.com/bensthoughts/shareable-love-forms" aria-label="Github">
          <Github className="text-accent" />
        </AnimatedLinkIcon>
      </div>
      <div className="mx-3">
        <AnimatedLinkIcon href="https://twitter.com/bensthoughts" aria-label="Twitter">
          <Twitter className="text-accent" />
        </AnimatedLinkIcon>
      </div>
      <div className="mx-3">
        <AnimatedLinkIcon href="https://www.instagram.com/sex.coach.charity" aria-label="Github">
          <Instagram className="text-accent" />
        </AnimatedLinkIcon>
      </div>
      {/* <div className="mx-3">
        <AnimatedLinkIcon href="https://www.facebook.com/benjamin.blumenfeldjones.9" aria-label="Facebook">
          <Facebook className="text-icon-primary" />
        </AnimatedLinkIcon>
      </div> */}
    </div>
  );
}
