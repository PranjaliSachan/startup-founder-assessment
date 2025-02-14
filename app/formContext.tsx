"use client"; // This is a client component
import React, { createContext, useState, useContext } from 'react';

export type ISectionQuestion = {
    key: string;
    question: string;
    answer: string | undefined;
}

export type ISection = {
    title: string;
    questions: ISectionQuestion[];
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
    sections: ISection[] | undefined;
}

const formDefaults: IForm = {
    fullName: undefined,
    emailAddress: undefined,
    phoneNumber: undefined,
    startupName: undefined,
    founderRole: undefined,
    yearsOfExperience: undefined,
    linkedInProfile: undefined,
    shortBio: undefined,
    location: undefined,
    sections: [
        {
            title: 'The Core Idea & Problem',
            questions: [
                {
                    key: 'section1a',
                    question: 'What specific problem does your product/service solve? (Deep dive into the customer pain point)',
                    answer: undefined
                },
                {
                    key: 'section1b',
                    question: 'Who is your ideal customer? Be as specific as possible. (Demographics, psychographics, needs)',
                    answer: undefined
                },
                {
                    key: 'section1c',
                    question: 'How big is the market opportunity? How will you reach these customers? (Market size, go-to-market strategy)',
                    answer: undefined
                },
                {
                    key: 'section1d',
                    question: 'What makes your product or service unique in the market?',
                    answer: undefined
                },
                {
                    key: 'section1e',
                    question: 'What are the biggest barriers to entry in your market, and how do you plan to overcome them?',
                    answer: undefined
                }
            ]
        }
    ]
};

type IFormContext = [IForm, React.Dispatch<React.SetStateAction<IForm>>];

const FormContext = createContext<IFormContext>([formDefaults, () => null]);

export const FormProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [form, setForm] = useState<IForm>(formDefaults);

    const updateForm = (newData: any) => {
        setForm(prevData => ({ ...prevData, ...newData }));
    };

    return (
        <FormContext.Provider value={[form, updateForm]}>
            {children}
        </FormContext.Provider>
    );
}

export function useFormContext() {
    return useContext(FormContext);
}
