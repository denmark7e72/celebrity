'use client';

import { motion } from 'framer-motion';
import { Star, Mail, Phone, MapPin, Instagram, Twitter, Facebook, Linkedin, Youtube, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-zinc-900 to-black text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')] bg-cover bg-center opacity-5" />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/90 to-black/80" />
      
      <div className="relative">
        {/* Newsletter Section */}
        <div className="border-b border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h3 className="text-3xl font-bold font-playfair mb-4">
                Stay in the <span className="gradient-text">Spotlight</span>
              </h3>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                Get exclusive access to celebrity availability, special offers, and behind-the-scenes content.
              </p>
              <div className="flex flex-col sm:flex-row max-w-md mx-auto gap-4">
                <Input
                  placeholder="Enter your email"
                  className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:bg-white/20"
                />
                <Button className="premium-button whitespace-nowrap">
                  Subscribe <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <Link href="/" className="flex items-center space-x-2 mb-6">
                <Star className="h-8 w-8 text-yellow-500" />
                <span className="text-xl font-bold font-playfair gradient-text">
                  Elite Celebrity
                </span>
              </Link>
              <p className="text-gray-300 mb-6 leading-relaxed">
                The world's premier celebrity booking platform, connecting you with A-list talent for unforgettable experiences.
              </p>
              <div className="flex space-x-4">
                {[
                  { icon: Instagram, href: '#' },
                  { icon: Twitter, href: '#' },
                  { icon: Facebook, href: '#' },
                  { icon: Linkedin, href: '#' },
                  { icon: Youtube, href: '#' }
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-yellow-500 hover:text-black transition-all duration-300"
                  >
                    <social.icon className="h-5 w-5" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {[
                  { label: 'Browse Celebrities', href: '/celebrities' },
                  { label: 'Book Now', href: '/booking' },
                  { label: 'About Us', href: '/about' },
                  { label: 'Success Stories', href: '/blog' },
                  { label: 'Contact', href: '/contact' },
                  { label: 'FAQ', href: '/faq' }
                ].map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      className="text-gray-300 hover:text-yellow-500 transition-colors duration-300 flex items-center group"
                    >
                      {link.label}
                      <ArrowRight className="ml-1 h-3 w-3 opacity-0 group-hover:opacity-100 transform group-hover:translate-x-1 transition-all duration-300" />
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Services */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <h4 className="text-lg font-semibold mb-6">Services</h4>
              <ul className="space-y-3">
                {[
                  'Celebrity Appearances',
                  'Corporate Events',
                  'Private Parties',
                  'Wedding Entertainment',
                  'Product Launches',
                  'Brand Endorsements'
                ].map((service, index) => (
                  <li key={index}>
                    <span className="text-gray-300 hover:text-yellow-500 transition-colors duration-300 cursor-pointer">
                      {service}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h4 className="text-lg font-semibold mb-6">Get in Touch</h4>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-yellow-500" />
                  <span className="text-gray-300">+1 (888) 555-STAR</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-yellow-500" />
                  <span className="text-gray-300">hello@elitecelebrity.com</span>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-yellow-500 mt-1" />
                  <span className="text-gray-300">
                    123 Celebrity Boulevard<br />
                    Hollywood, CA 90210
                  </span>
                </div>
              </div>
              <Button variant="outline" className="mt-6 w-full border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black">
                Contact Us
              </Button>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm">
                © 2024 Elite Celebrity Booking. All rights reserved.
              </p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <Link href="/privacy" className="text-gray-400 hover:text-yellow-500 text-sm transition-colors">
                  Privacy Policy
                </Link>
                <Link href="/terms" className="text-gray-400 hover:text-yellow-500 text-sm transition-colors">
                  Terms of Service
                </Link>
                <Link href="/cookies" className="text-gray-400 hover:text-yellow-500 text-sm transition-colors">
                  Cookie Policy
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}