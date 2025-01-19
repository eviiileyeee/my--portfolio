import React from "react";
import { 
  FaHtml5, 
  FaCss3Alt, 
  FaJs, 
  FaReact, 
  FaNodeJs, 
  FaDatabase, 
  FaGitAlt, 
  FaGithub, 
  FaCloud, 
  FaEdit 
} from "react-icons/fa";
import { SiCplusplus, SiC, SiExpress, SiPostman } from "react-icons/si";

const Skill = () => {
  return (
    <div className="bg-white text-gray-800 py-10">
      <div className="max-w-5xl mx-auto px-6">
        {/* Title Section */}
        <h2 className="text-3xl font-bold text-center mb-4 text-gray-900">
          I love coding and exploring new technology.
        </h2>
        <p className="text-center mb-10 text-gray-600">
          Mostly into backend web development. I'm a beginner who's exploring exciting tools and technologies.
        </p>

        {/* Skills Section */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-6 text-gray-900">Skills</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <SkillCard Icon={FaJs} name="JavaScript" />
            <SkillCard Icon={FaHtml5} name="HTML" />
            <SkillCard Icon={FaCss3Alt} name="CSS" />
            <SkillCard Icon={SiCplusplus} name="C++" />
            <SkillCard Icon={SiC} name="C" />
            <SkillCard Icon={FaReact} name="React.js" />
            <SkillCard Icon={FaNodeJs} name="Node.js" />
            <SkillCard Icon={SiExpress} name="Express.js" />
            <SkillCard Icon={FaDatabase} name="MongoDB" />
          </div>
        </div>

        {/* Tools Section */}
        <div>
          <h3 className="text-2xl font-semibold mb-6 text-gray-900">Tools</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <SkillCard Icon={FaEdit} name="VSCode" />
            <SkillCard Icon={FaGitAlt} name="Git" />
            <SkillCard Icon={FaGithub} name="GitHub" />
            <SkillCard Icon={FaCloud} name="Netlify" />
            <SkillCard Icon={SiPostman} name="Postman" />
          </div>
        </div>
      </div>
    </div>
  );
};

const SkillCard = ({ Icon, name }) => {
  return (
    <div className="flex flex-col items-center bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
      <Icon className="w-12 h-12 text-gray-700 mb-4" />
      <span className="text-lg font-medium text-gray-800">{name}</span>
    </div>
  );
};

export default Skill;
