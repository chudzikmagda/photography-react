/* eslint-disable indent */
import React, { useEffect, useState } from 'react';
import styles from './Image.module.scss';

import { Breakpoints } from '../../../shared/models/models';
import { ImageProps } from '../Lightbox/models/LightboxModels';

const ImageComponent: React.FC<ImageProps> = ({ src, alt, onClick }) => {
	const [imageSrc, setImageSrc] = useState(src.lowQuality);

	const setImageSrcBasedOnWindowSize = (): void => {
		const windowWidth: number = window.innerWidth;

		switch (true) {
			case windowWidth <= Breakpoints.SMALL:
				return setImageSrc(src.w480);
			case windowWidth <= Breakpoints.MEDIUM:
				return setImageSrc(src.w768);
			case windowWidth <= Breakpoints.LARGE:
				return setImageSrc(src.w1024);
			default:
				return setImageSrc(src.fullsize);
		}
	};

	const handleWindowResize = (): void => {
		setImageSrcBasedOnWindowSize();
	};

	useEffect(() => {
		setImageSrcBasedOnWindowSize();
		window.addEventListener('resize', handleWindowResize);

		return () => {
			window.removeEventListener('resize', handleWindowResize);
		};
	}, [src]);

	useEffect(() => {
		const img: HTMLImageElement = new Image();
		img.src = imageSrc ?? src.fullsize;
		img.onload = () => {
			setImageSrc(imageSrc);
		};
	}, [imageSrc, src]);

	return (
		<img
			src={imageSrc}
			onClick={onClick}
			className={`${styles.image} ${imageSrc === src.lowQuality ? styles['image__loading'] : styles['image__loaded']}`}
			loading="lazy"
			alt={alt || ''}
		/>
	);
};

export default ImageComponent;
