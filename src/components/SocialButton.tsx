import React from 'react';
import { TouchableOpacity, Text, View, StyleSheet } from 'react-native';

interface SocialButtonProps {
    title: string;
    icon?: React.ReactNode;
    onPress: () => void;
}

const SocialButton = ({ title, icon, onPress }: SocialButtonProps) => {
    return (
        <TouchableOpacity 
            className="flex-row items-center bg-white h-[60px] rounded-[16px] px-6 mb-4 border border-gray-100" 
            onPress={onPress}
            style={styles.shadow}
        >
            <View className="mr-0">
                {icon}
            </View>
            <Text className="flex-1 text-center text-[#1A202C] text-base font-bold ml-[-24px]">
                {title}
            </Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.05,
        shadowRadius: 10,
        elevation: 3,
    }
});

export default SocialButton;