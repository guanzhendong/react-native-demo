import React, {Component} from 'react';
import {
    View,
    Image,
    Text,
    Dimensions,
    StyleSheet,
    TouchableWithoutFeedback,
    NativeModules,
    TouchableHighlight,
    Alert
} from 'react-native';

import {
    Button,
} from 'react-native-elements'

const screenSize = Dimensions.get('window');

type Props = {
    item: Object,
    onImageClick: (item: Object) => void
};


export default class ListCell extends Component <Props> {

    onImageClick = () => {
        let {item} = this.props;
        console.log(item);
        // Alert.alert('我把号','发巴基',[
        //     {text: 'Cancel', onPress: () => console.log('Cancel Pressed!')},
        //     {text: 'OK', onPress: () => console.log('OK Pressed!')},
        // ])

        var rnManager = NativeModules.RNManager;
        // 方法调用

        //rnManager.doSomething({item});

        //
        // rnManager.alertWithTitle('title','content3');

        //
        // rnManager.callbackMethod(({item}), => {
        //
        // });

        // rnManager.goWebDetail({item});

        // rnManager.pushToNativeVC({item});
    }

    render() {
        // let {item} = this.props;
        let item = this.props.item;
        console.log(item);

        return (
            <TouchableHighlight onPress={this.onImageClick}>
                <View style={styles.container}>
                    <Image source={{uri: item.user.avatar_url}}
                           style={styles.imageStyle}
                           onPress={this.onImageClick}
                    />
                    <View>
                        <Text style={styles.name}>
                            {item.user.name}
                        </Text>
                        <Text style={styles.subTitle}
                              adjustsFontSizeToFit={true}>
                            {item.text}
                        </Text>
                        {/* <Button
                            title='BUTTON WITH RIGHT ICON'
                        /> */}
                    </View>
                </View>
            </TouchableHighlight>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        // justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: '#F5FCFF',
        // borderWidth:0.5,
        // borderColor:'blue',
        paddingBottom: 30
    },
    imageStyle: {
        width: 50,
        height: 50,
        marginTop: 5,
        marginLeft: 10,
        marginRight: 10,
        // borderColor: '#555555',
        // borderWidth: 5,
        borderRadius: 25
        // padding:10
    },
    subTitle: {
        fontSize: 15,
        color: 'rgb(100,100,100)',
        width: screenSize.width - 70,
        // borderColor: '#00ff00',
        // borderWidth: 1,
        marginTop: 10,
        marginRight: 10
    },
    name: {
        fontSize: 16,
        // color: '#112233',
        // left: 0,
        marginTop: 10
    }
});
