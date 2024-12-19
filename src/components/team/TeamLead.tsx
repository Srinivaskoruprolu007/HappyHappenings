import React from 'react';
import TeamMember from './TeamMember';
import { TeamMemberProps } from './TeamMember';

interface TeamLeadProps {
  name: string;
  role: string;
  picture: string;
  mail: string;
  phone: string;
  teamMembers: TeamMemberProps[];
}

const TeamLead: React.FC<TeamLeadProps> = ({ name, role, picture, mail, phone, teamMembers }) => {
  return (
    <section id="team" className="py-12 px-4 bg-gradient-to-r from-blue-500 to-teal-500">
      <div className="max-w-screen-xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-white mb-8">Meet the Band</h2>

        {/* Main Member */}
        <div className="mb-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center rounded-xl shadow-xl overflow-hidden bg-white">
          <div className="relative">
            <img src={picture} alt={name} className="w-96 h-96 object-cover rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300" />
          </div>
          <div className="space-y-4 p-6">
            <h3 className="text-3xl font-extrabold text-gray-900">{name}</h3>
            <p className="text-xl text-gray-700 italic">{role}</p>
            <p className="text-gray-800 text-lg">{phone}</p>
            <p className="text-gray-800 text-lg">{mail}</p>
            <div className="flex justify-center space-x-6">
              <a href={`mailto:${mail}`} className="text-blue-600 hover:underline text-lg">
                Email
              </a>
              {/* Add other social media links if applicable */}
            </div>
          </div>
        </div>

        {/* Team Members */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <TeamMember key={index} {...member} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamLead;
