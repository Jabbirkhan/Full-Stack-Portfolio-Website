import React, { useContext } from 'react';
import { Context } from '../context/Context';

const About = () => {

  const { adminProfile } = useContext(Context);

  return (
    <div className="bg-gray-900 text-white px-4 py-8 md:px-12 lg:px-24">

      {/* Profile Section */}
      <section className="flex items-center justify-start flex-wrap gap-5 mb-10">
        <div>
          <h2 className="text-2xl font-semibold">{adminProfile.name ? adminProfile.name : "No Content Available"}</h2>
          <p className="text-lg text-gray-400">{adminProfile.jobPosition? adminProfile.jobPosition : "No Content Available"}</p>
          <p className="text-sm md:text-base text-gray-400">{adminProfile.heading ? adminProfile.heading : "No Content Available"}</p>
        </div>
      </section>

      {/* About Me Section */}
      <section className="mb-10">
        <h3 className="text-xl font-semibold mb-2">About Me</h3>
        <p className="text-sm md:text-base text-gray-400 text-justify leading-relaxed">{adminProfile.aboutMe ? adminProfile.aboutMe : "No Content Available"}</p>
      </section>

      {/* Experience Section */}
      <section className="mb-10">
        <h3 className="text-xl font-semibold mb-2">Experience</h3>
        <ul className="list-disc list-inside space-y-2 text-sm md:text-base text-gray-400">
          {adminProfile.experience?.filter((exp)=> exp && exp.trim() !== "").map((exper, index) => (
              <li key={index}>{exper}</li>
          ))}
        </ul>
      </section>

      {/* Skills Section */}
      <section className="mb-10">
        <h3 className="text-xl font-semibold mb-2">Skills</h3>
        <div className="flex flex-wrap gap-3">
          {adminProfile.skills?.map((skill, index) => (
            <span key={index} className="bg-gray-700 text-white px-3 py-1 rounded text-sm">
              {skill}
            </span>
          ))}
        </div>
      </section>

    </div>
  );
};

export default About;
