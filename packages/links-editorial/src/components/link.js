import React from 'react';
import { connect, useConnect } from 'frontity';
import Link from '@frontity/components/link';

const EditorialLink = ({ children, ...props }) => {
    const { state, actions } = useConnect();

    const onClick = () => {
        if (state.theme.isMenuOpen) {
            actions.theme.closeMenu();
        }
    };

    return (
        // eslint-disable-next-line react/jsx-props-no-spreading
        <Link {...props} onClick={onClick}>
            {children}
        </Link>
    );
};

export default connect(EditorialLink, { injectProps: false });
