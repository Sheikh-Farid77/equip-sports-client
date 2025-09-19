// ContactSection.jsx
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactSection() {
  return (
    <section className="py-16 bg-gradient-to-r from-blue-50 to-blue-100">
      <div className="container mx-auto px-6 lg:px-16">
        {/* Section Heading */}
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 text-center mb-12">
          Contact & Support
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Left: Contact Info */}
          <div className="space-y-6">
            <p className="text-gray-600 text-lg">
              Have questions or need help? Our team is here for you!  
              Reach out anytime and we’ll get back to you quickly.
            </p>

            <div className="flex items-center gap-4">
              <Phone className="text-blue-600" />
              <span className="text-gray-700 font-medium">+880 1234-567890</span>
            </div>

            <div className="flex items-center gap-4">
              <Mail className="text-blue-600" />
              <span className="text-gray-700 font-medium">support@equipsports.com</span>
            </div>

            <div className="flex items-center gap-4">
              <MapPin className="text-blue-600" />
              <span className="text-gray-700 font-medium">
                123 Sports Avenue, Dhaka, Bangladesh
              </span>
            </div>

            <div className="mt-6">
              <iframe
                className="w-full h-64 rounded-xl shadow-md"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.902291014867!2d90.39150521543076!3d23.750885394597144!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8ab0d5f8e2d%3A0x12d4ecb1f42f2!2sDhaka!5e0!3m2!1sen!2sbd!4v1694022898204!5m2!1sen!2sbd"
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">
              Send Us a Message
            </h3>

            <form className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  className="w-full text-gray-800 px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  placeholder="Your Name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full text-gray-800 px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">
                  Message
                </label>
                <textarea
                  rows="4"
                  className="w-full px-4 text-gray-800 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  placeholder="Write your message here..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white font-medium py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
