
import React, { Component } from 'react';
import {
    StyleSheet,
    Button,
    Text,
    View
} from 'react-native';
export default class HomeScreen extends Component<Props> {
    /**
    * A screen component can set navigation options such as the title.
    */
    static navigationOptions = {
        title: 'My Article',
    };
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>
                    Home
                </Text>
                <View style={styles.button}>
                    <Button
                        title="Article"
                        onPress={() => { this.props.navigation.navigate('Article') }}
                    />
                </View>
                <View style={styles.button}>
                    <Button
                        title="Author"
                        onPress={() => { this.props.navigation.navigate('Author') }}
                    />
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    title: {
        fontSize: 20,
        textAlign: 'center',
        margin: 20,
    },
    button: {
        margin: 10,
    }
});
