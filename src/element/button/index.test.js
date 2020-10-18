import React from 'react'
import { render } from '@testing-library/react'
import Button from './index'
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'


test("Disabled Button", () => {
    const {container} = render(<Button isDisable></Button>)

    expect(container.querySelector("span.disabled")).toBeInTheDocument();
});

test("Spinner", () => {
    const {container, getByText} = render(<Button isLoading></Button>)

    expect(getByText(/Loading/i)).toBeInTheDocument();
    expect(container.querySelector("span")).toBeInTheDocument();
});


test("External", () => {
    const {container} = render(<Button type="link" isExternal></Button>)

    expect(container.querySelector("a")).toBeInTheDocument();
});

test("Link", () => {
    const {container} = render(<Router><Button href="" type="link"></Button></Router>)

    expect(container.querySelector("a")).toBeInTheDocument();
});