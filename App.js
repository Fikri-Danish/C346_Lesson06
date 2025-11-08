import {Image, StyleSheet, Text, View, ScrollView, Button, Alert} from 'react-native';
import {Picker} from "@react-native-picker/picker";
import React from "react";

function MyApp() {
    const [ans1, setAns1] = React.useState('');
    const [ans2, setAns2] = React.useState('');
    const [ans3, setAns3] = React.useState('');

    return (
        <View style={styles.container}>
            <Text style={{fontSize:20, color:"blue"}}>Welcome To Fikri's Movie Quiz!</Text>
            <ScrollView style={styles.scroll}>
                <View style={{marginTop:10, marginBottom:10}}>
                    <Image source = {require("./img/harrypotter.jpg")} style={{width: '100%', height:200}} resizeMode="contain" />
                    <Text>What movie is this from?</Text>
                    <Picker onValueChange={(value) => setAns1(value)}>
                        <Picker.Item label="click to select" value="" color="grey" />
                        <Picker.Item label="Transformers" value="Transformers" />
                        <Picker.Item label="Harry Potter" value="Harry Potter" />
                        <Picker.Item label="John Wick" value="John Wick" />
                    </Picker>
                </View>
                <View style={{marginTop:10, marginBottom:10}}>
                    <Image source = {require("./img/batman.jpg")} style={{width: '100%', height:200}} resizeMode="contain" />
                    <Text>What movie is this from?</Text>
                    <Picker onValueChange={(value) => setAns2(value)}>
                        <Picker.Item label="click to select" value="" color="grey" />
                        <Picker.Item label="Star Wars" value="Star Wars" />
                        <Picker.Item label="The Batman" value="The Batman" />
                        <Picker.Item label="Superman" value="Superman" />
                    </Picker>
                </View>
                <View style={{marginTop:10, marginBottom:10}}>
                    <Image source = {require("./img/johnwick.jpg")} style={{width: '100%', height:200}} resizeMode="contain" />
                    <Text>What movie is this from?</Text>
                    <Picker onValueChange={(value) => setAns3(value)}>
                        <Picker.Item label="click to select" value="" color="grey" />
                        <Picker.Item label="John Wick" value="John Wick" />
                        <Picker.Item label="Wall-E" value="Wall-E" />
                        <Picker.Item label="Spider-man" value="Spider-man" />
                    </Picker>
                </View>
            </ScrollView>

            <Button title="Submit" onPress={() => {
                const correctAns1 = "Harry Potter";
                const correctAns2 = "The Batman";
                const correctAns3 = "John Wick";
                let totalCorrectAns = 0;

                if (ans1 === correctAns1) {
                    totalCorrectAns += 1;
                }
                if (ans2 === correctAns2) {
                    totalCorrectAns += 1;
                }
                if (ans3 === correctAns3) {
                    totalCorrectAns += 1;
                }

                if (totalCorrectAns >= 3) {
                    Alert.alert(
                        "Congratulation!\n",
                        "You got all Correct!\n" +
                        `Correct: ${totalCorrectAns}/3`
                    );
                }
                else {
                    Alert.alert("Try Again",
                        `Correct: ${totalCorrectAns}/3`
                    );
                }

            }}/>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginLeft: 10,
        marginRight: 10,
        marginTop: 50,
        marginBottom: 30,
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'left',
        justifyContent: 'center',
    },
    scroll: {
        marginTop: 20,
        width: '100%',
        paddingHorizontal: 20,
        backgroundColor: '#eee'
    }
});

export default MyApp;
