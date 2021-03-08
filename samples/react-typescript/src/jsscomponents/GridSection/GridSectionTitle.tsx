import * as React from 'react';
import Heading from '../../components/Heading';
import { HeadingLevel } from '../../components/HeadingLevel';

interface Props {
    title: string;
    headingLevel?: HeadingLevel;
    parameters?: {
        className?: string,
        backgroundColor?: string,
    };
}

const SectionTitle: React.StatelessComponent<Props> = ({ title, headingLevel }) => {

    return (
        <div className="m-section__title--container">
            <Heading level={headingLevel} className="m-section__title--heading">
                {title}
            </Heading>
        </div>
    );
};

export default SectionTitle;
