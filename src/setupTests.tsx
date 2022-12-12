import React from 'react';
import { Provider } from 'react-redux';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import configureMockStore from 'redux-mock-store';

let mockedStore: any;
beforeEach(() => {
    const mockStore = configureMockStore();
    mockedStore = mockStore();
});

interface WrapperProps {
    children?: React.ReactNode;
}

const AllTheProviders = ({ children }: WrapperProps) => {
    return <Provider store={mockedStore} >{ children }</Provider>;
};

const customRender = (ui: any, options?: any) => render(ui, { wrapper: AllTheProviders, ...options });

// re-export everything
export * from '@testing-library/react';

// override render method
export { customRender as render };
