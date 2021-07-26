
import React, { Component } from 'react';
import {
    StyleSheet,
    Image,
    Text,
    TouchableOpacity,
    View,
    Linking
} from 'react-native';
const url="https://www.poetryfoundation.org/poems/53810/fishing-on-the-susquehanna-in-july"
export default class AuthorScreen extends Component<Props> {
    static navigationOptions = {
        title: 'Author',
    };
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>
                    Author
                </Text>

                <Text>

                Billy Collins
                
                {'\n'}
                

                     <TouchableOpacity onPress={() => Linking.openURL('https://www.poetryfoundation.org/poems/53810/fishing-on-the-susquehanna-in-july')}>
                        <Text> Url : https://www.poetryfoundation.org/poems/53810/fishing-on-the-susquehanna-in-july </Text>     
                    </TouchableOpacity>


                </Text>

            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    title: {
        fontSize: 40,
        fontWeight: 'bold',
        textAlign: 'center',
        margin: 20,
    },
    image: {
        width: 360,
        height: 360,
    },
});
