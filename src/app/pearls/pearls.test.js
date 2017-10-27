import React from 'react';
import Pearls from './pearls';

test('Should render an H1 tag', () => {
    const pearlsComponent = shallow(
        <Pearls />
    );

    expect(pearlsComponent.exists()).toBeTruthy();

})