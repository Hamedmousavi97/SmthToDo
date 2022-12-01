// the navigation bar used for the application 

//importings
import React, {Component} from 'react';
import { View } from 'react-native';
import TasksScreen from '../screen/tasksPage'

//importing the library for using the tabbar as the navigation
import Tabbar from 'react-native-tabbar-bottom'
import {globalStyles} from '../shared/globalStyle'
import HobbyScreen from '../screen/hobbyPage';

// the main function
export default class TabBarBottom extends Component {

  // defining states
  constructor() {
    super()
    this.state = {
      page: "TaskScreen",
    }
  }

  //rendering the navigation bar
  render() {
    return (
      <View style={globalStyles.container}>
        
        {/* assigning the page rendering functions to the states */}
        {/* the first page */}
        {this.state.page === "TaskScreen" && <TasksScreen/>}

        {/* the second page */}
        {this.state.page === "HobbyScreen" && <HobbyScreen/> }

          {/* // the tab bar navigation styles and rendering functionality */}
          <Tabbar
            // styles
            style={globalStyles.tabBar}
            iconColor='#FFB17A'
            selectedIconColor='#FCE762'
            tabbarBgColor= '#4F4789'

            // states
            stateFunc={(tab) => {
              this.setState({page: tab.page})
            }}

            // defining the active tab
            activePage={this.state.page}

            // all tabs to render
            tabs={[
              {
              page: "TaskScreen",
              icon: "list",
              iconText: "Home"
              },
              {
              page: "HobbyScreen",
              icon: "analytics-outline",
              iconText: "Challenge"
              },
            ]}
          />
      </View>
    );
  }
}

//if a screen selected by user from the tab bar matches the screen defined on states
// the application will render the function assigned to that page
