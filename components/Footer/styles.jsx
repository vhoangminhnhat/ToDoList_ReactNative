import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    addList: {
        bottom: 30,
        paddingHorizontal: 20,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },

    input: {
        height: 44,
        width: '80%',
        backgroundColor: '#fff',
        borderWidth: 1,
        borderRadius: '20%',
        borderColor: '#91420a',
        paddingHorizontal: 15,
        fontWeight: 'bold'
    },

    iconWrapper: {
        textAlign: 'center',
        backgroundColor: '#542708',
        borderRadius: 40,
        paddingHorizontal: 15,
        paddingVertical: 5
    },

    icon: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#fff'
    }
});

export default styles;