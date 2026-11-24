import React, { useEffect, useState } from 'react'
import upload from '../assets/upload_area.png';
import { toast } from 'react-toastify';
import { FiDownload, FiFileText, FiUpload } from "react-icons/fi";
import { useContext } from 'react';
import { Context } from '../context/Context';
import Loader from '../components/Loader';
import axiosInstance from '../utils/axiosInstance.js';

const AddAbout = () => {

    const { authState, navigate } = useContext(Context);

    const [state, setState] = useState('plain');
    const [profile, setProfile] = useState(null);

    const [loading, setLoading] = useState(false);

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [jobPosition, setJobPosition] = useState("");
    const [heading, setHeading] = useState("");
    const [aboutMe, setAboutMe] = useState("");
    const [experience, setExperience] = useState([]);
    const [skills, setSkills] = useState([]);
    const [resume, setResume] = useState(null);
    const [resumeUrl, setResumeUrl] = useState(null);

    const fetchProfile = async () => {
        try {
            setLoading(true);
            const response = await axiosInstance.get(`/api/v1/admin/profile`);
            if (response.data.success) {
                const data = response.data.profile;
                setProfile(data);

                setName(data.name || '');
                setEmail(data.email || '');
                setJobPosition(data.jobPosition || '');
                setHeading(data.heading || '');
                setAboutMe(data.aboutMe || '');
                setExperience(data.experience || []);
                setSkills(data.skills || []);
                setResumeUrl(data.resume || null);
                setResume(null)
            }
        } catch (error) {
            return res.status(500).json({ success: false, message: error.message });
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchProfile();
    }, []);


    const onSubmitHandler = async (e) => {
        e.preventDefault();
        try {
            if (authState !== 'authenticated') {
                return navigate('/login')
            }

            if (state !== 'edit') return;

            setLoading(true);

            const formData = new FormData();

            formData.append("name", name);
            formData.append("email", email);
            formData.append("jobPosition", jobPosition);
            formData.append("heading", heading);
            formData.append("aboutMe", aboutMe);

            formData.append("experience", JSON.stringify(experience));
            formData.append("skills", JSON.stringify(skills));

            if (resume) {
                formData.append("resume", resume);
            }

            const response = await axiosInstance.patch(`/api/v1/admin/updateprofile`, formData);
            if (response.data.success) {
                toast.success(response.data.message || "Profile information updated successfully");
                const updated = response.data.profile;
                setProfile(updated);

                setName(updated.name || "");
                setEmail(updated.email || "");
                setJobPosition(updated.jobPosition || "");
                setHeading(updated.heading || "");
                setAboutMe(updated.aboutMe || "");
                setExperience(updated.experience || []);
                setSkills(updated.skills || []);
                setResumeUrl(updated.resume || null);
                setResume(null);

                setState('plain');
            }
        } catch (error) {
            toast.error(error.response?.data?.message || "Updating failed!");
        } finally {
            setLoading(false);
        }
    }

    if (!profile || loading) {
        return <Loader />
    }

    return (
        <div className="min-h-screen bg-gray-900 text-white px-4 py-6">
            <div className="max-w-3xl mx-auto">
                <h1 className="text-2xl font-bold mb-2">Update Profile information</h1>
                {state === 'plain' ? <p onClick={() => setState('edit')} className="px-2 py-1 w-40 text-center text-gray-200 mb-6 bg-blue-500 rounded-md hover:bg-blue-700 cursor-pointer">Edit</p> : ""}

                <form className="space-y-5" onSubmit={onSubmitHandler}>
                    <div>
                        <p className="block text-sm mb-2">Full Name</p>
                        {state === 'plain' ? <h3 className="w-full bg-gray-600 rounded-lg px-4 py-2 border-1 border-blue-500 text-white">{profile.name}</h3>
                            : <input
                                type="text"
                                placeholder="Enter full name"
                                onChange={(e) => { setName(e.target.value) }}
                                value={name}
                                className="w-full bg-gray-800 rounded-lg px-4 py-2 outline-none text-white focus:ring-2 focus:ring-blue-500"
                            />}
                    </div>

                    <div>
                        <p className="block text-sm mb-2">Email</p>
                        {state === 'plain' ? <h3 className="w-full bg-gray-600 rounded-lg px-4 py-2 border-1 border-blue-500 text-white">{profile.email}</h3>
                            : <input
                                type="email"
                                placeholder="Enter full email"
                                onChange={(e) => { setEmail(e.target.value) }}
                                value={email}
                                className="w-full bg-gray-800 rounded-lg px-4 py-2 outline-none text-white focus:ring-2 focus:ring-blue-500"
                            />}
                    </div>

                    <div>
                        <p className="block text-sm mb-2">Job Position</p>
                        {state === 'plain' ?
                            <div className='flex'>
                                {
                                    profile.jobPosition.length > 0 ? (
                                        <h3 className="w-full bg-gray-600 rounded-lg px-4 py-2 border-1 border-blue-500 text-white">{profile.jobPosition}</h3>
                                    ) : <p className='text-gray-400'>No Content Available</p>
                                }
                            </div>
                            :
                            <input
                                type="text"
                                placeholder="Enter job position (e.g., Web Developer)"
                                onChange={(e) => { setJobPosition(e.target.value) }}
                                value={jobPosition}
                                className="w-full bg-gray-800 rounded-lg px-4 py-2 outline-none text-white focus:ring-2 focus:ring-blue-500"
                            />}
                    </div>

                    <div>
                        <p className="block text-sm mb-2">Heading</p>
                        {state === 'plain' ?
                            <div className='flex'>
                                {
                                    profile.heading.length > 0 ? (
                                        <h3 className="w-full bg-gray-600 rounded-lg px-4 py-2 border-1 border-blue-500 text-white">{profile.heading}</h3>
                                    ) : <p className='text-gray-400'>No Content Available</p>
                                }
                            </div>
                            :
                            <input
                                type="text"
                                placeholder="Enter one line heading (e.g., 'Creating beautiful websites')"
                                onChange={(e) => { setHeading(e.target.value) }}
                                value={heading}
                                className="w-full bg-gray-800 rounded-lg px-4 py-2 outline-none text-white focus:ring-2 focus:ring-blue-500"
                            />}
                    </div>

                    <div>
                        <p className="block text-sm mb-2">About Me</p>
                        {state === 'plain' ? (
                            <div className='flex'>
                                {
                                    profile.aboutMe.length > 0 ? (
                                        <h3 className="w-full bg-gray-600 rounded-lg px-4 py-2 border-1 border-blue-500 text-white">{profile.aboutMe}</h3>
                                    ) : <p className='text-gray-400'>No Content Available</p>
                                }
                            </div>
                        ) :
                            <textarea
                                rows="4"
                                placeholder="Enter brief description about yourself"
                                onChange={(e) => { setAboutMe(e.target.value) }}
                                value={aboutMe}
                                className="w-full bg-gray-800 rounded-lg px-4 py-2 outline-none text-white focus:ring-2 focus:ring-blue-500"
                            />
                        }
                    </div>

                    <div>
                        <p className="block text-sm mb-2">Experience</p>

                        {state === "plain" ? (
                            <div className="flex gap-2 flex-wrap">
                                {experience?.length > 0 ? (
                                    experience.map((item, i) => (
                                        <span
                                            key={i}
                                            className="bg-blue-500 px-3 py-1 rounded-lg"
                                        >
                                            {item}
                                        </span>
                                    ))
                                ) : (
                                    <p className="text-gray-400">No experience added</p>
                                )}
                            </div>
                        ) : (
                            <input
                                type="text"
                                // value={experience.join(", ")}
                                value={experience}
                                onChange={(e) => setExperience(e.target.value)}
                                // onChange={(e) => { // Take input text → break into array → clean spaces → remove empty items → store in experience state
                                //     const value = e.target.value;

                                //     const experienceArray = value
                                //         .split(",")
                                //         .map(item => item.trim())
                                //         .filter(Boolean);

                                //     setExperience(experienceArray);
                                // }}
                                placeholder="Frontend Developer, Freelancer, Internship"
                                className="w-full bg-gray-800 rounded-lg px-4 py-2 outline-none text-white focus:ring-2 focus:ring-blue-500"
                            />
                        )}
                    </div>

                    <div>
                        <p className="block text-sm mb-2">Skills</p>

                        {state === "plain" ? (
                            <div className="flex gap-2 flex-wrap">
                                {skills?.length > 0 ? (
                                    skills.map((item, i) => (
                                        <span key={i} className="bg-green-500 px-3 py-1 rounded-lg">
                                            {item}
                                        </span>
                                    ))
                                ) : (
                                    <p className="text-gray-400">No skills added</p>
                                )}
                            </div>
                        ) : (
                            <input
                                type="text"
                                // value={skills.join(", ")}
                                value={skills}
                                onChange={(e) => setSkills(e.target.value)}
                                // onChange={(e) => { // Take input text → break into array → clean spaces → remove empty items → store in skills state
                                //     const value = e.target.value;

                                //     const skillsArray = value
                                //         .split(",")
                                //         .map(item => item.trim())
                                //         .filter(Boolean);

                                //     setSkills(skillsArray);
                                // }}
                                placeholder="React, Node, MongoDB"
                                className="w-full bg-gray-800 rounded-lg px-4 py-2 outline-none text-white focus:ring-2 focus:ring-blue-500"
                            />
                        )}
                    </div>

                    {/* Add resume */}
                    <div className="border-2 border-dashed border-blue-200 bg-gray-600 rounded-xl p-6 flex flex-col lg:flex-row justify-between items-center gap-4">

                        {state === "plain" ?
                            <div className="flex items-center gap-4">

                                <div className="w-14 h-14 bg-gray-300 rounded-lg flex items-center justify-center">
                                    <FiFileText className="text-blue-600 text-2xl" />
                                </div>

                                <div>
                                    <h4 className="font-semibold">
                                        {resume?.name ||
                                            (resumeUrl ? "Resume uploaded" : "No resume uploaded")}
                                    </h4>
                                    {/* <h4 className="font-semibold">{resume ? resume.name : "No resume uploaded"}</h4> */}
                                </div>

                            </div>
                            :
                            <div className="flex flex-col lg:flex-row items-center gap-3">
                                <label htmlFor="file" className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg cursor-pointer">
                                    <FiUpload /> Upload
                                    <input type="file" id="file" accept="application/pdf" onChange={(e) => setResume(e.target.files[0])} hidden />
                                </label>
                                <h4 className="font-semibold text-center">{resume ? resume.name : "No resume uploaded"}</h4>
                            </div>
                        }

                        {state === "plain" && resumeUrl && (
                            <a
                                href={resumeUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 px-4 py-2
                       bg-gray-600 border rounded-lg text-blue-200"
                            >
                                <FiDownload />
                                View Resume
                            </a>
                        )}

                    </div>

                    <div className='flex gap-2 flex-wrap'>
                        {state === 'edit' ? <button type="submit" className="bg-blue-500 hover:bg-blue-600 px-6 py-2 rounded-lg font-medium w-full sm:w-auto" >
                            Update Information
                        </button> : ''}
                        {state === 'edit' ? <button onClick={() => setState('plain')} className="bg-blue-500 hover:bg-blue-600 px-6 py-2 rounded-lg font-medium w-full sm:w-auto" >
                            Cancel
                        </button> : ''}
                    </div>
                </form>

            </div>
        </div>
    )
}

export default AddAbout
