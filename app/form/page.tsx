"use client"; // This is a client component
import Link from "next/link";
import { IForm, useFormContext } from "../formContext";
import { useState } from "react";

export default function Page() {
    const [form, updateForm, saveDraft] = useFormContext();

    const validateEmail = (email: string) => {
        const reg = /^\S+@\S+\.\S+$/;
        return reg.test(email);
    }
    const [validEmail, setValidEmail] = useState(validateEmail(form.emailAddress ?? ''));

    const checkFormValid = () => {
        return (form.fullName !== undefined && form.fullName !== '')
            && (form.emailAddress !== undefined && form.emailAddress.trim() !== '')
            && (form.phoneNumber !== undefined && form.phoneNumber.trim() !== '')
            && (form.startupName !== undefined && form.startupName.trim() !== '')
            && (form.founderRole !== undefined && form.founderRole.trim() !== '');
    }
    const [formValid, setFormValid] = useState(checkFormValid());

    const validateRequiredInputs = (inputKey: string, value: string) => {
        switch (inputKey) {
            case 'fullName':
                updateForm({ ...form, fullName: value } as IForm)
                break;
            case 'emailAddress':
                updateForm({ ...form, emailAddress: value } as IForm)
                break;
            case 'phoneNumber':
                updateForm({ ...form, phoneNumber: value } as IForm)
                break;
            case 'startupName':
                updateForm({ ...form, startupName: value } as IForm)
                break;
            case 'foundersRole':
                updateForm({ ...form, founderRole: value } as IForm)
                break;

            default:
                break;
        }

        if (checkFormValid()) {
            if (form.phoneNumber && form.phoneNumber.length === 10 && form.emailAddress && validateEmail(form.emailAddress)) {
                setFormValid(true);
            }
        } else {
            setFormValid(false);
        }
    };

    return (
        <div className="w-full">
            <div className="lg:w-[50vw] md:mx-auto sm:px-4 md:px-12 py-12 flex flex-col flex-nowrap bg-gray-100 text-black">
                <div className="w-full flex flex-col flex-nowrap my-8 mx-4 fade-in">
                    <h2 className="text-2xl font-bold">Founder's Information</h2>
                    <p className="text-xl mt-2">Let's get started by filling out some basic information about your startup!</p>
                </div>
                <div className="w-full flex flex-col flex-nowrap mx-auto my-2 fade-in">
                    <label htmlFor="fullName" className="mx-4 px-2 pt-4 font-bold">Full Name</label>
                    <input name="fullName" value={form.fullName} onChange={e => validateRequiredInputs('fullName', e.target.value)} type="text" placeholder="e.g. John Doe" required className={"mx-4 my-2 px-3 py-4 text-lg rounded-md border " + (form.fullName && form.fullName !== '' ? "border-none" : "border-red-600")} />
                    {form.fullName && form.fullName !== '' ? (<></>) : (<small className="mx-4 px-4 italic text-red-600">Full name is required!</small>)}
                    <label htmlFor="emailAddress" className="mx-4 px-2 pt-4 font-bold">Email Address</label>
                    <input name="emailAddress" value={form.emailAddress} onChange={e => validateRequiredInputs('emailAddress', e.target.value)} type="email" placeholder="e.g. john.doe@company.org" required className={"mx-4 my-2 px-3 py-4 text-lg rounded-md border " + (form.emailAddress && form.emailAddress !== '' && validateEmail(form.emailAddress) ? "border-none" : "border-red-600")} />
                    {form.emailAddress && form.emailAddress !== '' && validateEmail(form.emailAddress) ? (<></>) : (<small className="mx-4 px-4 italic text-red-600">Email address missing or invalid!</small>)}
                    <label htmlFor="phoneNumber" className="mx-4 px-2 pt-4 font-bold">Phone Number</label>
                    <input name="phoneNumber" value={form.phoneNumber} onChange={e => validateRequiredInputs('phoneNumber', e.target.value)} type="tel" minLength={10} maxLength={10} placeholder="10 digit Phone Number" required className={"w-2/4 mx-4 my-2 px-3 py-4 text-lg rounded-md border " + (form.phoneNumber && form.phoneNumber !== '' && form.phoneNumber.length === 10 ? "border-none" : "border-red-600")} />
                    {form.phoneNumber && form.phoneNumber !== '' && form.phoneNumber.length === 10 ? (<></>) : (<small className="mx-4 px-4 italic text-red-600">Phone number is missing or invalid!</small>)}
                </div>
                <div className="w-full my-8 fade-in">
                    <hr />
                </div>
                <div className="w-full flex flex-col flex-nowrap mx-auto my-2 fade-in">
                    <label htmlFor="startupName" className="mx-4 px-2 pt-4 font-bold">Startup Name</label>
                    <input name="startupName" value={form.startupName} onChange={e => validateRequiredInputs('startupName', e.target.value)} type="text" placeholder="e.g. PraSha Sync" required className={"mx-4 my-2 px-3 py-4 text-lg rounded-md border " + (form.startupName && form.startupName !== '' ? "border-none" : "border-red-600")} />
                    {form.startupName && form.startupName !== '' ? (<></>) : (<small className="mx-4 px-4 italic text-red-600">Startup name is required!</small>)}
                    <label htmlFor="foundersRole" className="mx-4 px-2 pt-4 font-bold">Founder's Role</label>
                    <input name="foundersRole" value={form.founderRole} onChange={e => validateRequiredInputs('foundersRole', e.target.value)} type="text" placeholder="e.g. President, CEO, etc." required className={"mx-4 my-2 px-3 py-4 text-lg rounded-md border " + (form.founderRole && form.founderRole !== '' ? "border-none" : "border-red-600")} />
                    {form.founderRole && form.founderRole !== '' ? (<></>) : (<small className="mx-4 px-4 italic text-red-600">Founder role is required!</small>)}
                    <label htmlFor="yearsOfExperience" className="mx-4 px-2 pt-4 font-bold">Year's of Experience</label>
                    <input name="yearsOfExperience" value={form.yearsOfExperience} onChange={e => updateForm({ ...form, yearsOfExperience: parseInt(e.target.value) } as IForm)} type="number" placeholder="e.g. 5" className="w-1/4 mx-4 my-2 px-3 py-4 text-lg rounded-md border" />
                    <label htmlFor="linkedInProfile" className="mx-4 px-2 pt-4 font-bold">LinkedIn Profile</label>
                    <input name="linkedInProfile" value={form.linkedInProfile} onChange={e => updateForm({ ...form, linkedInProfile: e.target.value } as IForm)} type="text" placeholder="e.g. https://linkedin.com/in/johndoe" className="mx-4 my-2 px-3 py-4 text-lg rounded-md border" />
                    <label htmlFor="shortBio" className="mx-4 px-2 pt-4 font-bold">Short Bio/Experience</label>
                    <textarea name="shortBio" value={form.shortBio} onChange={e => updateForm({ ...form, shortBio: e.target.value } as IForm)} rows={5} placeholder="e.g. I have ..." className="mx-4 my-2 px-3 py-4 text-lg rounded-md border" />
                    <label htmlFor="location" className="mx-4 px-2 pt-4 font-bold">Location</label>
                    <select name="location" value={form.location} onChange={e => updateForm({ ...form, location: e.target.value } as IForm)} className="mx-4 my-2 px-3 py-4 text-lg rounded-md border">
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
                    <></>
                    <div className="flex flex-row flex-nowrap justify-end items-center">
                        <button type="button" onClick={saveDraft} className="mr-4 py-1 px-3 rounded-md text-lg bg-indigo-700 text-white hover:bg-indigo-800">Save Draft</button>
                        {formValid ? (<Link href="/form/idea" className="md:ml-4 mx-4 text-lg font-bold text-indigo-800 hover:text-indigo-900">Next</Link>) : (<></>)}
                    </div>
                </div>
            </div>
        </div>
    );
}
