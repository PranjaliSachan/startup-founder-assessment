"use client"; // This is a client component
import Link from "next/link";
import { IForm, useFormContext } from "../formContext";

export default function Page() {
    const [form, updateForm] = useFormContext();

    return (
        <div className="w-full">
            <div className="lg:w-[50vw] md:mx-auto sm:px-4 md:px-12 py-12 flex flex-col flex-nowrap bg-gray-100">
                <div className="w-full flex flex-col flex-nowrap my-8 mx-4 fade-in">
                    <h2 className="text-2xl font-bold text-cyan-900">Founder's Information</h2>
                    <p className="text-xl mt-2 text-cyan-800">Let's get started by filling out some basic information about your startup!</p>
                </div>
                <div className="w-full flex flex-col flex-nowrap mx-auto my-2 fade-in">
                    <label htmlFor="fullName" className="mx-4 px-2 pt-4 font-bold text-cyan-900">Full Name</label>
                    <input name="fullName" value={form.fullName} onChange={e => updateForm({ ...form, fullName: e.target.value } as IForm)} type="text" placeholder="e.g. John Doe" required className="mx-4 my-2 px-3 py-4 text-lg text-cyan-800 rounded-md border border-cyan-600" />
                    <label htmlFor="emailAddress" className="mx-4 px-2 pt-4 font-bold text-cyan-900">Email Address</label>
                    <input name="emailAddress" value={form.emailAddress} onChange={e => updateForm({ ...form, emailAddress: e.target.value } as IForm)} type="email" placeholder="e.g. john.doe@company.org" required className="mx-4 my-2 px-3 py-4 text-lg text-cyan-800 rounded-md border border-cyan-600" />
                    <label htmlFor="phoneNumber" className="mx-4 px-2 pt-4 font-bold text-cyan-900">Phone Number</label>
                    <input name="phoneNumber" value={form.phoneNumber} onChange={e => updateForm({ ...form, phoneNumber: e.target.value } as IForm)} type="tel" placeholder="e.g. 9999992222" required className="w-2/4 mx-4 my-2 px-3 py-4 text-lg text-cyan-800 rounded-md border border-cyan-600" />
                </div>
                <div className="w-full my-8 fade-in">
                    <hr />
                </div>
                <div className="w-full flex flex-col flex-nowrap mx-auto my-2 fade-in">
                    <label htmlFor="startupName" className="mx-4 px-2 pt-4 font-bold text-cyan-900">Startup Name</label>
                    <input name="startupName" value={form.startupName} onChange={e => updateForm({ ...form, startupName: e.target.value } as IForm)} type="text" placeholder="e.g. PraSha Sync" required className="mx-4 my-2 px-3 py-4 text-lg text-cyan-800 rounded-md border border-cyan-600" />
                    <label htmlFor="foundersRole" className="mx-4 px-2 pt-4 font-bold text-cyan-900">Founder's Role</label>
                    <input name="foundersRole" value={form.founderRole} onChange={e => updateForm({ ...form, founderRole: e.target.value } as IForm)} type="text" placeholder="e.g. President, CEO, etc." required className="mx-4 my-2 px-3 py-4 text-lg text-cyan-800 rounded-md border border-cyan-600" />
                    <label htmlFor="yearsOfExperience" className="mx-4 px-2 pt-4 font-bold text-cyan-900">Year's of Experience</label>
                    <input name="yearsOfExperience" value={form.yearsOfExperience} onChange={e => updateForm({ ...form, yearsOfExperience: parseInt(e.target.value) } as IForm)} type="number" placeholder="e.g. 5" className="w-1/4 mx-4 my-2 px-3 py-4 text-lg text-cyan-800 rounded-md border border-cyan-600" />
                    <label htmlFor="linkedInProfile" className="mx-4 px-2 pt-4 font-bold text-cyan-900">LinkedIn Profile</label>
                    <input name="linkedInProfile" value={form.linkedInProfile} onChange={e => updateForm({ ...form, linkedInProfile: e.target.value } as IForm)} type="text" placeholder="e.g. https://linkedin.com/in/johndoe" className="mx-4 my-2 px-3 py-4 text-lg text-cyan-800 rounded-md border border-cyan-600" />
                    <label htmlFor="shortBio" className="mx-4 px-2 pt-4 font-bold text-cyan-900">Short Bio/Experience</label>
                    <textarea name="shortBio" value={form.shortBio} onChange={e => updateForm({ ...form, shortBio: e.target.value } as IForm)} rows={5} placeholder="e.g. I have ..." className="mx-4 my-2 px-3 py-4 text-lg text-cyan-800 rounded-md border border-cyan-600" />
                    <label htmlFor="location" className="mx-4 px-2 pt-4 font-bold text-cyan-900">Location</label>
                    <select name="location" value={form.location} onChange={e => updateForm({ ...form, location: e.target.value } as IForm)} className="mx-4 my-2 px-3 py-4 text-lg text-cyan-800 rounded-md border border-cyan-600">
                        <option value="">--Please choose an option--</option>
                        <option value="New York">New York</option>
                        <option value="Los Angeles">Los Angeles</option>
                        <option value="Chicago">Chicago</option>
                        <option value="Houston">Houston</option>
                        <option value="San Francisco">San Francisco</option>
                        <option value="Dallas">Dallas</option>
                    </select>
                </div>
                <div className="w-full mt-8 fade-in">
                    <hr />
                </div>
                <div className="w-full flex flex-row flex-nowrap mt-4 mb-2 justify-end items-center fade-in">
                    <div>
                        {/* <button type="button" className="text-lg font-bold text-cyan-800 hover:text-cyan-950">Previous</button> */}
                    </div>
                    <div className="flex flex-row flex-nowrap justify-end items-center">
                        <button type="button" className="mr-4 py-2 px-4 rounded-md text-lg tracking-wider bg-cyan-700 text-white hover:bg-cyan-800">Save Draft</button>
                        <Link href="/form/idea" className="md:ml-4 mx-4 text-lg font-bold text-cyan-800 hover:text-cyan-950">Next</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
