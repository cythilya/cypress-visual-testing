import React from 'react';
import App from '../App';

export default {
    title: 'Example/App',
    component: App,
};

const Template = (args) => <App {...args} />;

export const LargeCat = Template.bind({});
LargeCat.args = {
    width: '300',
};

export const SmallCat = Template.bind({});
SmallCat.args = {
    width: '100',
};
