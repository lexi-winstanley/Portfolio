import React from 'react';
import './style.css';

const PageContentWrapper = props => {
    const styles = {
        importedColor: {
            backgroundColor: props.backgroundColor,
            color: props.textColor
        }
    };
    return (
        <div className="pageContentContainer" style={styles.importedColor}>
            {props.children}
        </div>
    )
};

export default PageContentWrapper;