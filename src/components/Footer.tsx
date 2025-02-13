import { LinkedinIcon } from "./Icons";
import { InstagramIcon } from "./Icons";
import { BehanceIcon } from "./Icons";
import { WhatsappIcon } from "./Icons";
import { MailIcon } from "./Icons";
import { FreelancerIcon } from "./Icons";

export const FooterIcons = [
  { id: 'linkedin', icon: <LinkedinIcon /> },
  { id: 'instagram', icon: <InstagramIcon /> },
  { id: 'behance', icon: <BehanceIcon /> },
  { id: 'whatsapp', icon: <WhatsappIcon /> },
  { id: 'mail', icon: <MailIcon /> },
  { id: 'freelancer', icon: <FreelancerIcon /> },
];

export const Footer = () => {
  return (
    <footer id="footer">
      <section className="flex flex-row bg-[#E6E6E6] dark:bg-[#111111]  justify-between items-center px-12 py-8">
        <h3>
          &copy; 2025 Armaan Parvez. All rights reserved.
        </h3>
        <div className="flex flex-row justify-between items-center gap-4">
          {FooterIcons.map(({ id, icon }) => (
            <div key={id} className="icon">
              {icon}
            </div>
          ))}
        </div>
      </section>
    </footer>
  );
};
