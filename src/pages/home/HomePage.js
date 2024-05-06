import React, { useEffect, useState } from 'react';
import {
    Alert,
    FlatList,
    Image,
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
} from 'react-native';
import { listData } from '../../services/movieServices';

export default function HomePage() {
    const [dataMovies, setDataMovies] = useState({});

    useEffect(() => {
        const renderdData = async () => {
            const response = await listData();
            setDataMovies(response);
        }

        renderdData();
    }, [])

    const renderItem = ({ item }) => (
        <View style={styles.container}>
            <Image source={{ uri: item.poster }} style={styles.images} />
            <Text style={styles.title}>{item.title}</Text>
        </View>
    );

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={dataMovies}
                renderItem={renderItem}
              
            />
        </SafeAreaView>
    );
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black',
        paddingTop: 50,
        justifyContent: 'flex-start',
        paddingLeft: 15,
        paddingRight: 15,
        flex: 1,
    },
    smallImage: {
        width: 70,
        height: 70,
    },
    header: {
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
    },
    search: {
        width: 50,
        height: 50,
    },
    content: {
        flex: 1,
        backgroundColor: 'black',
    },
    title: {
        color: 'white',
        fontSize: 25,
        fontWeight: 'bold',
        marginTop: 10,
    },
    images: {
        width: 140,
        height: 190,
        margin: 10,
    }
});