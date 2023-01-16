import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
    },
    searchBox: {
        flexDirection: 'row',
        backgroundColor: '#333333',
        borderRadius: 50,
        paddingVertical: 8,
        paddingHorizontal: 5,
        margin: 15,
        alignItems: 'center'
    },
    inputSearch: {
        padding: 0,
        width: '90%',
        fontSize: 20,
        color: '#fff',
        marginLeft: 3,
    }

})