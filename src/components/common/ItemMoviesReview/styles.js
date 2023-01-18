import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
    container: {
        marginVertical: 5, 
        width: 140,
        height: 300,
        borderRadius: 18,
        marginHorizontal: 10,
        borderRadius: 18,
        backgroundColor: '#000'
    },
    imageMovie: {
        resizeMode: "cover", 
        width: '100%', 
        height: 200,
        borderTopLeftRadius: 18,
        borderTopRightRadius: 18

    },
    titleMovie: {
        fontSize: 18,
        fontWeight: "400",
        color: "#fff"
    },
    yearMovie: {
        fontSize: 15,
        color: "#8c8c8c"
    }, 
    rattingMovie: {
        fontSize: 15,
        color: "#fff"
    }

})