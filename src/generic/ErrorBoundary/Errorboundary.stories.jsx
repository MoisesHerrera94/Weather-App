import React from "react";
import ErrorBoundary from "./ErrorBoundary";

export default{
    title: "ErrorBoundary",
    component: ErrorBoundary
}

const ComponentWithoutError = () => <h1>Sin Error</h1>

const props = undefined

const ComponentWithError = () => <h1>{props.hola}</h1>

export const ErrorBoundaryWithError = () => (
    <ErrorBoundary>
        <ComponentWithError/>
    </ErrorBoundary>
)

export const ErrorBoundaryWithoutError = () => (
    <ErrorBoundary>
        <ComponentWithoutError/>   
    </ErrorBoundary>
)