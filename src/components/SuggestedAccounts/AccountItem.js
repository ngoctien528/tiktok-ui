import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tippy from '@tippyjs/react/headless';

import { Wrapper as PropperWrapper } from '~/components/Popper';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './SuggestedAccounts.module.scss';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import AccountPreview from './AccountPreview';

const cx = classNames.bind(styles);
function AccountItem() {
    const renderPreview = (props) => (
        <div className={cx('menu-list')} tabIndex="-1" {...props}>
            <PropperWrapper className={cx('menu-popper')}>
                <AccountPreview />
            </PropperWrapper>
        </div>
    );
    return (
        <div>
            <Tippy
                // hideOnClick={hideOnClick} //ko tắt menu đi khi click
                interactive
                offset={[-15, 0]} // làm lệch qua bên phải
                // visible
                delay={[500, 0]} //hiện thì 0ms, ẩn thì 500ms
                placement="bottom"
                render={renderPreview}
                // onHide={handleResetMenu} //khi menu ẩn, thì quay lại level đầu
            >
                <div className={cx('account-item')}>
                    <img
                        className={cx('avatar')}
                        src="https://scontent.fhan3-5.fna.fbcdn.net/v/t31.18172-1/13719543_1341614622521313_2612701191933607335_o.jpg?stp=dst-jpg_p100x100&_nc_cat=110&ccb=1-7&_nc_sid=7206a8&_nc_ohc=cKzdR6wMaZwAX9g4bVi&_nc_ht=scontent.fhan3-5.fna&oh=00_AfBxmyDY6obs9WliNrqxBCHK3_TyMJ01xGQZNwAG5m-biQ&oe=6465DC83"
                        alt="test"
                    ></img>
                    <div className={cx('item-info')}>
                        <p className={cx('nickname')}>
                            <strong>NguyenNgocTien</strong>
                            <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                        </p>
                        <p className={cx('name')}>Nguyễn Ngọc Tiến</p>
                    </div>
                </div>
            </Tippy>
        </div>
    );
}

AccountItem.propTypes = {};
export default AccountItem;
