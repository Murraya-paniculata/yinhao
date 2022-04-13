import React, { Component } from 'react';
import Pager from '../../components/pagination/Pager';
import { fetchStudents } from '../../components/student/getData';
import Students from '../../components/student/Students';


export default class index extends Component {
    state = {
        current: 1,
        total: 0,
        limit: 10,
        pannerNumber: 5,
        students: [],
        isLoading: false
    }

    constructor(props: any) {
        super(props);
        this.getStudentsData();
    }

    changePageHandle = (newpage: number) => {
        this.setState({
            ...this.state,
            current: newpage
        }, () => {
            this.getStudentsData()
        })
    }

    async getStudentsData () {
        this.setState({
            isLoading: true
        })
        const res = await fetchStudents({
            current: this.state.current,
            limit: this.state.limit
        })
        this.setState({
            ...this.state,
            total: res.cont,
            students: res.findByPage,
            isLoading: false
        })
    }

    render() {
        return (
        <div>
            <Students students={this.state.students} />
            <Pager {...this.state} onPageChange={this.changePageHandle} />
            {
                this.state.isLoading && <div style={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    display:"flex",
                    justifyContent: "center",
                    alignItems: "center",
                    fontSize: 20,
                    backgroundColor: "rgba(0, 0, 0, 0.2)"
                }}>
                    加载中...
                </div>
            }
        </div>
        )
    }
}
