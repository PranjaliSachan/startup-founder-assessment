"use client"; // This is a client component
import { IForm, ISection, ISectionQuestion, useFormContext } from "@/app/formContext";
import Link from "next/link";

export default function Idea() {
    const [form, updateForm] = useFormContext();

    const updateAnswer = (key: string, value: string) => {
        if (key === form.section1.question1.key) {
            form.section1.question1.answer = value;
        } else if (key === form.section1.question2.key) {
            form.section1.question2.answer = value;
        } else if (key === form.section1.question3.key) {
            form.section1.question3.answer = value;
        } else if (key === form.section1.question4.key) {
            form.section1.question4.answer = value;
        } else if (key === form.section1.question5.key) {
            form.section1.question5.answer = value;
        } else {
            console.log('Invalid Key');
        }

        updateForm(form);
    }

    return (
        <div className="w-full">
            <div className="lg:w-[50vw] md:mx-auto sm:px-4 md:px-12 py-12 flex flex-col flex-nowrap bg-gray-100 text-black">
                <div className="w-full flex flex-col flex-nowrap mx-4 mt-8 mb-2 fade-in">
                    <h2 className="text-2xl font-bold">{form?.section1.title}</h2>
                    <p className="text-xl mt-2">Great! Now let's answer some questions related to your product or the problem you're solving!</p>
                </div>
                <div className="w-full flex flex-col flex-nowrap mx-auto my-2 fade-in text-black">
                    <label htmlFor={form?.section1.question1.key} className="mx-4 px-2 pt-4 font-bold">{form?.section1.question1.question}</label>
                    <textarea name={form?.section1.question1.key} value={form?.section1.question1.answer} onChange={e => updateAnswer(form?.section1.question1.key, e.target.value)} rows={2} placeholder="e.g. The product ..." className="mx-4 my-2 px-3 py-4 text-lg rounded-md border" />
                    <label htmlFor={form?.section1.question2.key} className="mx-4 px-2 pt-4 font-bold">{form?.section1.question2.question}</label>
                    <textarea name={form?.section1.question2.key} value={form?.section1.question2.answer} onChange={e => updateAnswer(form?.section1.question2.key, e.target.value)} rows={2} placeholder="e.g. An Ideal customer ..." className="mx-4 my-2 px-3 py-4 text-lg rounded-md border" />
                    <label htmlFor={form?.section1.question3.key} className="mx-4 px-2 pt-4 font-bold">{form?.section1.question3.question}</label>
                    <textarea name={form?.section1.question3.key} value={form?.section1.question3.answer} onChange={e => updateAnswer(form?.section1.question3.key, e.target.value)} rows={2} placeholder="e.g. The market ..." className="mx-4 my-2 px-3 py-4 text-lg rounded-md border" />
                    <label htmlFor={form?.section1.question4.key} className="mx-4 px-2 pt-4 font-bold">{form?.section1.question4.question}</label>
                    <textarea name={form?.section1.question4.key} value={form?.section1.question4.answer} onChange={e => updateAnswer(form?.section1.question4.key, e.target.value)} rows={2} placeholder="e.g. The product is unique because ..." className="mx-4 my-2 px-3 py-4 text-lg rounded-md border" />
                    <label htmlFor={form?.section1.question5.key} className="mx-4 px-2 pt-4 font-bold">{form?.section1.question5.question}</label>
                    <textarea name={form?.section1.question5.key} value={form?.section1.question5.answer} onChange={e => updateAnswer(form?.section1.question5.key, e.target.value)} rows={2} placeholder="e.g. The biggest barriers ..." className="mx-4 my-2 px-3 py-4 text-lg rounded-md border" />
                </div>
                <div className="w-full mt-8 fade-in">
                    <hr />
                </div>
                <div className="w-full flex flex-row flex-nowrap mx-auto mt-4 mb-2 justify-between items-center fade-in">
                    <div>
                        <Link href="/form" className="md:ml-4 mx-4 text-lg font-bold text-indigo-800 hover:text-indigo-900">Previous</Link>
                    </div>
                    <div className="flex flex-row flex-nowrap justify-end items-center">
                        <button type="button" className="mr-4 py-1 px-3 rounded-md text-lg bg-indigo-700 text-white hover:bg-indigo-800">Save Draft</button>
                        <Link href="/form/execution" className="md:ml-4 mx-4 text-lg font-bold text-indigo-800 hover:text-indigo-900">Next</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}