import React, { ReactElement } from 'react';
import styles from './Header.module.scss';
import Logotype from '../Logotype/Logotype';
import Menu from '../Menu/Menu';

const Header = (): ReactElement => {
	return (
		<header className={styles.header}>
			<Logotype />
			<Menu />
		</header>
	);
};

export default Header;
