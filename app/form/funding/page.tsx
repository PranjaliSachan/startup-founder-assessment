import Link from "next/link";

export default function Funding() {
    return (
        <div className="w-full">
            <div className="w-[50vw] mx-auto px-12 py-12 flex flex-col flex-nowrap bg-gray-100">
                <div className="w-full flex flex-col flex-nowrap mx-4 mt-8 mb-2 fade-in">
                    <h2 className="text-2xl font-bold text-cyan-900">Funding & Future</h2>
                    <p className="text-xl mt-2 text-cyan-800">Fantastic! Now let's talk about some financial aspects of your startup!</p>
                </div>
                <div className="w-full flex flex-col flex-nowrap mx-auto my-2 fade-in">
                    <label htmlFor="section1a" className="mx-4 px-2 pt-4 font-bold text-cyan-900">How much funding are you seeking? How will you use the investment? (Funding needs, capital allocation plan)</label>
                    <textarea name="section1a" rows={2} placeholder="e.g. I have ..." className="mx-4 my-2 px-3 py-4 text-lg text-cyan-800 rounded-md border border-cyan-600" />
                    <label htmlFor="section1b" className="mx-4 px-2 pt-4 font-bold text-cyan-900">What are your long-term goals for the company? (Vision, ambition, sustainability)</label>
                    <textarea name="section1b" rows={2} placeholder="e.g. I have ..." className="mx-4 my-2 px-3 py-4 text-lg text-cyan-800 rounded-md border border-cyan-600" />
                    <label htmlFor="section1c" className="mx-4 px-2 pt-4 font-bold text-cyan-900">What is your exit strategy or potential acquisition plan? (Long-term business trajectory)</label>
                    <textarea name="section1c" rows={2} placeholder="e.g. I have ..." className="mx-4 my-2 px-3 py-4 text-lg text-cyan-800 rounded-md border border-cyan-600" />
                    <label htmlFor="section1d" className="mx-4 px-2 pt-4 font-bold text-cyan-900">What are your biggest concerns about the future of the company? (Risk assessment, contingency planning)</label>
                    <textarea name="section1d" rows={2} placeholder="e.g. I have ..." className="mx-4 my-2 px-3 py-4 text-lg text-cyan-800 rounded-md border border-cyan-600" />
                    <label htmlFor="section1e" className="mx-4 px-2 pt-4 font-bold text-cyan-900">What is your timeline for achieving your next milestone (e.g., product launch, revenue targets)?</label>
                    <textarea name="section1e" rows={2} placeholder="e.g. I have ..." className="mx-4 my-2 px-3 py-4 text-lg text-cyan-800 rounded-md border border-cyan-600" />
                </div>
                <div className="w-full mt-8 fade-in">
                    <hr />
                </div>
                <div className="w-full flex flex-row flex-nowrap mx-auto mt-4 mb-2 justify-between items-center fade-in">
                    <div>
                        <Link href="/form/business-model" className="text-lg font-bold text-cyan-800 hover:text-cyan-950">Previous</Link>
                    </div>
                    <div className="flex flex-row flex-nowrap justify-end items-center">
                        <button type="button" className="mr-4 py-2 px-4 rounded-md text-lg tracking-wider bg-cyan-700 text-white hover:bg-cyan-800">Save Draft</button>
                        <Link href="/form/culture" className="ml-4 text-lg font-bold text-cyan-800 hover:text-cyan-950">Next</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}