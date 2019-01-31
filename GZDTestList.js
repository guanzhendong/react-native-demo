/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    ScrollView,
    FlatList,
    SectionList,
    TouchableHighlight,
    Button,
    Alert,
    Animated,
    Dimensions
} from 'react-native';

import ListCell from './ListCell';

import TestCell from './TestCell';


// const request_url = 'https://www.toutiao.com/api/comment/list/?group_id=6531845812878574084&item_id=6531845812878574084&offset=0&count=100';

const request_url = 'https://www.toutiao.com/api/comment/list/?group_id=6535257759816876552&item_id=6535257759816876552&offset=0&count=1000';

//获取屏幕的宽度和高度
const screenSize = Dimensions.get('window');

type Props = {
    data: []
};

export default class GZDTestList extends Component <Props> {

    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            //网络请求状态
            error: false,
            errorInfo: "",
            dataArray: [],
        }
    }

    getMoviesFromApiAsync() {
        fetch(request_url)
            .then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson);
                this.setState({
                    dataArray: responseJson.data.comments
                })
            })
            .catch((error) => {
                console.error(error);
            });

        // fetch(request_url)
        //     .then((response) => response.json())
        //     .then((responseData) => {
        //         let dataComments = responseData.data.comments;
        //         console.log(dataComments);
        //
        //         this.setState({
        //             //复制数据源
        //             dataArray: dataComments,
        //             isLoading: false,
        //         });
        //         data = null;
        //         dataComments = null;
        //     })
        //     .catch((error) => {
        //         this.setState({
        //             error: true,
        //             errorInfo: error
        //         })
        //     })
        //     .done();
    }

    // 注意这个方法前面有async关键字
    // async getMoviesFromApi() {
    //     try {
    //         // 注意这里的await语句，其所在的函数必须有async关键字声明
    //         let response = await fetch('https://facebook.github.io/react-native/movies.json');
    //         let responseJson = await response.json();
    //         console.log(responseJson)
    //         return responseJson.movies;
    //     } catch(error) {
    //         console.error(error);
    //     }
    // }

    componentDidMount() {
        this.getMoviesFromApiAsync();
    }

    //索引
    keyExtractor = (item: Object, index: number): string => {
        return `${index}`;
    };

    renderItem({item}) {
        return (
            <View>
                <ListCell item={item}/>
            </View>
        );
    }

    render() {
        return (
            <FlatList style={styles.flatList}
                keyExtractor={this.keyExtractor}
                data={this.state.dataArray}
                renderItem={this.renderItem}
            />
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    image: {
        width: 300,
        height: 300
    },
    cell: {
        width: screenSize.width,
        // height: 50
    },
    flatList: {
        marginTop: 64
    }
});

