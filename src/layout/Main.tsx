import React from 'react';
import { Hero } from './hero/Hero';
import { Skills } from './skills/Skills';
import { Projects } from './projects/Projects';
import { Mail } from './mail/Mail';


export const Main = () => {
    return (
        <div>
            <Hero />
            <Skills />
            <Projects />
            <Mail />
        </div>
    );
};
