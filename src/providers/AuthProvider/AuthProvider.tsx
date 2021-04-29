import { IAuth } from 'common/interfaces/IAuth';
import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';

const AuthContext = React.createContext<any>(null);

export const AuthProvider: React.FC = props => {
	const [authData, setAuthData] = useState<IAuth>({});
	const history = useHistory();
	const { children } = props;

	const setCurrentUser = (user: IAuth, redirectLocation?: string): void => {
		setAuthData({ ...user });
		if (redirectLocation) {
			history.push(redirectLocation);
		}
	};

	// Simple for now and just checks if there is a token present in memory or not
	const getIsAuthenticated = (): boolean => {
		return authData.currentUserIdToken !== undefined ? true : false;
	};

	return (
		<AuthContext.Provider
			value={{
				currentUserEmail: authData?.currentUserEmail,
				currentUserName: authData?.currentUserName,
				currentUserIdToken: authData?.currentUserIdToken,
				setCurrentUser,
				getIsAuthenticated
			}}
		>
			{children}
		</AuthContext.Provider>
	);
};

const useAuth = () => {
	const authHelpers: {
		currentUserEmail: string;
		currentUserName: string;
		currentUserIdToken: string;
		setCurrentUser: (user: IAuth, redirectLocation: string) => void;
		getIsAuthenticated: () => boolean;
	} = useContext(AuthContext);

	return authHelpers;
};

export { AuthContext, useAuth };
