import React, { Component } from 'react'
import Pager from './Pager'

export default class PagerTest extends Component {
    state = {
        current: 1,
        total: 100,
        limit: 10,
        pannerNumber: 5
    }

    changePageHandle = (newpage: number) => {
        this.setState({
            ...this.state,
            current: newpage
        })
    }

    render() {
        return (
        <div>
            <Pager {...this.state} onPageChange={this.changePageHandle} />
        </div>
        )
    }
}
