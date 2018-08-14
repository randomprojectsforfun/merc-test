import React from 'react';
import check from 'check-types';
import PropTypes from 'prop-types';
import api from '../api';
import { Header, List, ListItem, Error, PageLayout } from '../components';
import merge from 'deepmerge';

const errors = {
    noPeople: 'There are no people.'
};

class Index extends React.Component {

    static async getInitialProps() {
        const people = await api.getPeople();

        if (check.not.nonEmptyArray(people.results)) {
            return {
                error: errors.noPeople
            }
        }

        // fetch all species in parallel
        const species = await Promise.all(
            people.results.map(
                (person) => api.getSpeciesByUrl(person.species[0])
            )
        );

        return {
            people: people.results.reduce((result, person, i) => ([
                    ...result,
                    merge(person, { species: species[i] })
                ]),
                []
            )
        }
    };

    constructor(props) {
        super();

        this.state = {
            error: props.error,
            filter: undefined,
            sortBy: Header.sortOptions.ascending
        }
    }

    /**
     * @param data {Array}
     */
    sort(data) {
        switch (this.state.sortBy) {
            case Header.sortOptions.descending:
                return data;

            case Header.sortOptions.ascending:
            default:
                return data;
        }
    }

    render() {
        const { error, search, sort } = this.state;
        const { people } = this.props;

        // if (check.nonEmptyString(error)) {
        //     return
        // }

        return (
            <PageLayout>
                <List>
                    {
                        this.sort(people)
                            .map((person) => (
                                <ListItem{...person} key={person.name} />
                            ))
                    }
                </List>
            </PageLayout>
        )
    }
}

Index.defaultProps = {
    people: [],
    error: undefined
};

Index.propTypes = {
    people: PropTypes.array,
    error: PropTypes.string
};

export default Index;