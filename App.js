
import { createAppContainer } from 'react-navigation';
import {
    createStackNavigator,
} from 'react-navigation-stack';
import HomeScreen from './HomeScreen';
import ArticleScreen  from './ArticleScreen';
import AuthorScreen from './AuthorScreen';

const RootStack = createStackNavigator({
    /**
    * This is the route configuration object.
    * It defines 3 routes:
    * 1. Home
    * 2. Article
    * 3. Author
    **
    Each route corresponds to the following screens, respectively:
    * 1. HomeScreen
    * 2. ArticleScreen
    * 3. AuthorScreen
    */
    Home: {
        screen: HomeScreen,
    },
    Article: {
        screen: ArticleScreen
    },
    Author: {
        screen: AuthorScreen
    },
    
}, {
    /**
    * This is the options object
    */
    initialRouteName: 'Home',
    navigationOptions: {
        headerStyle: {
            backgroundColor: '#a80000',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
        },
    },
});
const AppContainer = createAppContainer(RootStack);
export default AppContainer;
