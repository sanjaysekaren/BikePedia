import React, { Component } from 'react';
import { Text, View, ScrollView, RefreshControl } from 'react-native';
// import axios from 'axios';
import ContentDetails from './ContentDetails';
import Header from "./components/Header";
class Contents extends Component {
    // state = {containers:[]}

    constructor(props) {
        super(props);
        this.current_page = 1;
        this.isLoadingPagination = false;
        this.state = { containers: [], isLoading: true, refreshing: false, isLoadingPage: false };
    }

    componentDidMount() {
        fetch("http://192.168.43.187:1234/api/fetchAllArticles/1")
            .then((res) => res.json()).then((j) => {
                this.setState({ containers: j, isLoading: false });
            })

    }

    renderBody() {
        return this.state.containers.map(container =>
            <ContentDetails key={container.title} container={container} />
        );

    }
    _onRefresh = () => {
        this.setState({ refreshing: true });
        fetch("http://192.168.43.187:1234/api/fetchAllArticles/1")
            .then((res) => res.json()).then((j) => {
                this.setState({ containers: j, isLoading: false, refreshing: false })
                console.log(j);
            })
    }

    isCloseToBottom = ({ layoutMeasurement, contentOffset, contentSize }) => {
        const paddingToBottom = 20;
        return layoutMeasurement.height + contentOffset.y >=
            contentSize.height - paddingToBottom;
    };

    render() {
        return (
            <View style={{ flex: 1 }}>
                <Header headerText={'Rev your heart!!!!'} />
                <ScrollView
                    refreshControl={
                        <RefreshControl
                            refreshing={this.state.refreshing}
                            onRefresh={this._onRefresh}
                        />
                    }
                    onScroll={({ nativeEvent }) => {
                        if (this.isCloseToBottom(nativeEvent) && !this.isLoadingPagination) {
                            this.isLoadingPagination = true;
                            this.current_page = this.current_page + 1;
                            let url = `http://192.168.43.187:1234/api/fetchAllArticles/${this.current_page}`;
                            fetch(url)
                                .then((res) => res.json()).then((j) => {
                                    let newArray = this.state.containers;
                                    let some = newArray.concat(j);
                                    this.setState({ containers: some })
                                    this.isLoadingPagination = false;
                                })
                        }
                    }}
                    scrollEventThrottle={400}
                >
                    {this.state.isLoading ? <View /> : this.renderBody()}

                </ScrollView>
            </View>
        );
    }
}

export default Contents;