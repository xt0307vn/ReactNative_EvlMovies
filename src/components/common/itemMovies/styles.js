import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
    container: {
        marginVertical: 5, 
        flexDirection: "row",
        width: '100%'
    },
    imageMovie: {
        resizeMode: "cover", 
        width: 110, 
        height: 150,
        borderRadius: 8
    },
    titleMovie: {
        width: 250,
        fontSize: 20,
        fontWeight: "400",
        color: "#fff"
    },
    overview: {
        fontSize: 18,
        color: "#8c8c8c"
    }, 
    rattingMovie: {
        fontSize: 18,
        color: "#fff"
    }

})