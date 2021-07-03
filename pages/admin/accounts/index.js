import React from 'react';
import PageHeaderComponent from "../../../src/components/AdminComponents/PageHeaderComponent";

const Index = () => {
    return (
        <>
            <PageHeaderComponent
                title={'All Accounts'}
                addButtonText={'Create Account'}

            />
        </>
    );
};

export default Index;

// Index.Layout = null;
Index.title = 'All Accounts'