"use client";
import { useFormContext } from "@/app/formContext";
import Link from "next/link";
import { useState } from "react";

const formSpreeAction = 'https://formspree.io/f/{FORM_ID}';

export default function Submit() {
    const [form] = useFormContext();
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [message, setMessage] = useState('Are you sure you want to submit form?');

    const submitForm = () => {
        setMessage('Please do not click the Previous button ...');
        fetch(formSpreeAction, {
            method: 'POST',
            body: JSON.stringify(form),
            headers: {
                'Accept': 'application/json'
            }
        }).then((res: any) => {
            if (res.ok) {
                setFormSubmitted(true);
                setMessage('Assessment Submitted Successfully!');
            } else {
                res.json().then((data: any) => {
                    if (Object.hasOwn(data, 'errors')) {
                        const errors = data["errors"].map((error: any) => error["message"]).join(", ");
                        setMessage(errors);
                    } else {
                        setMessage('Sorry! There was a problem submitting your assessment!');
                    }
                });
            }
        }).catch((err: any) => {
            setMessage(`'Sorry! There was a problem submitting your assessment!' Error: ${err}`);
        });
    }

    return (
        <div className="w-full">
            <div className="lg:w-[75vw] md:mx-auto mt-24 sm:px-8 flex flex-col flex-nowrap rounded fade-in-up">
                <div className="w-full mx-3 mt-12 pt-12 pb-4 flex flex-row sm:justify-start md:justify-center items-center">
                    <p className="text-3xl text-white flex flex-row justify-start items-center fade-in-up">
                        {formSubmitted ? (<span className="mr-4 px-3 py-1 rounded-[50%] bg-indigo-400">&#x2714;</span>) : (<></>)/*(<span className="spinner mx-3"></span>)*/}
                        {message}
                        {formSubmitted ? (<></>) : (
                            <span>
                                <button onClick={submitForm} className="md:ml-4 mx-4 text-2xl font-bolder text-indigo-800 hover:text-indigo-400">Yes</button>
                                |<Link href="/form/additional" className="md:ml-4 mx-4 text-2xl font-bolder text-indigo-800 hover:text-indigo-400">Go Back</Link>
                            </span>
                        )}
                    </p>
                </div>
            </div>
        </div>
    );
}