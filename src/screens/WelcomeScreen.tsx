import React from 'react';
import {
    Text,
    View,
    Image,
    SafeAreaView,
    TouchableOpacity,
} from 'react-native';
import { MoveRight } from 'lucide-react-native';

const WelcomeScreen = ({ onGetStarted }: { onGetStarted: () => void }) => {
    return (
        <SafeAreaView className="flex-1 bg-white">
            <View className="flex-1 bg-white w-full max-w-[480px] self-center">
                <View className="flex-1 items-center px-10 justify-between py-10">
                    {/* Title Section */}
                    <View className="items-center mt-5">
                        <Text className="text-[28px] font-bold text-[#4A3428]">Welcome to the</Text>
                        <View className="flex-row items-center mt-[5px]">
                            <Text className="text-[32px] font-normal text-black">Solar </Text>
                            <View className="bg-black px-[15px] py-[5px] rounded-[20px]">
                                <Text className="text-[32px] font-bold text-white">Koala</Text>
                            </View>
                        </View>
                        <Text className="text-xs text-[#999] mt-2">by Group cs-73</Text>
                    </View>

                    {/* Subtitle */}
                    <Text className="text-base text-[#777] text-center px-2.5 leading-6">
                        Your intelligent solar partner for a brighter tomorrow ☀️🌿
                    </Text>

                    {/* Main Logo Image */}
                    <Image
                        source={require('../assets/logo.jpg')}
                        className="w-[80%] aspect-square"
                        resizeMode="contain"
                    />

                    {/* Footer Section */}
                    <View className="w-full items-center">
                        <TouchableOpacity 
                            className="bg-black flex-row items-center justify-center py-[18px] px-[35px] rounded-[40px] w-full"
                            onPress={onGetStarted}
                        >
                            <Text className="text-white text-lg font-semibold">Get Started</Text>
                            <MoveRight color="#FFF" size={20} style={{ marginLeft: 10 }} />
                        </TouchableOpacity>

                        <View className="flex-row mt-[25px]">
                            <Text className="text-[#777] text-sm">Already have an account? </Text>
                            <TouchableOpacity>
                                <Text className="text-[#E67E22] font-bold text-sm">Sign in</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
};

export default WelcomeScreen;