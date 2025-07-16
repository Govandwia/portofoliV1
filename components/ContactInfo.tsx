import { Button } from '@/components/ui/button';
import { Mail, Phone, Linkedin, Github, ExternalLink } from 'lucide-react';

export function ContactInfo() {
  const contactDetails = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: 'Email',
      value: 'Govandwi01@gmail.com',
      href: 'mailto:Govandwi01@gmail.com'
    },
    {
      icon: <Phone className="w-5 h-5" />,
      label: 'Phone',
      value: '+628156508128',
      href: 'tel:+628156508128'
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      label: 'LinkedIn',
      value: 'Govan Dwi Aditya',
      href: 'https://www.linkedin.com/in/govan-dwi-aditya-744544280'
    },
    {
      icon: <Github className="w-5 h-5" />,
      label: 'GitHub',
      value: 'Govandwi.a',
      href: 'https://github.com/Govandwia'
    }
  ];

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <p className="text-gray-600 dark:text-gray-300">
          Feel free to reach out to me through any of the following channels. 
          I'm always open to discussing new opportunities, collaborations, or just having a chat about technology.
        </p>
        
        <div className="space-y-3">
          {contactDetails.map((detail, index) => (
            <div key={index} className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-50 dark:bg-blue-900/20 rounded-lg flex items-center justify-center">
                {detail.icon}
              </div>
              <div className="flex-1">
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {detail.label}
                </p>
                <p className="font-medium text-gray-900 dark:text-white">
                  {detail.value}
                </p>
              </div>
              <Button variant="outline" size="sm" asChild>
                <a href={detail.href} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-4 h-4" />
                </a>
              </Button>
            </div>
          ))}
        </div>
      </div>
      
      <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
        <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
          Response Time
        </h4>
        <p className="text-sm text-gray-600 dark:text-gray-300">
          I typically respond to emails within 24-48 hours. For urgent matters, 
          feel free to reach out via phone or LinkedIn.
        </p>
      </div>
    </div>
  );
}