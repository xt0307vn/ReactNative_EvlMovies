import { StyleSheet } from "react-native";
import constants from "../../../controllers/constants";

export default styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        backgroundColor: constants.color.backgroundGrownLight,
        borderRadius: 8,
        alignItems: 'flex-start',
        marginVertical: 5,
        padding: 5
    },
    imageMovie: {
        resizeMode: "cover", 
        width: 110, 
        height: 150,
        borderRadius: 8
    },
    titleMovie: {
        width: '100%',
        fontSize: 16,
        fontWeight: "400",
        color: "#fff"
    },
    overview: {
        fontSize: 13,
        color: "#8c8c8c"
    }, 
    rattingMovie: {
        fontSize: 16,
        color: "#fff"
    }

})