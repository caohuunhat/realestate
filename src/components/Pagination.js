import React, { Component } from 'react'

class Pagination extends Component {
    state = {
        currentPage: 1
    }

    onChangeNext = async () => {
        await this.onNext();
        this.onCurrentPage();
    }

    onChangePrev = async () => {
        await this.onPrev();
        this.onCurrentPage();
    }

    onNext = () => {
        this.setState({
            currentPage: this.state.currentPage + 1
        })
    }

    onPrev = () => {
        this.setState({
            currentPage: this.state.currentPage - 1
        })
    }

    onCurrentPage = () => {
        this.props.onCurrentPage(this.state.currentPage)
    }

    render() {
        let { currentPage } = this.state
        let { checkDatas } = this.props
        let prevStop = currentPage === 1 ? 'disable' : '';
        let nextStop = checkDatas.length === 9 ? '' : 'disable';
        // console.log(checkDatas.length);
        return (
            <ul className="pagination">
                <li
                    className={prevStop}
                    onClick={this.onChangePrev}
                ><a href="#">«</a></li>
                <li><a href="#">1</a></li>
                <li><a href="#">2</a></li>
                <li><a href="#">3</a></li>
                <li><a href="#">4</a></li>
                <li><a href="#">5</a></li>
                <li
                    className={nextStop}
                    onClick={this.onChangeNext}
                ><a href="#">»</a></li>
            </ul>
        )
    }
}
export default Pagination;