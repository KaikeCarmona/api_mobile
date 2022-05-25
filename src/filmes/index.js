




import React, {Component} from 'react';
import { StyleSheet, View, Text } from 'react-native';

class Filmes extends Component{
    render(){
        return(
            <View style={styles.container}>
                <Text >{this.props.data.nome}</Text>
            </View>
        );
    }
}
export default Filmes;

const styles = StyleSheet.create({
    container:{
        
    }
})