import React, { useEffect, useState } from 'react';
import { FlatList, Image, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { listData } from '../../services/movieServices';

export default function HomePage() {
    const [dataMovies, setDataMovies] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await listData();
                setDataMovies(response);
            } catch (error) {
                console.error('Erro ao carregar os dados:', error);
            }
        }

        fetchData();
    }, []);

    const renderItem = ({ item }) => (
        <View style={styles.movieContainer}>
            <Image source={{ uri: item.Poster }} style={styles.moviePoster} />
            <View style={styles.movieDetails}>
                <Text style={styles.movieTitle}>{item.Title}</Text>
                <Text style={styles.movieInfo}>{item.Year} | {item.Genre}</Text>
                <Text style={styles.movieInfo}>Diretor: {item.Director}</Text>
                <Text style={styles.moviePlot}>{item.Plot}</Text>
            </View>
        </View>
    );

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Image
                    source={require('../../../assets/netflixLogo.png')}
                    style={styles.logo}
                />
                <Image source={require('../../../assets/icone-lupa.png')}
                    style={styles.lupa}
                />
            </View>

            <FlatList
                data={dataMovies}
                renderItem={renderItem}
                keyExtractor={(item) => item.imdbID}
                contentContainerStyle={styles.listContainer}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
    },
    listContainer: {
        paddingVertical: 20,
        paddingHorizontal: 10,
    },
    movieContainer: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        marginBottom: 20,
    },
    moviePoster: {
        width: 100,
        height: 150,
        marginRight: 15,
    },
    movieDetails: {
        flex: 1,
    },
    movieTitle: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    movieInfo: {
        color: 'white',
        fontSize: 14,
        marginBottom: 5,
    },
    moviePlot: {
        color: 'white',
        fontSize: 14,
    },

    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        paddingTop: 5,
    },
    logo: {
        width: 50,
        height: 50,
    },
    lupa: {
        width: 30,
        height: 30,
    },
});
