import React from 'react';
import {
    Text,
    View,
    Image,
    SafeAreaView,
    TouchableOpacity,
    Dimensions,
    Platform,
    StatusBar
} from 'react-native';
import { MoveRight, Menu } from 'lucide-react-native';
import { useNavigation } from '@react-navigation/native';
import { RootStackNavigationProp } from '../navigation/AppNavigator';

// --- Responsive Helpers ---
const { width, height } = Dimensions.get('window');
const wp = (percentage: number) => (width * percentage) / 100;
const hp = (percentage: number) => (height * percentage) / 100;

const WelcomeScreen = () => {
    const navigation = useNavigation<RootStackNavigationProp>();

    return (
        <SafeAreaView className="flex-1 bg-white" style={{ paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0 }}>
            <View className="flex-1 w-full px-6 flex-col justify-between pb-8">
                
                {/* --- 1. Top Header (Menu Icon) --- */}
                <View className="w-full items-end mt-4">
                    <TouchableOpacity className="p-2">
                        <Menu color="#333" size={wp(7)} />
                    </TouchableOpacity>
                </View>

                {/* --- 2. Title & Text Section --- */}
                <View className="w-full items-center mt-[-20px]">
                    {/* "Welcome to the" */}
                    <Text 
                        className="font-bold text-[#4A3428] text-center"
                        style={{ fontSize: wp(7), marginBottom: hp(1) }}
                    >
                        Welcome to the
                    </Text>
                    
                    {/* "Solar Koala" Branding */}
                    <View className="flex-row items-center justify-center">
                        <Text className="font-normal text-black" style={{ fontSize: wp(9) }}>
                            Solar{' '}
                        </Text>
                        <View className="bg-black px-6 py-2 rounded-[30px] ml-1">
                            <Text className="font-bold text-white" style={{ fontSize: wp(9) }}>
                                Koala
                            </Text>
                        </View>
                    </View>
                    
                    {/* Group Name */}
                    <Text className="text-[#999] mt-3 font-medium" style={{ fontSize: wp(3.2) }}>
                        by Group cs-73
                    </Text>

                    {/* Subtitle */}
                    <Text 
                        className="text-[#777] text-center mt-8 font-medium leading-7"
                        style={{ fontSize: wp(4.2), maxWidth: '85%' }}
                    >
                        Your intelligent solar partner for a brighter tomorrow ☀️🌿
                    </Text>
                </View>

                {/* --- 3. Logo Section --- */}
                <View className="w-full items-center justify-center flex-1">
                    <Image
                        source={require('../assets/Logo.png')} 
                        style={{ 
                            width: wp(45), // Adjusted to match the visual weight in the UI
                            height: wp(45),
                        }}
                        resizeMode="contain"
                    />
                </View>

                {/* --- 4. Bottom Buttons Section --- */}
                <View className="w-full items-center mb-6">
                    {/* Get Started Button */}
                    <TouchableOpacity 
                        className="bg-black flex-row items-center justify-center rounded-[50px] w-full shadow-lg"
                        style={{ 
                            height: 65, // Fixed height for consistency
                            shadowColor: "#000",
                            shadowOffset: { width: 0, height: 4 },
                            shadowOpacity: 0.2,
                            shadowRadius: 5,
                            elevation: 5
                        }}
                        onPress={() => navigation.navigate('Signup')}
                    >
                        <Text className="text-white font-bold mr-3" style={{ fontSize: wp(4.5) }}>
                            Get Started
                        </Text>
                        <MoveRight color="#FFF" size={22} strokeWidth={2} />
                    </TouchableOpacity>

                    {/* Sign In Text */}
                    <View className="flex-row mt-8">
                        <Text className="text-[#666]" style={{ fontSize: wp(3.8) }}>
                            Already have an account?{' '}
                        </Text>
                        <TouchableOpacity>
                            <Text className="text-[#E67E22] font-bold" style={{ fontSize: wp(3.8) }}>
                                Sign in
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>

            </View>
        </SafeAreaView>
    );
};

export default WelcomeScreen;