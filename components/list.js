import React, { useState } from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import DATA from './local';
const render = (item) => {
    const [list, updateList] = useState(DATA);
          const handleRemoveItem = idx => {
            const temp = [...list];
        
            temp.splice(idx, 1);
        
            updateList(temp);
        }
    
    return (
        <View style={styles.mainBody}>       
          <View>
            <Image
              style={styles.tinyLogo}
              source={item.image}
            />
            <Text>  
                {item.firstName} {item.lastName}      
            </Text>
            <Text>{item.emailAddress}</Text>
            <Text>{item.employeeCode}</Text>
            <Text>{item.phoneNumber}</Text>
            <Text>{item.jobTitleName}</Text>
            <TouchableOpacity style={styles.button} onPress={() => handleRemoveItem(idx)}>
              <Text>Delete</Text>
            </TouchableOpacity>
          </View>
        </View>
      );
}

export default render;
const styles = StyleSheet.create({
    
    tinyLogo: {
      width: 50,
      height: 50,
    },
    button: {
      alignItems: "center",
      backgroundColor: "#DDDDDD",
      padding: 10
    },
  });
  
