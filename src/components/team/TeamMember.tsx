import React from 'react';
import { Twitter, Instagram, Facebook, Mail, Phone } from 'lucide-react';

export interface TeamMemberProps {
  name: string;
  role: string;
  picture: string;
  mail: string;
  phone: string;
  socialLinks: {
    twitter?: string;
    instagram?: string;
    facebook?: string;
  };
}

const TeamMember: React.FC<TeamMemberProps> = ({ name, role, picture, mail, phone, socialLinks }) => {
  return (
    <div className="max-w-xs mx-auto bg-white rounded-lg shadow-md overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
      {/* Image Container */}
      <div className="relative">
        <img src={picture} alt={name} className="w-full h-48 object-cover" />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-transparent to-transparent p-2">
          <p className="text-white text-sm">{role}</p>
        </div>
      </div>

      {/* Content Container */}
      <div className="p-4">
        <h3 className="text-xl font-semibold">{name}</h3>
        <p className="text-gray-600 text-sm">{role}</p>

        {/* Contact Info */}
        <div className="mt-2 space-y-2 text-gray-700">
          <div className="flex items-center space-x-2">
            <Phone size={16} />
            <span>{phone}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Mail size={16} />
            <span>{mail}</span>
          </div>
        </div>

        {/* Social Links */}
        <div className="mt-4 flex space-x-3">
          {socialLinks.twitter && (
            <a href={socialLinks.twitter} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-600 transition-colors">
              <Twitter size={20} />
            </a>
          )}
          {socialLinks.instagram && (
            <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="text-pink-500 hover:text-pink-600 transition-colors">
              <Instagram size={20} />
            </a>
          )}
          {socialLinks.facebook && (
            <a href={socialLinks.facebook} target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-800 transition-colors">
              <Facebook size={20} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default TeamMember;
