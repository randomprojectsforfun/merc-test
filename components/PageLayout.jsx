import Head from 'next/head'
import React from 'react';
import { Header } from "./index";

export const { Provider, Consumer } = React.createContext({});

class PageLayout extends React.Component {

    constructor() {
        super();

        this.state = {
            search: '',
            sort: Header.sortOptions.ascending
        }
    }

    render() {
        const { search, sort } = this.state;

        return (
            <Provider value={{
                state: this.state,
                setState: this.setState,
                handleInputChange: (key) => (event) => {
                    this.setState({ [key]: event.target.data })
                }
            }}>
                <Head>
                    <title>Star Wars Rules</title>
                    <meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport" />
                    <link href="https://fonts.googleapis.com/css?family=Titillium+Web:200,600" rel="stylesheet" />
                    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
                          rel="stylesheet"
                          crossOrigin="anonymous"
                    />
                </Head>

                <Header />

                {this.props.children}

            </Provider>
        )
    }
}

export default PageLayout;
