import React, { Component } from 'react';
import PropertyItems from './PropertyItems';

class Properties extends Component {
    state = {
        datas: this.props.datas,
        datasSearch: this.props.datasSearch
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.datas !== prevState.datas) {
            return {
                datas: nextProps.datas,
            }
        }
        // if (nextProps.datasSearch !== prevState.datasSearch) {
        //     return {
        //         datasSearch: nextProps.datasSearch,
        //     }
        // }
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.state.datas !== prevState.datas) {
            this.setState({
                datas: this.state.datas,
            })
        }
        // if (this.state.datasSearch !== prevState.datasSearch) {
        //     this.setState({
        //         datasSearch: this.state.datasSearch,
        //     })
        // }
    }

    showDatasPost = () => {
        const { datasSearch, datas } = this.state;
        if (datas.length > 0 && !datasSearch) {
            console.log(datas);
            return this.showPost(datas);
        }
        return this.showPost(datasSearch);
    }

    showPost = (datas) => {
        const DB = datas?.map(data => {
            return <PropertyItems data={data} />
        })
        return DB;
    }


    // showPost = () => {
    //     const { datas } = this.state;
    //     const DB = datas?.map(data => {
    //         return <PropertyItems data={data} />
    //     })
    //     return DB;
    // }

    render() {
        console.log(this.state.datas);
        // console.log(this.state.datasSearch);
        return (
            <>
                {/* {this.showPost()} */}
                {this.showDatasPost()}
            </>
        )
    }
}

export default Properties;