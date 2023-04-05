import Tippy from '@tippyjs/react/headless';
import { Wrapper as PropperWrapper } from '~/components/Popper';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import MenuItem from './MenuItem';
const cx = classNames.bind(styles);
function Menu({ children, items = [] }) {
    const renderItems = () => {
        return items.map((item, index) => <MenuItem key={index} data={item} />);
    };

    return (
        <Tippy
            interactive
            // visible
            delay={[0, 500]} //hiện thì 0ms, ẩn thì 500ms
            placement="bottom-end"
            render={(attrs) => (
                <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
                    <PropperWrapper className={cx('menu-popper')}>{renderItems()}</PropperWrapper>
                </div>
            )}
        >
            {children}
        </Tippy>
    );
}

export default Menu;