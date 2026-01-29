import React from 'react';
import { TouchableOpacity, Text, StyleSheet, Image, View } from 'react-native';

interface SocialButtonProps {
    title: string;
    icon?: React.ReactNode;
    onPress: () => void;
}

const SocialButton = ({ title, icon, onPress }: SocialButtonProps) => {
    return (
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <View style={styles.iconContainer}>{icon}</View>
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        paddingVertical: 16,
        borderRadius: 15,
        marginBottom: 15,
        borderWidth: 1,
        borderColor: '#F0F0F0',
        width: '100%',
        paddingHorizontal: 20,
    },
    iconContainer: { marginRight: 10 },
    text: { fontSize: 16, fontWeight: '600', color: '#000', flex: 1, textAlign: 'center', marginRight: 20 },
});

export default SocialButton;