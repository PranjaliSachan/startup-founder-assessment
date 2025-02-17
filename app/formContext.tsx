"use client"; // This is a client component
import React, { createContext, useState, useContext, useEffect } from 'react';

export type ISectionQuestion = {
    key: string;
    question: string;
    answer: string | undefined;
}

export type ISection = {
    title: string;
    question1: ISectionQuestion;
    question2: ISectionQuestion;
    question3: ISectionQuestion;
    question4: ISectionQuestion;
    question5: ISectionQuestion;
}

export type IForm = {
    fullName: string | undefined;
    emailAddress: string | undefined;
    phoneNumber: string | undefined;
    startupName: string | undefined;
    founderRole: string | undefined;
    yearsOfExperience: number | undefined;
    linkedInProfile: string | undefined;
    shortBio: string | undefined;
    location: string | undefined;
    section1: ISection;
    section2: ISection;
    section3: ISection;
    section4: ISection;
    section5: ISection;
    additional: ISection;
}

const formDefaults: IForm = {
    fullName: '',
    emailAddress: '',
    phoneNumber: '',
    startupName: '',
    founderRole: '',
    yearsOfExperience: 0,
    linkedInProfile: '',
    shortBio: '',
    location: '',
    section1: {
        title: 'The Core Idea & Problem',
        question1: {
            key: 'section1a',
            question: 'What specific problem does your product/service solve? (Deep dive into the customer pain point)',
            answer: ''
        },
        question2: {
            key: 'section1b',
            question: 'Who is your ideal customer? Be as specific as possible. (Demographics, psychographics, needs)',
            answer: ''
        },
        question3: {
            key: 'section1c',
            question: 'How big is the market opportunity? How will you reach these customers? (Market size, go-to-market strategy)',
            answer: ''
        },
        question4: {
            key: 'section1d',
            question: 'What makes your product or service unique in the market?',
            answer: ''
        },
        question5: {
            key: 'section1e',
            question: 'What are the biggest barriers to entry in your market, and how do you plan to overcome them?',
            answer: ''
        }
    },
    section2: {
        title: 'The Team & Execution',
        question1: {
            key: 'section2a',
            question: 'What are your key competitive advantages? What makes you unique? (Differentiation, unique selling proposition)',
            answer: ''
        },
        question2: {
            key: 'section2b',
            question: 'Tell me about your team. What are their strengths and experience? (Team composition, skills, experience)',
            answer: ''
        },
        question3: {
            key: 'section2c',
            question: 'What roles are you currently looking to fill on your team, and why? (Talent needs, hiring plans)',
            answer: ''
        },
        question4: {
            key: 'section2d',
            question: 'What are your biggest challenges right now? How are you overcoming them? (Problem-solving, resilience)',
            answer: ''
        },
        question5: {
            key: 'section2e',
            question: 'What have you learned from previous failures or mistakes that you are applying to your current venture?',
            answer: ''
        },
    },
    section3: {
        title: 'Business Model & Traction',
        question1: {
            key: 'section3a',
            question: 'How do you make money? What is your revenue model? (Pricing, revenue streams, unit economics)',
            answer: ''
        },
        question2: {
            key: 'section3b',
            question: 'What traction have you achieved so far? (e.g., users, revenue, partnerships) (Metrics, milestones, validation)',
            answer: ''
        },
        question3: {
            key: 'section3c',
            question: 'What are your key performance indicators (KPIs) and how are you tracking them? (Measurement, datadriven decisions)',
            answer: ''
        },
        question4: {
            key: 'section3d',
            question: 'What is the most important feedback you’ve received from customers or users?',
            answer: ''
        },
        question5: {
            key: 'section3e',
            question: 'How do you plan to scale your business? What’s your go-to-market strategy for growth?',
            answer: ''
        }
    },
    section4: {
        title: 'Funding & Future',
        question1: {
            key: 'section4a',
            question: 'How much funding are you seeking? How will you use the investment? (Funding needs, capital allocation plan)',
            answer: ''
        },
        question2: {
            key: 'section4b',
            question: 'What are your long-term goals for the company? (Vision, ambition, sustainability)',
            answer: ''
        },
        question3: {
            key: 'section4c',
            question: 'What is your exit strategy or potential acquisition plan? (Long-term business trajectory)',
            answer: ''
        },
        question4: {
            key: 'section4d',
            question: 'What are your biggest concerns about the future of the company? (Risk assessment, contingency planning)',
            answer: ''
        },
        question5: {
            key: 'section4e',
            question: 'What is your timeline for achieving your next milestone (e.g., product launch, revenue targets)?',
            answer: ''
        }
    },
    section5: {
        title: 'Cultural Fit & Personal',
        question1: {
            key: 'section5a',
            question: 'Why are you passionate about this particular problem/solution? (Motivation, drive, purpose)',
            answer: ''
        },
        question2: {
            key: 'section5b',
            question: 'What are your personal and professional goals? (Alignment, long-term vision)',
            answer: ''
        },
        question3: {
            key: 'section5c',
            question: 'How do you handle stress and setbacks? (Resilience, adaptability)',
            answer: ''
        },
        question4: {
            key: 'section5d',
            question: 'How do you prioritize tasks and manage your time, especially in the early stages of a startup?',
            answer: ''
        },
        question5: {
            key: 'section5e',
            question: 'How do you keep your team motivated during tough times?',
            answer: ''
        }
    },
    additional: {
        title: 'Additional Questions',
        question1: {
            key: 'additionala',
            question: 'What are the key milestones you need to hit in the next 6-12 months?',
            answer: ''
        },
        question2: {
            key: 'additionalb',
            question: 'How do you plan to acquire and retain customers? What strategies have you found most effective so far?',
            answer: ''
        },
        question3: {
            key: 'additionalc',
            question: 'What specific challenges have you faced in fundraising and how have you addressed them?',
            answer: ''
        },
        question4: {
            key: 'additionald',
            question: 'What lessons have you learned from other startup founders or mentors that have shaped your approach to leadership?',
            answer: ''
        },
        question5: {} as ISectionQuestion

    }
};

type IFormContext = [IForm, React.Dispatch<React.SetStateAction<IForm>>, any];

const FormContext = createContext<IFormContext>([formDefaults, () => null, () => null]);

export const FormProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [form, setForm] = useState<IForm>(formDefaults);

    const updateForm = (newData: any) => {
        setForm(prevData => ({ ...prevData, ...newData }));
    };

    const saveDraft = () => {
        if (localStorage.getItem('assessmentForm')) {
            localStorage.removeItem('assessmentForm');
        }
        localStorage.setItem('assessmentForm', JSON.stringify(form));
    };

    useEffect(() => {
        const localForm = localStorage.getItem('assessmentForm');
        if (localForm) {
            updateForm(JSON.parse(localForm));
        }
    }, []);

    return (
        <FormContext.Provider value={[form, updateForm, saveDraft]}>
            {children}
        </FormContext.Provider>
    );
}

export function useFormContext() {
    return useContext(FormContext);
}
