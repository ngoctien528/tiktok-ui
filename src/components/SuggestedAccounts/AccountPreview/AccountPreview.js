import classNames from 'classnames/bind';
import styles from './AccountPreview.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import Button from '~/components/Button/Button';

const cx = classNames.bind(styles);
function AccountPreview() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <img
                    className={cx('avatar')}
                    src="https://scontent.fhan3-5.fna.fbcdn.net/v/t31.18172-1/13719543_1341614622521313_2612701191933607335_o.jpg?stp=dst-jpg_p100x100&_nc_cat=110&ccb=1-7&_nc_sid=7206a8&_nc_ohc=cKzdR6wMaZwAX9g4bVi&_nc_ht=scontent.fhan3-5.fna&oh=00_AfBxmyDY6obs9WliNrqxBCHK3_TyMJ01xGQZNwAG5m-biQ&oe=6465DC83"
                    alt=""
                />
                <Button classNamee={cx('follow')} primary>
                    Follow
                </Button>
            </div>
            <div className={cx('body')}>
                <p className={cx('nickname')}>
                    <strong>NguyenNgocTien</strong>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </p>
                <p className={cx('name')}>Nguyễn Ngọc Tiến</p>
                <p className={cx('analytics')}>
                    <strong className={cx('value')}>8.2M </strong>
                    <span className={cx('label')}>Followers </span>
                    <strong className={cx('value')}>8.2M </strong>
                    <span className={cx('label')}>Followers </span>
                </p>
            </div>
        </div>
    );
}

export default AccountPreview;
