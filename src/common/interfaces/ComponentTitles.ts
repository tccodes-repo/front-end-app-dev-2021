type headingLevel = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

export interface ComponentWithOptionalTitleProps {
	title?: string;
	headingLevel?: headingLevel;
}

export interface ComponentWithTitleProps {
	title: string;
	headingLevel: headingLevel;
}
