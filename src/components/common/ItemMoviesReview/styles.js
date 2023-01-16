import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
    container: {
        marginVertical: 5, 
        width: 150,
        borderRadius: 18,
        marginHorizontal: 10
    },
    imageMovie: {
        resizeMode: "cover", 
        width: 150, 
        height: 250,
        borderRadius: 18

    },
    titleMovie: {
        fontSize: 20,
        fontWeight: "400",
        color: "#fff"
    },
    yearMovie: {
        fontSize: 18,
        color: "#8c8c8c"
    }, 
    rattingMovie: {
        fontSize: 18,
        color: "#fff"
    }

})