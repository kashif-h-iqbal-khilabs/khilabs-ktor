import React from 'react'
import { connect } from 'react-redux'
import { ApplicationState } from '../store/configureStore';
import { Redirect, RouteComponentProps } from '@reach/router'

interface IPropsType {
    isAuthenticated: boolean
    Component: React.ElementType
    path: string
}

interface IPropsType extends RouteComponentProps { }

function privateRouteBase(props: IPropsType) {
    const { isAuthenticated, path, Component } = props;

    if (!isAuthenticated) {
        return <Redirect noThrow from={path} to="/" />
    }

    return <Component path={path} />
}

const mapStateToProps = (state: ApplicationState) => ({
    isAuthenticated: state.authentication.isAuthenticated
})

export const PrivateRoute = connect(
    mapStateToProps,
)(privateRouteBase)