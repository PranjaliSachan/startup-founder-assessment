"use client"; // This is a client component
import { useFormContext } from "@/app/formContext";
import Link from "next/link";

export default function BusinessModel() {
    const [form, updateform] = useFormContext();

    const updateAnswer = (key: string, value: string) => {
        if (key === form.section3.question1.key) {
            form.section3.question1.answer = value;
        } else if (key === form?.section3.question2.key) {
            form.section3.question2.answer = value;
        } else if (key === form?.section3.question3.key) {
            form.section3.question3.answer = value;
        } else if (key === form?.section3.question4.key) {
            form.section3.question4.answer = value;
        } else if (key === form?.section3.question5.key) {
            form.section3.question5.answer = value;
        } else {
            console.log('Invalid Key');
        }

        updateform(form);
    }

    return (
        <div className="w-full">
            <div className="w-[50vw] mx-auto px-12 py-12 flex flex-col flex-nowrap bg-gray-100">
                <div className="w-full flex flex-col flex-nowrap mx-4 mt-8 mb-2 fade-in">
                    <h2 className="text-2xl font-bold text-cyan-900">{form?.section3.title}</h2>
                    <p className="text-xl mt-2 text-cyan-800">Awesome! Now let’s explore your business model, traction, and growth strategy!</p>
                </div>
                <div className="w-full flex flex-col flex-nowrap mx-auto my-2 fade-in">
                    <label htmlFor={form?.section3.question1.key} className="mx-4 px-2 pt-4 font-bold text-cyan-900">{form?.section3.question1.question}</label>
                    <textarea name={form?.section3.question1.key} value={form?.section3.question1.answer} onChange={e => updateAnswer(form?.section3.question1.key, e.target.value)} rows={2} placeholder="e.g. The product ..." className="mx-4 my-2 px-3 py-4 text-lg text-cyan-800 rounded-md border border-cyan-600" />
                    <label htmlFor={form?.section3.question2.key} className="mx-4 px-2 pt-4 font-bold text-cyan-900">{form?.section3.question2.question}</label>
                    <textarea name={form?.section3.question2.key} value={form?.section3.question2.answer} onChange={e => updateAnswer(form?.section3.question2.key, e.target.value)} rows={2} placeholder="e.g. An Ideal customer ..." className="mx-4 my-2 px-3 py-4 text-lg text-cyan-800 rounded-md border border-cyan-600" />
                    <label htmlFor={form?.section3.question3.key} className="mx-4 px-2 pt-4 font-bold text-cyan-900">{form?.section3.question3.question}</label>
                    <textarea name={form?.section3.question3.key} value={form?.section3.question3.answer} onChange={e => updateAnswer(form?.section3.question3.key, e.target.value)} rows={2} placeholder="e.g. The market ..." className="mx-4 my-2 px-3 py-4 text-lg text-cyan-800 rounded-md border border-cyan-600" />
                    <label htmlFor={form?.section3.question4.key} className="mx-4 px-2 pt-4 font-bold text-cyan-900">{form?.section3.question4.question}</label>
                    <textarea name={form?.section3.question4.key} value={form?.section3.question4.answer} onChange={e => updateAnswer(form?.section3.question4.key, e.target.value)} rows={2} placeholder="e.g. The product is unique because ..." className="mx-4 my-2 px-3 py-4 text-lg text-cyan-800 rounded-md border border-cyan-600" />
                    <label htmlFor={form?.section3.question5.key} className="mx-4 px-2 pt-4 font-bold text-cyan-900">{form?.section3.question5.question}</label>
                    <textarea name={form?.section3.question5.key} value={form?.section3.question5.answer} onChange={e => updateAnswer(form?.section3.question5.key, e.target.value)} rows={2} placeholder="e.g. The biggest barriers ..." className="mx-4 my-2 px-3 py-4 text-lg text-cyan-800 rounded-md border border-cyan-600" />
                </div>
                <div className="w-full mt-8 fade-in">
                    <hr />
                </div>
                <div className="w-full flex flex-row flex-nowrap mx-auto mt-4 mb-2 justify-between items-center fade-in">
                    <div>
                        <Link href="/form/execution" className="text-lg font-bold text-cyan-800 hover:text-cyan-950">Previous</Link>
                    </div>
                    <div className="flex flex-row flex-nowrap justify-end items-center">
                        <button type="button" className="mr-4 py-2 px-4 rounded-md text-lg tracking-wider bg-cyan-700 text-white hover:bg-cyan-800">Save Draft</button>
                        <Link href="/form/funding" className="ml-4 text-lg font-bold text-cyan-800 hover:text-cyan-950">Next</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}