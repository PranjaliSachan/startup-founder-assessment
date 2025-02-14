import Link from "next/link";

export default function Additional() {
    return (
        <div className="w-full">
            <div className="w-[50vw] mx-auto px-12 py-12 flex flex-col flex-nowrap bg-gray-100">
                <div className="w-full flex flex-col flex-nowrap mx-4 mt-8 mb-2 fade-in">
                    <h2 className="text-2xl font-bold text-cyan-900">Additional Questions</h2>
                    <p className="text-xl mt-2 text-cyan-800">Just one last step! Let’s explore your upcoming milestones, customer strategies, fundraising experiences, and leadership lessons!</p>
                </div>
                <div className="w-full flex flex-col flex-nowrap mx-auto my-2 fade-in">
                    <label htmlFor="section1a" className="mx-4 px-2 pt-4 font-bold text-cyan-900">What are the key milestones you need to hit in the next 6-12 months?</label>
                    <textarea name="section1a" rows={2} placeholder="e.g. I have ..." className="mx-4 my-2 px-3 py-4 text-lg text-cyan-800 rounded-md border border-cyan-600" />
                    <label htmlFor="section1b" className="mx-4 px-2 pt-4 font-bold text-cyan-900">How do you plan to acquire and retain customers? What strategies have you found most effective so far?</label>
                    <textarea name="section1b" rows={2} placeholder="e.g. I have ..." className="mx-4 my-2 px-3 py-4 text-lg text-cyan-800 rounded-md border border-cyan-600" />
                    <label htmlFor="section1c" className="mx-4 px-2 pt-4 font-bold text-cyan-900">What specific challenges have you faced in fundraising and how have you addressed them?</label>
                    <textarea name="section1c" rows={2} placeholder="e.g. I have ..." className="mx-4 my-2 px-3 py-4 text-lg text-cyan-800 rounded-md border border-cyan-600" />
                    <label htmlFor="section1d" className="mx-4 px-2 pt-4 font-bold text-cyan-900">What lessons have you learned from other startup founders or mentors that have shaped your approach to leadership?</label>
                    <textarea name="section1d" rows={2} placeholder="e.g. I have ..." className="mx-4 my-2 px-3 py-4 text-lg text-cyan-800 rounded-md border border-cyan-600" />
                </div>
                <div className="w-full mt-8 fade-in">
                    <hr />
                </div>
                <div className="w-full flex flex-row flex-nowrap mx-auto mt-4 mb-2 justify-between items-center fade-in">
                    <div>
                        <Link href="/form/culture" className="ml-4 text-lg font-bold text-cyan-800 hover:text-cyan-950">Previous</Link>
                    </div>
                    <div className="flex flex-row flex-nowrap justify-end items-center">
                        <button type="button" className="mr-2 py-2 px-4 rounded-md text-lg tracking-wider bg-cyan-700 text-white hover:bg-cyan-800">Save Draft</button>
                        <button type="button" className="ml-2 py-2 px-4 rounded-md text-lg tracking-wider bg-cyan-700 text-white hover:bg-cyan-800">Submit</button>
                    </div>
                </div>
            </div>
        </div>
    );
}