"use client";
import { useFormContext } from "@/app/formContext";

export default function Submit() {
    const [form] = useFormContext();
    console.log(form);

    return (
        <div className="w-full">
            <div className="lg:w-[75vw] md:mx-auto mt-24 sm:px-8 flex flex-col flex-nowrap rounded fade-in-up">
                <div className="w-full mx-3 mt-12 pt-12 pb-4 flex flex-row sm:justify-start md:justify-center items-center">
                    <p className="text-4xl text-white fade-in-up">
                        <span className="mr-4 px-4 py-1 rounded-[50%] bg-indigo-400">&#x2714;</span>
                        Assessment Submitted Successfully!
                    </p>
                </div>
            </div>
        </div>
    );
}