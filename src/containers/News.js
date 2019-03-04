import React, {Component} from 'react';
import {connect} from "react-redux";

class News extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search: ''
        };
        this.searchChange = this.searchChange.bind(this);
        this.filteredNews = this.filteredNews.bind(this);
    }

    searchChange(e) {
        this.setState({search: e.target.value});
    }

    filteredNews() {
        let search = this.state.search;
        return this.props.news.filter(i =>
            ~i.header.toLowerCase().indexOf(search.toLowerCase()) ||
            ~i.text.toLowerCase().indexOf(search.toLowerCase())
        );
    }

    render() {
        let news = this.filteredNews();

        return (
            <div>
                <input value={this.state.search} onChange={this.searchChange} type="text"/>
                {
                    news.map(i => {
                        return (
                            <div className="media" key={i.id} style={{marginTop: '20px'}}>
                                <div className="media-body">
                                    <h5 className="mt-0">{i.header}</h5>
                                    {i.text}
                                </div>
                            </div>
                        );
                    })
                }
            </div>

        );
    }
}


const mapStateToProps = state => ({
    news: state.news
});

export default connect(mapStateToProps)(News)