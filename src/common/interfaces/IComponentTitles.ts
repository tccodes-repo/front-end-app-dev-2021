type THeadingLevel = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

export interface IComponentWithOptionalTitleProps {
	title?: string;
	headingLevel?: THeadingLevel;
}

export interface IComponentWithTitleProps {
	title: string;
	headingLevel: THeadingLevel;
}
