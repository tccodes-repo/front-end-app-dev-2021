import React from 'react';
import { IComponentWithTitleProps } from 'common/interfaces/IComponentTitles';

interface IHeaderProps extends IComponentWithTitleProps {
	className?: string;
}

export const Header: React.FC<IHeaderProps> = props => {
	const { title, headingLevel, className } = props;
	switch (headingLevel) {
		case 'h1':
			return <h1 className={className}>{title}</h1>;
		case 'h2':
			return <h2 className={className}>{title}</h2>;
		case 'h3':
			return <h3 className={className}>{title}</h3>;
		case 'h4':
			return <h4 className={className}>{title}</h4>;
		case 'h5':
			return <h5 className={className}>{title}</h5>;
		case 'h6':
			return <h6 className={className}>{title}</h6>;
		default:
			return <h1 className={className}>{title}</h1>;
	}
};
