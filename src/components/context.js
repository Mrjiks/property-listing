import React, { useContext } from 'react';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
	const [showMenu, setMenu] = React.useState(false);
	const [customClass, setClass] = React.useState('');
	const addClass = () => {
		setClass(`no-scroll`);
	};
	const toggleMenu = () => {
		addClass();
		setMenu(!showMenu);
	};

	return (
		<AppContext.Provider
			value={{
				showMenu,
				toggleMenu,
				customClass,
			}}
		>
			{children}
		</AppContext.Provider>
	);
};
// custom hook for using the created contextAPI
export const useGlobalContext = () => {
	return useContext(AppContext);
};

export { AppProvider };
