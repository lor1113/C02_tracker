import App from '../App';
import React from 'react';
import {render, fireEvent} from '@testing-library/react';

describe("App", ()=>{
    let container;

    beforeEach(()=>{
        container = render(<App/>)
    });

    it('Testing suite works', ()=>{
        expect(1).toEqual(1)
    })
})