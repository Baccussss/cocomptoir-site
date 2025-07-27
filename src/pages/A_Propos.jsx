import React from 'react';
import MissionSection from '../components/A_Propos/MissionSection';
import PresentationSection from '../components/A_Propos/PresentationSection';
import PrecariteSection from '../components/A_Propos/PrecariteSection';
import BureauSection from '../components/A_Propos/BureauSection';

export default function A_Propos() {
    return (
        <>
            <MissionSection />
            <PresentationSection />
            <PrecariteSection />
            <BureauSection />
        </>
    );
}