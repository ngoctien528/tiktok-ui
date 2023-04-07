import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';

import { Wrapper as PropperWrapper } from '~/components/Popper';
import styles from './Menu.module.scss';
import MenuItem from './MenuItem';
import Header from './Header';
import { useState } from 'react';

const cx = classNames.bind(styles);

const defaultFn = () => {};
function Menu({ children, items = [], onChange = defaultFn }) {
    const [history, setHistory] = useState([{ data: items }]);
    const current = history[history.length - 1];
    // console.log(current);
    // console.log(history);

    const renderItems = () => {
        return current.data.map((item, index) => {
            const isParent = !!item.children;
            return (
                <MenuItem
                    key={index}
                    data={item}
                    onClick={() => {
                        if (isParent) {
                            setHistory((pre) => [...pre, item.children]);
                        } else {
                            onChange(item);
                        }
                    }}
                />
            );
        });
    };
    const onBack = () => {
        setHistory((pre) => pre.slice(0, pre.length - 1));
    };
    return (
        <Tippy
            interactive
            offset={[10, 10]} // làm lệch qua bên phải
            // visible
            delay={[0, 500]} //hiện thì 0ms, ẩn thì 500ms
            placement="bottom-end"
            render={(attrs) => (
                <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
                    <PropperWrapper className={cx('menu-popper')}>
                        {history.length > 1 && <Header title={current.title} onBack={onBack} />}
                        {renderItems()}
                    </PropperWrapper>
                </div>
            )}
            onHide={() => setHistory((pre) => pre.slice(0, 1))} //khi menu ẩn, thì quay lại level đầu
        >
            {children}
        </Tippy>
    );
}

export default Menu;
