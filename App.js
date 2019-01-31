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
    Animated
} from 'react-native';

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
    android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

class Greeting extends Component {
    render() {
        return (
            <Text>
                hello {this.props.t}!
            </Text>
        );
    }
}

class Blink extends Component {
    constructor(props) {
        super(props);
        this.state = { showText: true };

        // 每1000毫秒对showText状态做一次取反操作
        setInterval(() => {
            this.setState(previousState => {
                return { showText: !previousState.showText };
            });
        }, 1000);
    }

    render() {
        // 根据当前showText的值决定是否显示text内容
        let display = this.state.showText ? this.props.text : ' ';
        return (
            <Text>{display}</Text>
        );
    }
}



const onButtonPress = () => {
    Alert.alert('Button has been pressed!');
};


class MyButton extends Component {
    _onPressButton() {
        // console.log("You tapped the button!");
        Alert.alert('Button has been pressed!');
    }

    render() {
        return (
            <Button
                onPress={this._onPressButton}
                title="Press Purple"
                color="#841584"
                accessibilityLabel="Learn more about purple"
            />
        );
    }
}

type Props = {};
export default class App extends Component<Props> {
    render() {
        let pic = {
            uri: 'https://images.pexels.com/photos/775416/pexels-photo-775416.jpeg?w=1260&h=750&dpr=2&auto=compress&cs=tinysrgb'
        }
        return (
            <View style={styles.container}>
                <Blink text='I love to blink' />
                <Blink text='Yes blinking is so great' />
                <Blink text='Why did they ever take this out of HTML' />
                <Blink text='Look at me look at me look at me' />
                <Image
                    source={pic}
                    style={styles.image}
                >
                </Image>
                <Text style={styles.welcome}>
                    Welcome to React Native!
                </Text>
                <Greeting t='官振东'/>
                <Text style={styles.instructions}>
                    To get started, edit App.js
                </Text>
                <Text style={styles.instructions}>
                    {instructions}
                </Text>
                <MyButton />
                <FadeInView style={{width: 250, height: 50, backgroundColor: 'powderblue'}}>
                    <Text style={{fontSize: 28, textAlign: 'center', margin: 10}}>
                        Fading in
                    </Text>
                </FadeInView>
            </View>
        );
    }
}

// export default class App extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {text: ''};
//     }
//
//     render() {
//         return (
//             <View style={{padding: 10}}>
//                 <TextInput
//                     style={{height: 40}}
//                     placeholder="Type here to translate!"
//                     onChangeText={(text) => this.setState({text})}
//                 />
//                 <Text style={{padding: 10, fontSize: 42}}>
//                     {this.state.text.split(' ').map((word) => word && '🍕').join(' ')}
//                 </Text>
//             </View>
//         );
//     }
// }

// export default class App extends Component {
//     render() {
//         let pic = {
//             uri: 'https://images.pexels.com/photos/775416/pexels-photo-775416.jpeg?w=1260&h=750&dpr=2&auto=compress&cs=tinysrgb'
//             // require('./image/guan.png')
//         }
//         return(
//             <ScrollView>
//                 <Text style={{fontSize:96}}>Scroll me plz</Text>
//                 <Image source={require('./image/guan.png')} style={styles.image}/>
//                 <Image source={pic} style={styles.image}/>
//                 <Image source={pic} style={styles.image}/>
//                 <Image source={pic} style={styles.image}/>
//                 <Image source={pic} style={styles.image}/>
//                 <Text style={{fontSize:96}}>If you like</Text>
//                 <Image source={pic} style={styles.image}/>
//                 <Image source={pic} style={styles.image}/>
//                 <Image source={pic} style={styles.image}/>
//                 <Image source={pic} style={styles.image}/>
//                 <Image source={pic} style={styles.image}/>
//                 <Text style={{fontSize:96}}>Scrolling down</Text>
//                 <Image source={pic} style={styles.image}/>
//                 <Image source={pic} style={styles.image}/>
//                 <Image source={pic} style={styles.image}/>
//                 <Image source={pic} style={styles.image}/>
//                 <Image source={pic} style={styles.image}/>
//                 <Text style={{fontSize:96}}>What's the best</Text>
//                 <Image source={pic} style={styles.image}/>
//                 <Image source={pic} style={styles.image}/>
//                 <Image source={pic} style={styles.image}/>
//                 <Image source={pic} style={styles.image}/>
//                 <Image source={pic} style={styles.image}/>
//                 <Text style={{fontSize:96}}>Framework around?</Text>
//                 <Image source={pic} style={styles.image}/>
//                 <Image source={pic} style={styles.image}/>
//                 <Image source={pic} style={styles.image}/>
//                 <Image source={pic} style={styles.image}/>
//                 <Image source={pic} style={styles.image}/>
//                 <Text style={{fontSize:80}}>React Native</Text>
//             </ScrollView>
//         );
//     }
// }

// export default class App extends Component {
//
//     getMoviesFromApiAsync() {
//         return fetch('https://facebook.github.io/react-native/movies.json')
//             .then((response) => response.json())
//             .then((responseJson) => {
//                 console.log(responseJson)
//                 return responseJson.movies;
//             })
//             .catch((error) => {
//                 console.error(error);
//             });
//     }
//
//     // 注意这个方法前面有async关键字
//     async getMoviesFromApi() {
//         try {
//             // 注意这里的await语句，其所在的函数必须有async关键字声明
//             let response = await fetch('https://facebook.github.io/react-native/movies.json');
//             let responseJson = await response.json();
//             console.log(responseJson)
//             return responseJson.movies;
//         } catch(error) {
//             console.error(error);
//         }
//     }
//
//     render() {
//         return (
//             <View style={styles1.container}>
//                 <FlatList
//                     data={[
//                         {key: 'Devin'},
//                         {key: 'Jackson'},
//                         {key: 'James'},
//                         {key: 'Joel'},
//                         {key: 'John'},
//                         {key: 'Jillian'},
//                         {key: 'Jimmy'},
//                         {key: 'Julie'},
//                     ]}
//                     renderItem={({item}) => <Text style={styles1.item}>{item.key}</Text>}
//                 />
//             </View>
//         );
//     }
//
//     componentDidMount(){
//         this.getMoviesFromApiAsync();
//         this.getMoviesFromApi();
//     }
//
// }

const styles1 = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 22
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },
})

// export default class App extends Component {
//     render() {
//         return (
//             <View style={styles2.container}>
//                 <SectionList
//                     sections={[
//                         {title: 'D', data: ['Devin']},
//                         {title: 'J', data: ['Jackson', 'James', 'Jillian', 'Jimmy', 'Joel', 'John', 'Julie']},
//                     ]}
//                     renderItem={
//                         ({item}) => <Text style={styles2.item}>{item}</Text>
//                     }
//                     renderSectionHeader={
//                         ({section}) => <Text style={styles2.sectionHeader}>{section.title}</Text>
//                     }
//                 />
//             </View>
//         );
//     }
// }

class FadeInView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fadeAnim: new Animated.Value(0),          // 透明度初始值设为0
        };
    }
    componentDidMount() {
        Animated.timing(                            // 随时间变化而执行的动画类型
            this.state.fadeAnim,                      // 动画中的变量值
            {
                toValue: 1,                             // 透明度最终变为1，即完全不透明
            }
        ).start();                                  // 开始执行动画
    }
    render() {
        return (
            <Animated.View                            // 可动画化的视图组件
                style={{
                    ...this.props.style,
                    opacity: this.state.fadeAnim,          // 将透明度指定为动画变量值
                }}
            >
                {this.props.children}
            </Animated.View>
        );
    }
}

const styles2 = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 22
    },
    sectionHeader: {
        paddingTop: 2,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 2,
        fontSize: 14,
        fontWeight: 'bold',
        backgroundColor: 'rgba(247,247,247,1.0)',
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },
})

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // flexDirection: 'row',
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
    }
});

