
import React, { Component } from 'react';
import {
    StyleSheet,
    Image,
    Text,
    View
} from 'react-native';
export default class ArticleScreen extends Component<Props> {
    static navigationOptions = {
        title: 'Article',
    };
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>
                    Article 
                    
                   
                </Text>
                <Text> 
                    Title :Fishing on the Susquehanna in July {'\n'}
                    {'\n'}I have never been fishing on the Susquehanna{'\n'}
                    or on any river for that matter{'\n'}
                    to be perfectly honest. {'\n'}

                    {'\n'}.Not in July or any month{'\n'}
                    have I had the pleasure—if it is a pleasure—{'\n'}
                    of fishing on the Susquehanna.{'\n'}

                    {'\n'}I am more likely to be found{'\n'}
                    in a quiet room like this one—{'\n'}
                    a painting of a woman on the wall,{'\n'}

                    {'\n'} a bowl of tangerines on the table—{'\n'}
                    trying to manufacture the sensation{'\n'}
                    of fishing on the Susquehanna.{'\n'}

                    {'\n'} There is little doubt{'\n'}
                    that others have been fishing{'\n'}
                    on the Susquehanna,{'\n'}

                    {'\n'}rowing upstream in a wooden boat,{'\n'}
                    sliding the oars under the water{'\n'}
                    then raising them to drip in the light.{'\n'}

                    {'\n'} But the nearest I have ever come to{'\n'}
                    fishing on the Susquehanna{'\n'}
                    was one afternoon in a museum in Philadelphia{'\n'}

                    {'\n'} when I balanced a little egg of time{'\n'}
                    in front of a painting{'\n'}
                    in which that river curled around a bend{'\n'}

                    {'\n'} under a blue cloud-ruffled sky,{'\n'}
                    dense trees along the banks,{'\n'}
                    and a fellow with a red bandanna{'\n'}

                    {'\n'}sitting in a small, green{'\n'}
                    flat-bottom boat{'\n'}
                    holding the thin whip of a pole.{'\n'}

                    {'\n'}That is something I am unlikely{'\n'}
                    ever to do, I remember{'\n'}
                    saying to myself and the person next to me.{'\n'}

                    {'\n'}  Then I blinked and moved on{'\n'}
                    to other American scenes{'\n'}
                    of haystacks, water whitening over rocks,{'\n'}

                    {'\n'}even one of a brown hare
                   who seemed so wired with alertness{'\n'}
                    I imagined him springing right out of the frame.
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
