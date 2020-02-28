import React from 'react';
import './style.css';

const PageContentWrapper = props => {
    const containerClasses = ['pageContentContainer'];
    if (props.extraPadding === true) {
        containerClasses.push('extraPaddingTop');
    }
    const styles = {
        importedColor: {
            backgroundColor: props.backgroundColor,
            color: props.textColor
        }
    };
    return (
        <div className={containerClasses.join(' ')} style={styles.importedColor}>
            {props.children}
        </div>
    )
};

export default PageContentWrapper;