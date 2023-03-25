import React from 'react';
import { View, Text, TouchableOpacity, FlatList, Button, StyleSheet } from 'react-native';
export default function ListItems(props) {
    return (
        <View style = {styles.listView}>
            <Text>Testing List Item</Text>

            <FlatList
                data={props.listItems}
                renderItem={({ item }) => (
                    <View>
                        <TouchableOpacity
                            style={{
                                padding: 2,
                                backgroundColor: '#f8f8f8',
                                borderBottomWidth: 1,
                                borderColor: '#eee',
                                width: 180,
                                marginTop: 5,
                                justifyContent: 'space-between',
                                flexDirection: 'row',
                                display: 'flex',
                                margin: 4,
                            }}
                        >
                            <Text> {item.task}</Text>
                            <Button
                                title="Delete"
                                onPress={() => {
                                    props.deleteItem(item.id);
                                }}
                            ></Button>
                        </TouchableOpacity>
                    </View>
                )}
            ></FlatList>
        </View>
    );
}
const styles = StyleSheet.create({
    listView: {
        flex: 1,
        justifyContent: 'center',
    },
    button: {
        alignItems: "center",
        padding: 0,
        marginTop: 0,
    },
    tinyLogo: {
        width: 20,
        height: 20,
        padding: 0,
        justifyContent: 'center',
        resizeMode: 'center',
        alignContent: 'flex-start',
        alignItems: 'flex-start',
        margin: 0
    },
    logo: {
        width: 66,
        height: 58,
    },
});