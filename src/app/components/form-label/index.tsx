import React from "react";

const FormLabel = (props: { children: React.ReactElement | string; }) => {
    const { children } = props;
    
    return (
        <div className="alimama" style={{ color: '#8B9CFA', fontSize: '20px', marginBottom: '40px' }}>
            {children}
        </div>
    );
};

export default FormLabel;
