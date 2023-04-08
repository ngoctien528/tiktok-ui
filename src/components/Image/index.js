import { useState, forwardRef } from 'react';
import images from '~/asset/images';
import classNames from 'classnames';
import styles from './Image.module.scss';
const Image = forwardRef(({ src, alt, className, fallBack: customFallback = images.noImage, ...props }, ref) => {
    const [fallBack, setFallBack] = useState(''); //set điều kiện để tải ảnh mặc định khi bị lỗi

    const handerError = () => {
        setFallBack(customFallback);
    };

    return (
        <img
            className={classNames(styles.wrapper, className)}
            ref={ref}
            src={fallBack || src}
            alt={alt}
            {...props}
            onError={handerError}
        />
    );
});

export default Image;
