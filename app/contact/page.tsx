import { ContactForm } from '@/components/ContactForm';
import { ContactInfo } from '@/components/ContactInfo';
import { Card, CardContent } from '@/components/ui/card';
import { Mail, MessageCircle } from 'lucide-react';

export default function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-24">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center space-y-4 mb-16">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
              Get In Touch
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Let's discuss opportunities and collaborate on exciting projects
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card>
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <MessageCircle className="w-6 h-6 text-blue-600" />
                  <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
                    Send Message
                  </h2>
                </div>
                <ContactForm />
              </CardContent>
            </Card>

            {/* Contact Information */}
            <Card>
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Mail className="w-6 h-6 text-blue-600" />
                  <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
                    Contact Information
                  </h2>
                </div>
                <ContactInfo />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}