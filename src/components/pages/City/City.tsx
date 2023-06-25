import React, { ReactElement } from 'react';
import styles from './City.module.scss';
import Layout from '../../Layout/Layout';
import CustomGallery from '../../ui-elements/Gallery/Gallery';
import { images } from './models/CityModels';

const City = (): ReactElement => {
	return (
		<Layout
			content={
				<div className={styles.wrapper}>
					<CustomGallery id="gallery-city" heading="City" images={images} />
				</div>
			}
		/>
	);
};

export default City;
